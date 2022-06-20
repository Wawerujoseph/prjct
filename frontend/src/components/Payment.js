import { Button, Col, ListGroup, Row,Form } from "react-bootstrap";
import FormContainer from "./FormContainer";
import {useNavigate} from "react-router-dom";
import { useDispatch,useSelector} from "react-redux"
import {createPart5} from "../actions/partsAction"
import Message from "../components/Message"
import Tost from "../components/Tost"
import { useEffect, useState } from "react";
import axios from "axios";



const Payment=({setShow,show,state,phone,id})=>{
    const navigate=useNavigate();
    const dispatch=useDispatch();  

    const part5Create=useSelector(state=>state.part5Create)
    const {part5,error,success}=part5Create;

    const handleClick=()=>{
        setShow(false);
        // navigate("/");
    }
    const closeHandler=()=>{
        setShow(false);
    }
    const Lipa=async ()=>{

      const _data={
          phone:phone,
          amount:state?.amount.substring(4)
      }

      const  userLogin=useSelector(state=>state.userLogin)
      const {userInfor} =userLogin
      
       const config={
           headers:{
            'Content-type':'application/json',
            Authorization:`Bearer ${userInfor.token}`
           }
       }
       const {data}=await axios.post(`http://127.0.0.1:8000/parts/lipa/online`,_data,config) 

       if(data=== "success"){
         const {data}= await axios.put(`http://127.0.0.1:8000/parts/${id}/pay/`,config)
         console.log(data)
       }      
    
    }

    Lipa()        
  
  

    return(
        <FormContainer>
            <div className={show ? "payment-container active" : "payment-container"}>
            {success && <Tost variant={'success'} > successful!</Tost>}
            {error && <Tost variant={'danger'} >{error}</Tost>}
            <div className="payment-header">
                   <h2>Make payment to complete your application</h2>
                   <i className='fas fa-chec' style={{color:'red',fontSize:"2.2rem"}} onClick={closeHandler}>x</i>
               </div>
            <Row>
                <Col>
                <ListGroup>
                    <ListGroup.Item>
                        Type: {state?.type}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Number of Pages: {state?.number_pages && state.number_pages}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Amount: {state?.amount}
                    </ListGroup.Item>
                </ListGroup>
                </Col>
                <Col>

             
              
               <div>
                   <p>Check Your phone</p>
                   <p>And Enter PIN </p>
                   <p>to complete the transcation</p>
               </div>
               <Button onClick={handleClick}>Complete</Button>          
                </Col>
            </Row>
            </div>          
        </FormContainer>
    )
}

export default Payment;