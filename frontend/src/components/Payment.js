import { Button, Col, ListGroup, Row } from "react-bootstrap";
import FormContainer from "./FormContainer";
import {useNavigate} from "react-router-dom";
import { useDispatch,useSelector} from "react-redux"
import {createPart5} from "../actions/partsAction"
import Message from "../components/Message"
import Tost from "../components/Tost"
import { useState } from "react";



const Payment=({setShow,show,state})=>{
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
                   <p>Pay {state?.amount}</p>
                   <p>Pay Pill 55555</p>
                   <p>A/c name Your email</p>
               </div>
               <Button onClick={handleClick}>Complete</Button>          
                </Col>
            </Row>
            </div>          
        </FormContainer>
    )
}

export default Payment;