import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function CategoryModal({ category, show, onHide }) {
    const [formResults, setFormResults] = useState([]);


  function editButton(){


  }
  function deleteButton(){


  }
  return (
    <>

      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Category Edit Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>Please fill in what you want to update! 💬</Modal.Body>
        <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Category</Form.Label>
            <Form.Control type="email" placeholder={category.name} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder={category.description} />
          </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={deleteButton}>
            Delete
          </Button>
          <Button variant="primary" onClick={editButton}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default CategoryModal
