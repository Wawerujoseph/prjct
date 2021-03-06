import {
    PART1_CREATE_REQUEST,PART1_CREATE_SUCCESS,PART1_CREATE_FAIL, 
    PART2_CREATE_REQUEST,PART2_CREATE_SUCCESS,PART2_CREATE_FAIL,
    PART3_CREATE_REQUEST,PART3_CREATE_SUCCESS,PART3_CREATE_FAIL,
    PART4_CREATE_REQUEST,PART4_CREATE_SUCCESS,PART4_CREATE_FAIL,
    PART5_CREATE_REQUEST,PART5_CREATE_SUCCESS,PART5_CREATE_FAIL, 
    PART1_GET_REQUEST,PART1_GET_SUCCESS,PART1_GET_FAIL,PART1_GET_RESET,
    PART2_GET_REQUEST,PART2_GET_SUCCESS,PART2_GET_FAIL,PART2_GET_RESET,  
    PART3_GET_REQUEST,PART3_GET_SUCCESS,PART3_GET_FAIL,PART3_GET_RESET, 
    PART4_GET_REQUEST,PART4_GET_SUCCESS,PART4_GET_FAIL,PART4_GET_RESET,    
    PART5_GET_REQUEST,PART5_GET_SUCCESS,PART5_GET_FAIL,PART5_GET_RESET, 
    MY_PART5_GET_REQUEST,MY_PART5_GET_SUCCESS,MY_PART5_GET_FAIL,MY_PART5_GET_RESET,  
    

 } from "../constants/partsContants"

export const part1CreateReducer=(state={},{type,payload})=>{
    switch(type){
        case PART1_CREATE_REQUEST:
            return {loading:true}
        case PART1_CREATE_SUCCESS:
            return {
                loading:false,
                success:true,
                part1:payload
            }     
        case PART1_CREATE_FAIL:
            return {
                loading: false,
                error: payload
            }
        default:
            return state
    }
}
export const part2CreateReducer=(state={},{type,payload})=>{
    switch(type){
        case PART2_CREATE_REQUEST:
            return {loading:true}
        case PART2_CREATE_SUCCESS:
            return {
                loading:false,
                success:true,
                part2:payload
            }
        case PART2_CREATE_FAIL:
            return {
                loading: false,
                error: payload
            }
        default:
            return state
    }
}
export const part3CreateReducer=(state={},{type,payload})=>{
    switch(type){
        case PART3_CREATE_REQUEST:
            return {loading:true}
        case PART3_CREATE_SUCCESS:
            return {
                loading:false,
                success:true,
                part3:payload
            }
        case PART3_CREATE_FAIL:
            return {
                loading: false,
                error: payload
            }
        default:
            return state
    }
}

export const part4CreateReducer=(state={},{type,payload})=>{
    switch(type){
        case PART4_CREATE_REQUEST:
            return {loading:true}
        case PART4_CREATE_SUCCESS:
            return {
                loading:false,
                success:true,
                part4:payload
            }
        case PART4_CREATE_FAIL:
            return {
                loading: false,
                error: payload
            }
        default:
            return state
    }
}
export const part5CreateReducer=(state={},{type,payload})=>{
    switch(type){
        case PART5_CREATE_REQUEST:
            return {loading:true}
        case PART5_CREATE_SUCCESS:
            return {
                loading:false,
                success:true,
                part5:payload
            }
        case PART5_CREATE_FAIL:
            return {
                loading: false,
                error: payload
            }
        default:
            return state
    }
}

export const part1GetReducer=(state={},{type,payload})=>{
    switch(type){
        case PART1_GET_REQUEST:
            return {loading:true}
        case PART1_GET_SUCCESS:
            return {
                loading:false,
                success:true,
                part1:payload
            }
        case PART1_GET_RESET:
            return{}
        case PART1_GET_FAIL:
            return {
                loading: false,
                error: payload
            }
        default:
            return state
    }
}
export const part2GetReducer=(state={},{type,payload})=>{
    switch(type){
        case PART2_GET_REQUEST:
            return {loading:true}
        case PART2_GET_SUCCESS:
            return {
                loading:false,
                success:true,
                part2:payload
            }
        case PART2_GET_RESET:
            return{}
        case PART2_GET_FAIL:
            return {
                loading: false,
                error: payload
            }
        default:
            return state
    }
}
export const part3GetReducer=(state={},{type,payload})=>{
    switch(type){
        case PART3_GET_REQUEST:
            return {loading:true}
        case PART3_GET_SUCCESS:
            return {
                loading:false,
                success:true,
                part3:payload
            }
        case PART3_GET_RESET:
            return{}
        case PART3_GET_FAIL:
            return {
                loading: false,
                error: payload
            }
        default:
            return state
    }
}
export const part4GetReducer=(state={},{type,payload})=>{
    switch(type){
        case PART4_GET_REQUEST:
            return {loading:true}
        case PART4_GET_SUCCESS:
            return {
                loading:false,
                success:true,
                part4:payload
            }
        case PART4_GET_RESET:
            return{}
        case PART4_GET_FAIL:
            return {
                loading: false,
                error: payload
            }
        default:
            return state
    }
}
export const part5GetReducer=(state={},{type,payload})=>{
    switch(type){
        case PART5_GET_REQUEST:
            return {loading:true}
        case PART5_GET_SUCCESS:
            return {
                loading:false,
                success:true,
                part5:payload
            }
        case PART5_GET_RESET:
            return{}
        case PART5_GET_FAIL:
            return {
                loading: false,
                error: payload
            }
        default:
            return state
    }
}

export const myPart5GetReducer=(state={},{type,payload})=>{
    switch(type){
        case MY_PART5_GET_REQUEST:
            return {loading:true}
        case MY_PART5_GET_SUCCESS:
            return {
                loading:false,
                success:true,
                mypart5:payload
            }
        case MY_PART5_GET_RESET:
            return{}
        case MY_PART5_GET_FAIL:
            return {
                loading: false,
                error: payload
            }
        default:
            return state
    }
}