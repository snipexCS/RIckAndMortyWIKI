from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from main import Product, DATABASE_URL  



engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})
SessionLocal = sessionmaker(bind=engine)
db = SessionLocal()



products = [
    {
        "product_name": "Rick Sanchez Action Figure",
        "product_price": 29.99,
        "product_type": "Figure",
        "product_img": "https://m.media-amazon.com/images/I/51ArlfRp9vL._AC_SY300_SX300_QL70_FMwebp_.jpg",
        "product_description": "Rick with his portal gun, ready to ruin timelines.",
        "product_quantity": 15,
        "rating": 5,
    },
    {
        "product_name": "Morty Smith Action Figure",
        "product_price": 24.99,
        "product_type": "Figure",
        "product_img": "https://m.media-amazon.com/images/I/71mQBrFDxXL._AC_SX679_.jpg",
        "product_description": "Morty looking confused as always.",
        "product_quantity": 14,
        "rating": 4,
    },
    {
        "product_name": "Pickle Rick Plush",
        "product_price": 19.99,
        "product_type": "Plush",
        "product_img": "https://m.media-amazon.com/images/I/81xg3N6zSaL._AC_SX679_.jpg",
        "product_description": "A pickle. He's also Rick.",
        "product_quantity": 20,
        "rating": 5,
    },
    {
        "product_name": "Mr. Meeseeks Plush",
        "product_price": 17.99,
        "product_type": "Plush",
        "product_img": "https://m.media-amazon.com/images/I/71GnsT0KdtL._AC_SX679_.jpg",
        "product_description": "Existence is pain unless you buy this.",
        "product_quantity": 30,
        "rating": 4,
    },
    {
        "product_name": "Rick and Morty Portal Gun Replica",
        "product_price": 49.99,
        "product_type": "Prop",
        "product_img": "https://m.media-amazon.com/images/I/61gevHr2qNL._AC_SX679_.jpg",
        "product_description": "Lights up. Makes portal sounds. Does NOT open portals.",
        "product_quantity": 10,
        "rating": 5,
    },
    {
        "product_name": "Rick and Morty Hoodie",
        "product_price": 39.99,
        "product_type": "Clothing",
        "product_img": "https://m.media-amazon.com/images/I/81z7Y+JvNOL._AC_SX679_.jpg",
        "product_description": "Black hoodie with iconic portal design.",
        "product_quantity": 25,
        "rating": 4,
    },
    {
        "product_name": "Rick and Morty T-Shirt",
        "product_price": 22.99,
        "product_type": "Clothing",
        "product_img": "https://m.media-amazon.com/images/I/81Q2JrN1UOL._AC_SX679_.jpg",
        "product_description": "Casual tee with classic cartoon chaos.",
        "product_quantity": 40,
        "rating": 4,
    },
    {
        "product_name": "Rick and Morty Poster",
        "product_price": 9.99,
        "product_type": "Poster",
        "product_img": "https://m.media-amazon.com/images/I/71v8P5T9e8L._AC_SX679_.jpg",
        "product_description": "Colorful poster of the dynamic duo.",
        "product_quantity": 50,
        "rating": 5,
    },
    {
        "product_name": "Mr. Poopybutthole Mug",
        "product_price": 14.99,
        "product_type": "Mug",
        "product_img": "https://m.media-amazon.com/images/I/71oYwYG+DSL._AC_SX679_.jpg",
        "product_description": "A cheerful mug for your un-cheerful mornings.",
        "product_quantity": 18,
        "rating": 4,
    },
    {
        "product_name": "Rick Sanchez Keychain",
        "product_price": 7.99,
        "product_type": "Accessory",
        "product_img": "https://m.media-amazon.com/images/I/71V7eMTFjDL._AC_SX679_.jpg",
        "product_description": "Mini Rick for your keys.",
        "product_quantity": 60,
        "rating": 4,
    },
    {
        "product_name": "Morty Keychain",
        "product_price": 7.99,
        "product_type": "Accessory",
        "product_img": "https://m.media-amazon.com/images/I/71lAEGZp9uL._AC_SX679_.jpg",
        "product_description": "Morty hanging from your keys, scared as usual.",
        "product_quantity": 55,
        "rating": 4,
    },
    {
        "product_name": "Schwifty Sticker Pack",
        "product_price": 5.99,
        "product_type": "Stickers",
        "product_img": "https://m.media-amazon.com/images/I/81nL2oVHnML._AC_SX679_.jpg",
        "product_description": "Get Schwifty with these stickers.",
        "product_quantity": 120,
        "rating": 5,
    },
    {
        "product_name": "Rick and Morty Backpack",
        "product_price": 44.99,
        "product_type": "Bag",
        "product_img": "https://m.media-amazon.com/images/I/81w1t6SddBL._AC_SX679_.jpg",
        "product_description": "A portal-pattern backpack for your adventures.",
        "product_quantity": 12,
        "rating": 4,
    },
    {
        "product_name": "Evil Morty Poster",
        "product_price": 12.99,
        "product_type": "Poster",
        "product_img": "https://m.media-amazon.com/images/I/81YpU6G2b4L._AC_SX679_.jpg",
        "product_description": "A stylish poster of the most dangerous Morty.",
        "product_quantity": 45,
        "rating": 5,
    },
    {
        "product_name": "Rick and Morty Socks",
        "product_price": 11.99,
        "product_type": "Clothing",
        "product_img": "https://m.media-amazon.com/images/I/71JMjh5W3IL._AC_SX679_.jpg",
        "product_description": "Comfy socks with portal graphics.",
        "product_quantity": 33,
        "rating": 4,
    },
    {
        "product_name": "Rick and Morty Mousepad",
        "product_price": 13.99,
        "product_type": "Desk",
        "product_img": "https://m.media-amazon.com/images/I/81dnJT9p42L._AC_SX679_.jpg",
        "product_description": "Rick and Morty themed mousepad for your setup.",
        "product_quantity": 48,
        "rating": 5,
    },
]

for item in products:
    obj = Product(**item)
    db.add(obj)

db.commit()
db.close()

print(" Database seeded with 16 Rick and Morty items!")
