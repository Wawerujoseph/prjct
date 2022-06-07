import {createStore,combineReducers,applyMiddleware} from "redux"
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension"



import {userLoginReducers,
        userRegisterReducers,
        userDetailsReducers,
        userUpdateProfileReducers,
        userListReducers,
        userDeleteducers,
        userUpdateducers,

        } from "./reducers/userReducer"

import {
    part1CreateReducer,
    part2CreateReducer,
    part3CreateReducer,
    part4CreateReducer,
    part5CreateReducer,
    part1GetReducer,
    part2GetReducer,
    part3GetReducer,
    part4GetReducer,
    part5GetReducer,
    myPart5GetReducer,

    } from "./reducers/partsReducers"



const reducer=combineReducers({

    userLogin:userLoginReducers,
    userRegister:userRegisterReducers,
    userDetails:userDetailsReducers,
    userList:userListReducers,
    userDelete:userDeleteducers,
    userUpdate:userUpdateducers,
    userUpdateProfile:userUpdateProfileReducers,

    part1Create:part1CreateReducer,
    part2Create:part2CreateReducer,
    part3Create:part3CreateReducer,
    part4Create:part4CreateReducer,
    part5Create:part5CreateReducer,
    part1:part1GetReducer,
    part2:part2GetReducer,
    part3:part3GetReducer,
    part4:part4GetReducer,
    part5:part5GetReducer,
    mypart5:myPart5GetReducer,

   
})



const userInforStorange=localStorage.getItem('userInfor') ?
JSON.parse(localStorage.getItem('userInfor')) :null




const initialState={
    userLogin:{userInfor:userInforStorange},    
}
 
const middleware=[thunk]

const store=createStore(reducer,initialState,
    composeWithDevTools(applyMiddleware(...middleware)))


export default store;