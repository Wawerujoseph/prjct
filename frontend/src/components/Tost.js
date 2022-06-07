import {Toast,ToastContainer} from "react-bootstrap"
import { useState } from "react";
const Tost=({children,variant})=>{
    const [showA, setShowA] = useState(true);
    const toggleShowA = () => setShowA(!showA);

    return(
        <ToastContainer  position="top-center" className="position-fixed">
        <Toast show={showA} onClose={toggleShowA} bg={variant} >
        <Toast.Header>
            <strong className="me-auto">Epassport</strong>
        </Toast.Header>
        <Toast.Body>{children}</Toast.Body>
        </Toast>
        </ToastContainer>
    )
}
export default Tost;