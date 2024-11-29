from services import user
from fastapi import APIRouter,status, HTTPException,Depends,BackgroundTasks
from schema import schema_user
from config import database_config
from sqlalchemy.orm import Session
from fastapi.responses import JSONResponse

userrouter = APIRouter(
    prefix="/auth",
    tags=["Auth"],
    responses={404: {"description": "Not found"}},
)


@userrouter.post('/create-account',status_code = status.HTTP_201_CREATED)
async def creat_user_utility(userdata: schema_user.RegisterUser, db: Session = Depends(database_config.get_db)):
    '''
    Creates a new user account.

        Parameters:
            userdata (UserCreate): an instance of RegisterUser schema for user signup.
            backgound_task (BackgroundTasks): fastapi background utility.
            db (Session): database session utility with seperate database connection as dependency.
        return:
            json response 
    '''
    user_in_db = await user._get_user_by_email(db, userdata.email)
    if user_in_db:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Email already registered")
    await user.create_user(db=db, user=userdata)
    return JSONResponse({"message": "Your account has created succesfully."})


@userrouter.post('/login', status_code = status.HTTP_200_OK)
async def login_user(login_data: schema_user.LoginUser, session:Session = Depends(database_config.get_db)):
    '''
    logining after user verification.

        Parameters:
            login_data (LoginUser): an instance of LoginUser schema for login.
            session (Session): database session utility with seperate database connection as dependency.
        return:
            json response.
    '''
    try:
        login_response = await user._get_login_user(session, login_data)
        
        return JSONResponse({"message": "Login succesfully."})
    except HTTPException as e:
        raise e

