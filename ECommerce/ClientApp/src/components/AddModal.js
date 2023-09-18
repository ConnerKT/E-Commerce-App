import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function AddModal({show, onHide, setCategories, categories }) {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');


    const handleCategoryNameChange = (event) => {
        setName(event.target.value);
      };
    
      const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
      };

    const handleSubmit = async () => {
        const data = {
            name: name,
            description: description
        }
        try {
            const response = await axios.post(`https://localhost:7045/Categories`, data);
            setCategories(prevCategories => [...prevCategories, response.data]);
            console.log('Success:', response);
            
          onHide();
          } catch (error) {
            console.error('Error:', error);
          }
        
    }
  return (
    <>
    <Modal show={show} onHide={onHide}>
    <Modal.Header closeButton>
      <Modal.Title>Category Add Form</Modal.Title>
    </Modal.Header>
    <Modal.Body>Please make your category! 💬</Modal.Body>
    <Modal.Body>
    <Form>
    {name}
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Category</Form.Label>
        <Form.Control type="text" placeholder="Enter a Category Name" onChange={handleCategoryNameChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Enter a Description" onChange={handleDescriptionChange}/>
      </Form.Group>
    </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={() => handleSubmit()} >
        Submit
      </Button>
      
    </Modal.Footer>
  </Modal>
</>
  )
}

export default AddModal
