import React from 'react'
import {Nav} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';

const ApplicationDetailsSteps = ({setStep}) => {
    return (
        <Nav className="justify-content-center mb-4">
           <Nav.Item>             
              <Nav.Link onClick={()=>setStep("step1")}>Part 1 Details</Nav.Link>                  
           </Nav.Item> 

           <Nav.Item>             
              <Nav.Link onClick={()=>setStep("step2")} >Part 2 Details</Nav.Link>                  
           </Nav.Item> 

           <Nav.Item>             
              <Nav.Link onClick={()=>setStep("step3")}>Part 3 Details</Nav.Link>                  
           </Nav.Item> 

           <Nav.Item>             
              <Nav.Link onClick={()=>setStep("step4")}>Part 4 Details</Nav.Link>                  
           </Nav.Item> 

           <Nav.Item>             
              <Nav.Link onClick={()=>setStep("step5")}>Part 5 Details</Nav.Link>                  
           </Nav.Item> 


        </Nav>
    )
}

export default ApplicationDetailsSteps;