import FormContainer from "../components/FormContainer"
import ApplicationSteps from "../components/ApplicationSteps"
import { Row,Button,Col,Form} from "react-bootstrap";
import {useNavigate} from "react-router-dom"
import {createPart2} from "../actions/partsAction"
import {useDispatch,useSelector} from "react-redux"
import EContactForm from "../components/EContactForm";
import { useState,useEffect } from "react";
import Message from "../components/Message"
import Tost from "../components/Tost"
import { getPart2 } from "../actions/partsAction";
import { PART2_GET_RESET } from "../constants/partsContants";



const Part2=()=>{
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const part2Create=useSelector(state=>state.part2Create)
    const {part2,error,success}=part2Create;

    const Mypart2=useSelector((state)=>state.part2);
    const {part2:mypart2,loading}=Mypart2;

    const  userLogin=useSelector(state=>state.userLogin)
     const {userInfor} =userLogin;

    const [state1,setState1]=useState({
        "name":"",
        "division":"",
        "location":"",
        "relationship":"",
        "id_number":"",
        "address":"",
        "phone":"",
        "email":""
    })

    const [state2,setState2]=useState({
        "name":"",
        "division":"",
        "location":"",
        "relationship":"",
        "id_number":"",
        "address":"",
        "phone":"",
        "email":""
    })

    const handleChange1=(e)=>{
        const name=e.target.name;
        const value=e.target.type === "checkbox" ? e.target.checked : e.target.value;

        setState1({
            ...state1,[name]:value
        })
    }

    const handleChange2=(e)=>{
        const name=e.target.name;
        const value=e.target.type === "checkbox" ? e.target.checked : e.target.value;

        setState2({
            ...state2,[name]:value
        })
    }

    // console.log(state1)
    // console.log(state2)
    // console.log(part2)

    useEffect(()=>{
        if(success){
            navigate("/part3") 
        }
        dispatch({type:PART2_GET_RESET})
        dispatch(getPart2(userInfor._id));
    },[success])

    const submitHandler=(e)=>{
        e.preventDefault()
        dispatch(createPart2(state1))
        dispatch(createPart2(state2))
    }
    return(
        <>
            <ApplicationSteps step1 step2 step3 step4/>
            <h1>Section 5</h1>

            <h4>
                <span>Watu wa kupashwa habari dharura jambo linapotokea</span>
                <br/>
                <span>Particulars of Next of Kin (Person who may be contacted in case of emergency)</span>
            </h4>
            <Row>
            {success && <Tost variant={'success'} >Part2 Details Submited successful!</Tost>}
            {error && <Tost variant={'danger'} >{error}</Tost>}
                <Col>
                  <EContactForm part={'a)'} handleChange1={handleChange1} state1={state1}/>
                </Col>
                <Col>
                <EContactForm part={'b)'}  handleChange2={handleChange2} state2={state2}/>
                </Col>
            </Row>



         
            {!mypart2 ?(
            <Button onClick={submitHandler} type="submit" variant='primary' className="my-3" >Submit</Button>
            ) :(
            <Button onClick={()=>navigate("/part3")} type="submit" variant='primary' className="my-3 mx-2" >Continue</Button>
            )}

        </>
    )
    
}
export default Part2