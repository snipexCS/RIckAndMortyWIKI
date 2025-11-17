from sqlalchemy import create_engine, Column, Integer, String, Float, CheckConstraint
from sqlalchemy.orm import declarative_base, sessionmaker, Session
from fastapi import FastAPI, Depends
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  
    allow_credentials=True,
    allow_methods=["*"],   
    allow_headers=["*"],    
)

DATABASE_URL = "sqlite:///./products.db"

engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()


class Product(Base):
    __tablename__ = "products"

    id = Column(Integer, primary_key=True, index=True)
    product_name = Column(String, nullable=False)
    product_price = Column(Float, nullable=False)
    product_type = Column(String)
    product_img = Column(String)
    product_description = Column(String)
    product_quantity = Column(Integer, default=0)
    rating = Column(Integer, default=0)

    __table_args__ = (
        CheckConstraint("product_quantity >= 0", name="quantity_non_negative"),
        CheckConstraint("rating >= 0 AND rating <= 5", name="rating_0_5"),
    )


Base.metadata.create_all(bind=engine)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


class ProductCreate(BaseModel):
    product_name: str
    product_price: float
    product_type: str | None = None
    product_img: str | None = None
    product_description: str | None = None
    product_quantity: int = 0
    rating: int = 0


class ProductOut(BaseModel):
    id: int
    product_name: str
    product_price: float
    product_type: str | None = None
    product_img: str | None = None
    product_description: str | None = None
    product_quantity: int
    rating: int

    model_config = {"from_attributes": True}

class ProductUpdate(BaseModel):
    product_name: str | None = None
    product_price: float | None = None
    product_type: str | None = None
    product_img: str | None = None
    product_description: str | None = None
    product_quantity: int | None = None
    rating: int | None = None



@app.post("/products/", response_model=ProductOut)
def create_product(product: ProductCreate, db: Session = Depends(get_db)):
    new_product = Product(**product.dict())

    db.add(new_product)
    db.commit()
    db.refresh(new_product)
    return new_product


@app.get("/products/", response_model=list[ProductOut])
def get_products(db: Session = Depends(get_db)):
    products = db.query(Product).all()
    return products


@app.get("/products/{product_id}", response_model=ProductOut)
def get_product(product_id: int, db: Session = Depends(get_db)):
    product = db.query(Product).filter(Product.id == product_id).first()
    if not product:
        raise "lol"
    return product

from fastapi import HTTPException

@app.put("/products/{product_id}", response_model=ProductOut)
def update_product(product_id: int, product: ProductUpdate, db: Session = Depends(get_db)):
    db_product = db.query(Product).filter(Product.id == product_id).first()

    if not db_product:
        raise HTTPException(status_code=404, detail="Product not found")

    for key, value in product.dict(exclude_unset=True).items():
        setattr(db_product, key, value)

    db.commit()
    db.refresh(db_product)
    return db_product

@app.delete("/products/{product_id}")
def delete_product(product_id: int, db: Session = Depends(get_db)):
    product = db.query(Product).filter(Product.id == product_id).first()
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")

    db.delete(product)
    db.commit()
    return {"message": "Product deleted"}


