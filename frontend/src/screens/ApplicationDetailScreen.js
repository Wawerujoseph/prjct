import {Container,Row,Col} from "react-bootstrap"
import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPart1 } from "../actions/partsAction"
import ApplicationDetailsSteps from "../components/ApplicationDetailsSteps"
import Part1Details from "../components/Part1Details"
import Part2Details from "../components/Part2Details"
import Part3Details from "../components/Part3Details"
import Part4Details from "../components/Part4Details"


const ApplicationDetailScreen=()=>{
    const [step,setStep]=useState("step1");    
   
    return(
        <Container>
          <ApplicationDetailsSteps setStep={setStep} />
          {step === "step1" && (<Part1Details/>)}
          {step === "step2" && (<Part2Details />)}
          {step === "step3" && (<Part3Details />)}
          {step === "step4" && (<Part4Details />)}
        </Container>
    )
}
export default ApplicationDetailScreen;