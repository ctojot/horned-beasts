import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';

class SelectedBeast extends React.Component {
    render(){
        const {image_url, title, description} = this.props.selectedBeast
        const {showModal, handleCloseModal} = this.props
        return (
            <Modal
            show={showModal}
            onHide={handleCloseModal}
            >
                <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Image className='img-fluid' src={image_url} />
                    {description}
                </Modal.Body>
            </Modal>
        )
    }
}

export default SelectedBeast;