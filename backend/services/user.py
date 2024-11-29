from models import user_model
from config.database_config import engine, SessionLocal
from sqlalchemy.orm import Session
from fastapi import HTTPException,status
from config import security
user_model.Base.metadata.create_all(bind=engine)

async def _get_user_by_email(db, email):
    return db.query(user_model.User).filter(user_model.User.email == email).first()


async def create_user(db, user):
    fake_password = security.get_password_hash(user.password)
    db_user = user_model.User(first_name = user.first_name,last_name = user.last_name,email = user.email,password=fake_password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return 

async def _get_login_user(db, userdata):
    fake_password = security.get_password_hash(userdata.password)
    user_db = await _get_user_by_email(db, userdata.email) 
    if not user_db:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Dont have an account please signup.")
    if not security.verify_password(userdata.password, user_db.password): 
        raise  HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid password")
    return