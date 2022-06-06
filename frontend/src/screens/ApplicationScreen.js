import { Container,Table,Button } from "react-bootstrap"
import {LinkContainer} from "react-router-bootstrap"


const ApplicationSreen=()=>{
    return(
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
                 <tr>
                    <td>1</td>
                    <td>sharkz</td>
                    <td>30/1/2020</td>
                    <td>
                    <i className='fas fa-check' style={{color:'red'}}></i>
                    </td>
                    <td>
                        processing
                    </td>
                    <td>
                    <LinkContainer to={`/applications/1`}>
                        <Button variant='dark' className='btn-sm'>
                            Details
                        </Button>
                    </LinkContainer>
                    </td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>sharkz</td>
                    <td>30/1/2020</td>
                    <td>
                    <i className='fas fa-check' style={{color:'red'}}></i>
                    </td>
                    <td>
                        processing
                    </td>
                    <td>
                    <LinkContainer to={`/applications/1`}>
                        <Button variant='dark' className='btn-sm'>
                            Details
                        </Button>
                    </LinkContainer>
                    </td>
                </tr>
                </tbody>
            </Table>
    )
}
export default ApplicationSreen;