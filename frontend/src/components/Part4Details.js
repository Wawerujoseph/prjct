import FormContainer from "./FormContainer"
import { Button,Card,CardGroup,Row,Col, Image} from "react-bootstrap";
import {useNavigate} from "react-router-dom"
import ImageUploader from "react-images-upload";
import ImageUploading from 'react-images-uploading';
import React, { useEffect, useState } from 'react';
import Message from "./Message"
import {getPart4} from "../actions/partsAction"
import {useSelector,useDispatch} from "react-redux"


const Part4Details=()=>{
    const l=["ID Card Front","ID Card Back","passport size photo","Birth Certificate","Marriage Certificate"]
    const navigate=useNavigate()
    const [images, setImages] = useState({
      "u_id_front":"",
      "u_id_back":"",
      "u_photo":"",
      "u_b_certificate":"",
      "u_m_certificate":"",
      "p_id_front":"",
      "p_id_back":"",
      "p_photo":"",
      "p_b_certificate":"",
      "r_id_front":"",
      "r_id_back":"",
      "r_photo":""   
        });
    const dispatch=useDispatch()
    const Mypart4=useSelector(state=>state.part4)
    const {part4,error,success}=Mypart4;

      const url="http://127.0.0.1:8000";
      useEffect(()=>{
        dispatch(getPart4())
        if(success){
          setImages({
            "u_id_front":url+part4.u_id_front,
            "u_id_back":url+part4.u_id_back,
            "u_photo":url+part4.u_photo,
            "u_b_certificate":url+part4.u_b_certificate,
            "u_m_certificate":url+part4.u_m_certificate,
            "p_id_front":url+part4.p_id_front,
            "p_id_back":url+part4.p_id_back,
            "p_photo":url+part4.p_photo,
            "p_b_certificate":url+part4.p_b_certificate,
            "r_id_front":url+part4.r_id_front,
            "r_id_back":url+part4.r_id_back,
            "r_photo":url+part4.r_photo,
              });          
        }
      },[dispatch])

    return(
        <>
            <h1>Uploaded Files</h1>
            <Row>
            <Col>              
                <ul>
                Uploaded Picture of Your:
                <li>
                  <p>ID Card Front</p>
                  <Image src={images.u_id_front} alt="p_photo" width={'200px'} height={'200px'} />
                  </li>
                <li>
                  <p>ID Card Back</p>
                <Image src={images.u_id_back} alt="p_photo" width={'200px'} height={'200px'} />
                </li>
                <li>
                  <p>passport size photo</p>
                  <Image src={images.u_photo} alt="p_photo" width={'200px'} height={'200px'} />
                </li>
                <li>
                  <p>Birth Certificate</p>
                  <Image src={images.u_b_certificate} alt="p_photo" width={'200px'} height={'200px'} />
                </li>
                <li>
                  <p>Marriage Certificate</p>
                  <Image src={images.u_m_certificate} alt="p_photo" width={'200px'} height={'200px'} />
                </li>
                </ul>
            </Col> 
            <Col>
                <ul>
                Uploaded Picture of Father/Mother:
                <li>
                  <p>ID Card Front</p>
                  <Image src={images.p_id_front} alt="p_photo" width={'200px'} height={'200px'} />
                  </li>
                <li>
                  <p>ID Card Back</p>
                <Image src={images.p_id_back} alt="p_photo" width={'200px'} height={'200px'} />
                </li>
                <li>
                  <p>passport size photo</p>
                  <Image src={images.p_photo} alt="p_photo" width={'200px'} height={'200px'} />
                </li>
                <li>
                  <p>Birth Certificate</p>
                  <Image src={images.p_b_certificate} alt="p_photo" width={'200px'} height={'200px'} />
                </li>
                </ul>                
            </Col>  
            <Col>
                <ul>
                Uploaded Picture of Recommender:
                <li>
                  <p>ID Card Front</p>
                  <Image src={images.r_id_front} alt="p_photo" width={'200px'} height={'200px'} />
                  </li>
                <li>
                  <p>ID Card Back</p>
                <Image src={images.r_id_back} alt="p_photo" width={'200px'} height={'200px'} />
                </li>
                <li>
                  <p>passport size photo</p>
                  <Image src={images.r_photo} alt="p_photo" width={'200px'} height={'200px'} />
                </li>
                </ul>                
            </Col>                         
                    
            {/* {success && <Message variant='success'>Images uploaded successful!</Message>}
           {error && <Message variant='danger'>{error}</Message>} */}
              </Row>     
            

                
            {/* <Button onClick={submitHandler} type="submit" variant='primary' className="my-3" >Continue</Button> */}
        </>
    )
    
}
export default Part4Details;