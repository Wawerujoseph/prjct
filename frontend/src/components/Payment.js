import { Button } from "react-bootstrap";
import FormContainer from "./FormContainer";
import {useNavigate} from "react-router-dom";
import { useDispatch,useSelector} from "react-redux"
import {createPart5} from "../actions/partsAction"
import Message from "../components/Message"
import Tost from "../components/Tost"



const Payment=({price,show,setShow,state})=>{
    const navigate=useNavigate();
    const dispatch=useDispatch()
    const part5Create=useSelector(state=>state.part5Create)
    const {part5,error,success}=part5Create;

    const handleClick=()=>{
        dispatch(createPart5(state));
        setShow(false);
        navigate("/");
    }
    const closeHandler=()=>{
        setShow(false);
    }
    return(
        <FormContainer>
            <div className={show ? "payment-container active" : "payment-container"}>
            {success && <Tost variant={'success'} >Application completed successful!</Tost>}
            {error && <Tost variant={'danger'} >{error}</Tost>}
               <div className="payment-header">
                   <h2>Make payment to complete your application</h2>
                   <i onClick={closeHandler}>x</i>
               </div>
               <div>
                   <p>Pay {price}</p>
                   <p>Pay Pill 55555</p>
                   <p>A/c name Your email</p>
               </div>
               <Button onClick={handleClick}>Complete</Button>
            </div>
        </FormContainer>
    )
}

export default Payment;