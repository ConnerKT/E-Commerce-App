import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function CategoryModal({ category, show, onHide, setCategories, categories }) {
    const [formResults, setFormResults] = useState([]);

    const updatedCategory = {
      ...category,
      name: "New Name",
      description: "New Description"
    };

  
    
    const editButton = async (category) => {
      try {
          const response = await axios.put(`https://localhost:7045/Categories/${category.id}, `);
          var newCategories = categories.map(c => c.id === category.id? response.data : c);
          setCategories(newCategories);
          onHide();
      } catch (error) {
          console.error("Error fetching categories:", error);
      }
  };
  const deleteButton = async (category) => {

    try {
      // console.log(category,"delete");
      const response = await axios.delete(`https://localhost:7045/Categories/${category.id}`, updatedCategory);
      var newCategories = categories.filter(c => c.id!== category.id);
      setCategories(newCategories);
      onHide();
      return response.data;
  } catch (error) {
      console.error("Error deleting category:", error);
  }
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
          <Button variant="secondary" onClick={() => deleteButton(category)}>
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
