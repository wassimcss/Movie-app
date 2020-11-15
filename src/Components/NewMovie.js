import React , {useState} from 'react'
import {Modal,Button} from 'react-bootstrap';

export const NewMovie = (props) => {

    const [show, setShow] = useState(false)
    const [rate, setRate] = useState(0)
    const [title, setTitle] = useState("")
    const [src, setSrc] = useState("")

    const handleShow = () => setShow(true) ;
    
    const handleClose = () => setShow(false) ;

    const handleSave = () => {
       setShow(false);
       props.addMovie(title,src,rate) 
    }
    
    
    
    
    return (
        <div className="new">
             <Button  variant="primary" onClick={handleShow}>
                Add Movie
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header >
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input type="text" onChange={e => setTitle(e.target.value)} />
                    <input type="number" onChange={e => setRate((e.target.value)/2)} />
                    <input type="text" onChange={e => setSrc(e.target.value)} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
