import FormContainer from "./FormContainer"
import { Row,Button,Col,Form} from "react-bootstrap";
import {useNavigate, useParams} from "react-router-dom"
import {getPart2} from "../actions/partsAction"
import {useDispatch,useSelector} from "react-redux"
import EContactForm from "./EContactForm";
import { useState,useEffect } from "react";
import Message from "./Message"
import Loader from "./Loader";
import { PART2_GET_RESET } from "../constants/partsContants";


const Part2Details=()=>{
    const params=useParams();
    const navigate=useNavigate()
    const dispatch=useDispatch();
    const Mypart2=useSelector((state)=>state.part2);
    const {part2,success,error,loading}=Mypart2;

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
        if(!part2 || !success){
        dispatch({type:PART2_GET_RESET})
        dispatch(getPart2(params.user))
        }else{
            setState1({
                "name":part2[0].name,
                "division":part2[0].division,
                "location":part2[0].location,
                "relationship":part2[0].relationship,
                "id_number":part2[0].id_number,
                "address":part2[0].address,
                "phone":part2[0].phone,
                "email":part2[0].email,
            })
            setState2({
                "name":part2[1].name,
                "division":part2[1].division,
                "location":part2[1].location,
                "relationship":part2[1].relationship,
                "id_number":part2[1].id_number,
                "address":part2[1].address,
                "phone":part2[1].phone,
                "email":part2[1].email,
            })
        }
    },[params.user])


    return(
        <>
        {loading ? (<Loader/>):(
            <>      
            <h1>Section 5</h1>

            <h4>
                <span>Watu wa kupashwa habari dharura jambo linapotokea</span>
                <br/>
                <span>Particulars of Next of Kin (Person who may be contacted in case of emergency)</span>
            </h4>
            <Row>
            {/* {success && <Message variant='success'>Part3 Details Submited successful!</Message>}
            {error && <Message variant='danger'>{error}</Message>} */}
                <Col>
                  <EContactForm part={'a)'} handleChange1={handleChange1} state1={state1}/>
                </Col>
                <Col>
                <EContactForm part={'b)'}  handleChange2={handleChange2} state2={state2}/>
                </Col>
            </Row>


            </>
            )}
         
            {/* <Button onClick={submitHandler} type="submit" variant='primary' className="my-3" >Continue</Button> */}
        </>
    )
    
}
export default Part2Details;