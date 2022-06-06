import {
    PART1_CREATE_REQUEST,PART1_CREATE_SUCCESS,PART1_CREATE_FAIL, 
    PART2_CREATE_REQUEST,PART2_CREATE_SUCCESS,PART2_CREATE_FAIL,
    PART3_CREATE_REQUEST,PART3_CREATE_SUCCESS,PART3_CREATE_FAIL,
    PART4_CREATE_REQUEST,PART4_CREATE_SUCCESS,PART4_CREATE_FAIL,   
    PART5_CREATE_REQUEST,PART5_CREATE_SUCCESS,PART5_CREATE_FAIL, 
    PART1_GET_REQUEST,PART1_GET_SUCCESS,PART1_GET_FAIL,  
    PART2_GET_REQUEST,PART2_GET_SUCCESS,PART2_GET_FAIL,  
    PART3_GET_REQUEST,PART3_GET_SUCCESS,PART3_GET_FAIL,  
    PART4_GET_REQUEST,PART4_GET_SUCCESS,PART4_GET_FAIL,  

 } from "../constants/partsContants"

 import axios from "axios"

 export const createPart1=(part1)=> async(dispatch,getState)=>{
     try{
         dispatch({
             type:PART1_CREATE_REQUEST
         })
         const {userLogin:{userInfor}}=getState()
         const config={
             headers:{
                 'Content-type':'application/json',
                 Authorization:`Bearer ${userInfor.token}`
             }
         }
         const {data}= await axios.post(`http://127.0.0.1:8000/parts/create_part1/`,
         part1,
         config
         )
         dispatch({
            type:PART1_CREATE_SUCCESS,
            payload:data
        })
 

     }catch(error){
         dispatch({
             type:PART1_CREATE_FAIL,
             payload:error.response && error.response.data.detail
             ? error.response.data.detail
             :error.message
         })
     }
    }
     

 export const createPart2=(part2)=> async(dispatch,getState)=>{
    try{
        dispatch({
            type:PART2_CREATE_REQUEST
        })
        const {userLogin:{userInfor}}=getState()
        const config={
            headers:{
                'Content-type':'application/json',
                Authorization:`Bearer ${userInfor.token}`
            }
        }
        const {data}= await axios.post(`http://127.0.0.1:8000/parts/create_part2/`,
        part2,
        config
        )
        dispatch({
           type:PART2_CREATE_SUCCESS,
           payload:data
       })


    }catch(error){
        dispatch({
            type:PART2_CREATE_FAIL,
            payload:error.response && error.response.data.detail
            ? error.response.data.detail
            :error.message
        })
    }
   }

    export const createPart3=(part3)=> async(dispatch,getState)=>{
        try{
            dispatch({
                type:PART3_CREATE_REQUEST
            })
            const {userLogin:{userInfor}}=getState()
            const config={
                headers:{
                    'Content-type':'application/json',
                    Authorization:`Bearer ${userInfor.token}`
                }
            }
            const {data}= await axios.post(`http://127.0.0.1:8000/parts/create_part3/`,
            part3,
            config
            )
            dispatch({
               type:PART3_CREATE_SUCCESS,
               payload:data
           })
    
   
        }catch(error){
            dispatch({
                type:PART3_CREATE_FAIL,
                payload:error.response && error.response.data.detail
                ? error.response.data.detail
                :error.message
            })
        }
       }
    
       export const createPart4=(part4)=> async(dispatch,getState)=>{
        try{
            dispatch({
                type:PART4_CREATE_REQUEST
            })
            const {userLogin:{userInfor}}=getState()
            const config={
                headers:{
                    'Content-type':'multipart/form-data',
                    Authorization:`Bearer ${userInfor.token}`
                }
            }
            const {data}=await axios.post('http://127.0.0.1:8000/parts/upload/',part4,config)          
            dispatch({
               type:PART4_CREATE_SUCCESS,
               payload:data
           })
    
   
        }catch(error){
            dispatch({
                type:PART4_CREATE_FAIL,
                payload:error.response && error.response.data.detail
                ? error.response.data.detail
                :error.message
            })
        }
       }

           
       export const getPart1=()=> async(dispatch,getState)=>{
        try{
            dispatch({
                type:PART1_GET_REQUEST
            })
            const {userLogin:{userInfor}}=getState()
            const config={
                headers:{
                    'Content-type':'multipart/form-data',
                    Authorization:`Bearer ${userInfor.token}`
                }
            }
            const {data}=await axios.get("http://127.0.0.1:8000/parts/get_my_part1/",config)        
            dispatch({
               type:PART1_GET_SUCCESS,
               payload:data
           })
    
   
        }catch(error){
            dispatch({
                type:PART1_GET_FAIL,
                payload:error.response && error.response.data.detail
                ? error.response.data.detail
                :error.message
            })
        }
       }

       export const getPart2=()=> async(dispatch,getState)=>{
        try{
            dispatch({
                type:PART2_GET_REQUEST
            })
            const {userLogin:{userInfor}}=getState()
            const config={
                headers:{
                    'Content-type':'multipart/form-data',
                    Authorization:`Bearer ${userInfor.token}`
                }
            }
            const {data}=await axios.get("http://127.0.0.1:8000/parts/get_my_part2/",config)        
            dispatch({
               type:PART2_GET_SUCCESS,
               payload:data
           })
    
   
        }catch(error){
            dispatch({
                type:PART2_GET_FAIL,
                payload:error.response && error.response.data.detail
                ? error.response.data.detail
                :error.message
            })
        }
       }

       export const getPart3=()=> async(dispatch,getState)=>{
        try{
            dispatch({
                type:PART3_GET_REQUEST
            })
            const {userLogin:{userInfor}}=getState()
            const config={
                headers:{
                    'Content-type':'multipart/form-data',
                    Authorization:`Bearer ${userInfor.token}`
                }
            }
            const {data}=await axios.get("http://127.0.0.1:8000/parts/get_my_part3/",config)        
            dispatch({
               type:PART3_GET_SUCCESS,
               payload:data
           })
    
   
        }catch(error){
            dispatch({
                type:PART3_GET_FAIL,
                payload:error.response && error.response.data.detail
                ? error.response.data.detail
                :error.message
            })
        }
       }

       export const getPart4=()=> async(dispatch,getState)=>{
        try{
            dispatch({
                type:PART4_GET_REQUEST
            })
            const {userLogin:{userInfor}}=getState()
            const config={
                headers:{
                    'Content-type':'multipart/form-data',
                    Authorization:`Bearer ${userInfor.token}`
                }
            }
            const {data}=await axios.get("http://127.0.0.1:8000/parts/get_my_part4/",config)        
            dispatch({
               type:PART4_GET_SUCCESS,
               payload:data
           })
    
   
        }catch(error){
            dispatch({
                type:PART4_GET_FAIL,
                payload:error.response && error.response.data.detail
                ? error.response.data.detail
                :error.message
            })
        }
       }