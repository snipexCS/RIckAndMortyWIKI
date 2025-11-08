from sqlalchemy import create_engine, Column, Integer, String, Float, CheckConstraint
from sqlalchemy.orm import declarative_base, sessionmaker, Session
from fastapi import FastAPI, Depends
from pydantic import BaseModel

app = FastAPI()

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


# For creating a product (input)
class ProductCreate(BaseModel):
    product_name: str
    product_price: float
    product_type: str | None = None
    product_img: str | None = None
    product_description: str | None = None
    product_quantity: int = 0
    rating: int = 0


# For responding (output)
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


@app.post("/products/", response_model=ProductOut)
def create_product(product: ProductCreate, db: Session = Depends(get_db)):
    new_product = Product(**product.dict())

    db.add(new_product)
    db.commit()
    db.refresh(new_product)
    return new_product
