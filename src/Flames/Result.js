import { Modal, Button } from "react-bootstrap"
import '../App.css'


const Result = ({ data3, show, onHide, image,quote }) => {

    return (
        <>
            <Modal show={show} onHide={onHide}>
                <Modal.Header className="modaltitle">
                    <Modal.Title className="text-uppercase fw-bold fst-italic fs-2 text-center rounded-3 bg-success text-white w-75" >{data3}</Modal.Title>
                </Modal.Header>
                <img src={image} alt="anime" className="mt-3"/>
                <p className="quote">{quote}</p>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default Result