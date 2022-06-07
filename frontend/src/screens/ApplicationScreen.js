import { Container,Table,Button } from "react-bootstrap"
import {LinkContainer} from "react-router-bootstrap"
import {useDispatch,useSelector} from "react-redux"
import {getPart5} from "../actions/partsAction"
import { useEffect } from "react"
import Message from "../components/Message"
import Loader from "../components/Loader"

const ApplicationSreen=()=>{    
    const dispatch=useDispatch();
    const Mypart5=useSelector((state)=>state.part5);
    const {part5,success,error,loading}=Mypart5;

    useEffect(()=>{
        dispatch(getPart5());
    },[dispatch])

    return(
        <>
        {loading ? (<Loader/>) :
        error ? (<Message variant={'danger'}>{error}</Message>):
        (
            <Table striped bordered hover responsive className='table-sm'>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>USER</th>
                    <th>DATE</th>
                    <th>PAID</th>
                    <th>STATUS</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    {part5?.map(part=>(
                            <tr key={part.id}>
                            <td>{part.id}</td>
                            <td>{part.user.name}</td>
                            <td>{part.createdAt.substring(0,10)}</td>
                            <td>
                            <i className='fas fa-check' style={{color:'red'}}></i>
                            </td>
                            <td>
                                {part.status}
                            </td>
                            <td>
                            <LinkContainer to={`/applications/${part.user._id}`}>
                                <Button variant='dark' className='btn-sm'>
                                    Details
                                </Button>
                            </LinkContainer>
                            </td>
                        </tr>
                    ))}   
         
                </tbody>
            </Table>
        )}
       </> 
    )
}
export default ApplicationSreen;