import FormContainer from "../components/FormContainer"
import ApplicationSteps from "../components/ApplicationSteps"
import { Row,Button,Col,Form} from "react-bootstrap";
import {useNavigate} from "react-router-dom"
import {createPart3} from "../actions/partsAction"
import {useDispatch,useSelector} from "react-redux"
import { useEffect, useState } from "react";
import Message from "../components/Message"
import Tost from "../components/Tost"
import { getPart3 } from "../actions/partsAction";
import { PART3_GET_RESET } from "../constants/partsContants"


const Part3=()=>{
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const part3Create=useSelector(state=>state.part3Create)
    const {part3,error,success}=part3Create;

    const Mypart3=useSelector((state)=>state.part3);
    const {part3:mypart3,loading}=Mypart3;

    const  userLogin=useSelector(state=>state.userLogin)
     const {userInfor} =userLogin;

    const [state,setState]=useState({
        "name":"",
        "job":"",
        "address":"",
        "id_number":"",
        "email":"",
        "phone":""
    })
    const handleChange=(e)=>{
        const name=e.target.name;
        const value=e.target.type === "checkbox" ? e.target.checked : e.target.value;

        setState({
            ...state,[name]:value
        })
    }
  
    // console.log(state)
    // console.log(part3)

    useEffect(()=>{
        if(success){
            navigate("/part4") 
        }
        dispatch({type:PART3_GET_RESET})
        dispatch(getPart3(userInfor._id));
    },[success])

    const submitHandler=(e)=>{
        e.preventDefault()
        dispatch(createPart3(state));
    }
    return(
        <>
            <ApplicationSteps step1 step2 step3 step4 step5/>
            <h1>Section 7</h1>

            <span>
                <h4>MDHAMINI(Tazama maelezo ya kujaza nambari 2 na 3)</h4>   
                <p>Natoa uhakikisho kwamba anaeomba paspoti ni mtu ninaemfahamu binafsi na kwamba naamini maelezo alioandika hapa ni ya
                 kweli. Mimi ni mwananchi wa Kenya.</p>            
            </span>

            <span>
                <h4>RECOMMENDER ( refer to notes no.s 2 and 3 )</h4>   
                <p>I certify that the applicant is personally known to me, and that to the best of my knowledge/ belief the facts stated in this
                 form are correct. I am a citizen of Kenya.</p>            
            </span>

          
            <Row>
            {success && <Tost variant={'success'} >Part3 Details Submited successful!</Tost>}
            {error && <Tost variant={'danger'} >{error}</Tost>}

                <Col>
                <Form.Group controlId='name'>
                <Form.Label>
                    <span>Majina Kamili</span>
                    <br/>
                    <span>Full Names</span>
                </Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="eg:Empiror Sharkz Reigns" 
                name="name"
                value={state.name} 
                onChange={handleChange}             
                ></Form.Control>
               </Form.Group> 


              <Form.Group controlId='job'>
                <Form.Label>
                    <span>Kazi</span>
                    <br/>
                    <span>Profession/Occupation</span>
                </Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="eg: Programmer"  
                name="job"
                value={state.job} 
                onChange={handleChange}              
                ></Form.Control>
              </Form.Group> 

              <Form.Group controlId='address'>
                <Form.Label>
                    <span>Anwani ya posta</span>
                    <br/>
                    <span>Address P.O Box</span>
                </Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="eg: 6666-0001"  
                name="address"
                value={state.address} 
                onChange={handleChange}             
                ></Form.Control>
              </Form.Group>
                </Col>

                <Col>
                <Form.Group controlId='id'>
                <Form.Label>
                    <span>Nambari Ya Kitambulisho</span>
                    <br/>
                    <span>Identity Card Numbe</span>
                </Form.Label>
                <Form.Control
                required
                type="number"
                placeholder="eg: 38292827" 
                name="id_number"
                value={state.id_number} 
                onChange={handleChange}              
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId='email'>
                <Form.Label>
                    <span>Barua Pepe</span>  
                    <br/>                 
                    <span>Email</span>
                </Form.Label>
                <Form.Control
                required
                type="email"
                placeholder="eg: sharkz@gmail.com"  
                name="email"
                value={state.email} 
                onChange={handleChange}             
                ></Form.Control>
            </Form.Group>

            <Form.Group controlId='phone'>
                <Form.Label>
                    <span>Nambari ya simu</span>
                    <br/>
                    <span>Tel. No.</span>
                </Form.Label>
                <Form.Control
                required
                type="number"
                placeholder="eg: 0707070707"  
                name="phone"
                value={state.phone} 
                onChange={handleChange }            
                ></Form.Control>
            </Form.Group>
              
               
                </Col>
            </Row>
       
           
            {!mypart3 ?(
            <Button onClick={submitHandler} type="submit" variant='primary' className="my-3" >Submit</Button>
            ) :(
            <Button onClick={()=>navigate("/part4")} type="submit" variant='primary' className="my-3 mx-2" >Continue</Button>
            )}
        </>
    )
    
}
export default Part3