import {getMyPart5} from "../actions/partsAction"
import {useNavigate, useParams} from "react-router-dom"
import { Form,Button,Col,Row,Table, ListGroup,Card, Container } from 'react-bootstrap';
import {useDispatch,useSelector} from "react-redux"
import { useEffect, useState } from "react";
import { LinkContainer } from 'react-router-bootstrap';
import Loader from '../components/Loader';
import Payment from "./Payment";

const Part5Details=()=>{
    const dispatch=useDispatch();
    const navigate=useNavigate()
    const params=useParams();   
    const [show,setShow]=useState(false);
    const [state,setState]=useState({
      "type":"",
      "number_pages":"",
      "amount":"",
  })

    const  userLogin=useSelector(state=>state.userLogin)
    const {userInfor} =userLogin;

    const Mypart5=useSelector(state=>state.mypart5)
    const {mypart5,error:part5_error,success:part5_success,loading:part5_loading}=Mypart5;

    console.log(mypart5)

    useEffect(()=>{
        dispatch(getMyPart5(params.user));
    },[params.user])

    const deliverHandler=()=>{ }
    const payHandler=()=>{
      setShow(true)
      setState({
        "amount":mypart5.amount,
      })
    }
return(
    <Container>
           <div className={show ? "inactive" : ""}>
             <Row >
               <h2> PassPort Application Details</h2>
               {part5_loading ? (
                   <Loader/>
               ):  (
                <>
                <Col>
                <ListGroup>
                    <ListGroup.Item>
                      Applicant:  {mypart5.user}
                    </ListGroup.Item>
                    <ListGroup.Item>
                       Type: {mypart5.Type}
                    </ListGroup.Item>
                    <ListGroup.Item>
                       Number of Pages: {mypart5.number_pages && mypart5.number_pages}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Status:  {mypart5.status}
                    </ListGroup.Item>
                </ListGroup>
                </Col> 
                <Col>
                <ListGroup>
                    <ListGroup.Item>
                      Applicant:  {mypart5.user}
                    </ListGroup.Item>
                    <ListGroup.Item>
                     Applied At:   {mypart5.createdAt.substring(0,10)}
                    </ListGroup.Item >
                    {!mypart5.isPaid ? (
                    <ListGroup.Item className="d-grid">
                    <Button
                    type="button"
                    className="btn btn-block"
                    onClick={payHandler}
                    >Pay</Button>
                    </ListGroup.Item>
                    ):(
                    <ListGroup.Item>
                        {mypart5.paidAt?.substring(0,10)}
                    </ListGroup.Item>
                    )}
                    {userInfor && userInfor.isAdmin && mypart5.isPaid && !mypart5.isDelivered &&(
                    <ListGroup.Item className="d-grid">
                        <Button
                        type="button"
                        className="btn btn-block"
                        onClick={deliverHandler}
                        >Mark As Delivered</Button>
                    </ListGroup.Item> 
                     )}
                </ListGroup>
                </Col>                 
                </>
               )}

            </Row> 
            </div>
            <Payment show={show} setShow={setShow} state={state}/>
    </Container>
)
}
export default Part5Details;