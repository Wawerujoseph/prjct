import { useState } from "react"
import {Container,Table,Button} from "react-bootstrap"
import {LinkContainer} from "react-router-bootstrap"
import Payment from "../components/Payment";

const Part5=()=>{
    const [price,setPrice]=useState('');
    const [show,setShow]=useState(false);

    const [state,setState]=useState({
        "type":"",
        "number_pages":"",
        "amount":"",
    });
    
    const handleClick=(num)=>{

        setState({
            "type":"",
            "number_pages":"",
            "amount":"",
        });
        setShow(true);

        if(num === 1.0){

        setState({
                "type":"Ordinary Passports",
                "number_pages":"A Series (34 pages)",
                "amount":"Ksh. 4,550.00",
            });
           setPrice("Ksh. 4,550.00")
            
        }else if(num === 1.1){
            setState({
                "type":"Ordinary Passports",
                "number_pages":"B Series (30 pages)",
                "amount":"Ksh. 6,050.00",
            });
            setPrice("Ksh. 6,050.00")


        }else if(num ===1.2){
            setState({
                "type":"Ordinary Passports",
                "number_pages":"C Series (66 pages)",
                "amount":"Ksh. 4,550.00",
            });
            setPrice("Ksh. 4,550.00")

        }else if(num ===2){
            setState({
                "type":"Diplomatic passports",
                "number_pages":"",
                "amount":"Ksh. 7,550.00",
            });
            setPrice("Ksh. 7,550.00")

        }else if(num ===3){
            setState({
                "type":"Mutilated passport",
                "number_pages":"",
                "amount":"Ksh. 7,550.00",
            });
            setPrice("Ksh. 7,550.00")

        }else if(num ===4){
            setState({
                "type":"Lost passports",
                "number_pages":"",
                "amount":"Ksh. 12,050.00",
            });
            setPrice("Ksh. 12,050.00")

        }else if(num ===5){
            setState({
                "type":"Certificate of Identity (for Foreigners",
                "number_pages":"",
                "amount":"Ksh. 3,050.00",
            });
            setPrice("Ksh. 3,050.00")

        }else if(num ===6){
            setState({
                "type":"Temporary permit",
                "number_pages":"",
                "amount":"Ksh. 350",
            });
            setPrice("Ksh. 350")

        }else{
            console.log("Invalid option")
        }
    }

    return(
        <Container>
                   <Table striped bordered hover responsive className={show ? 'table-sm inactive':'table-sm'}>
                <thead>
                    <tr>
                    <th></th>
                    <th>Type of Passport/Application</th>
                    <th>Number of Pages</th>
                    <th>Amount</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                 <tr>
                    <td>1</td>
                    <td>Ordinary Passports</td>
                    <td>A Series (34 pages)</td>
                    <td>Ksh. 4,550.00</td>                
                    <td>
                        <Button variant='dark' className='btn-sm'
                        onClick={(e)=>handleClick(1.0)}>
                            Apply
                        </Button>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>B Series (50 pages)</td>              
                    <td>
                        Ksh. 6,050.00
                    </td>
                    <td>
                        <Button variant='dark' className='btn-sm'
                         onClick={(e)=>handleClick(1.1)}>
                            Apply
                        </Button>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>C Series (66 pages)</td>              
                    <td>
                        Ksh. 7,550.00
                    </td>
                    <td>
                        <Button variant='dark' className='btn-sm'
                         onClick={(e)=>handleClick(1.2)}>
                            Apply
                        </Button>
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Diplomatic passports</td>
                    <td></td>
                    <td>Ksh. 7,550.00</td>                
                    <td>
                        <Button variant='dark' className='btn-sm'
                        onClick={(e)=>handleClick(2.0)}>
                            Apply
                        </Button>
                    </td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Mutilated passport</td>
                    <td></td>
                    <td>Ksh. 7,550.00</td>                
                    <td>
                        <Button variant='dark' className='btn-sm'
                         onClick={(e)=>handleClick(3.0)}>
                            Apply
                        </Button>
                    </td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Lost passports</td>
                    <td></td>
                    <td>Ksh. 12,050.00</td>                
                    <td>
                        <Button variant='dark' className='btn-sm'
                         onClick={(e)=>handleClick(4.0)}>
                            Apply
                        </Button>
                    </td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Certificate of Identity (for Foreigners)</td>
                    <td></td>
                    <td>Ksh. 3,050.00</td>                
                    <td>
                        <Button variant='dark' className='btn-sm'
                         onClick={(e)=>handleClick(5.0)}>
                            Apply
                        </Button>
                    </td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Temporary permit</td>
                    <td></td>
                    <td>Ksh. 350</td>                
                    <td>
                        <Button variant='dark' className='btn-sm'
                         onClick={(e)=>handleClick(6.0)}>
                            Apply
                        </Button>
                    </td>
                </tr>

                </tbody>
            </Table>
            <Payment price={price} show={show} setShow={setShow} state={state}/>
        </Container>
    )
}
export default Part5;