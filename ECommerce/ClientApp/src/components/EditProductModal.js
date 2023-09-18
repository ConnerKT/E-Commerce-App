import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";

function EditProductModal({
  show,
  onHide,
  category,
  fetchCategories,
  product,
  categoryID,
}) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [id, setId] = useState("");

  

  const handleProductNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };
  const editButton = async (category) => {
    try {
      const updatedProduct = {
        id: product,
        name: name,
        price: price,
        categoryId: categoryID
      };

      const response = await axios.put(
        `https://localhost:7045/Products`,
        updatedProduct
      );
      fetchCategories();

      onHide();
    } catch (error) {
      console.error("Error updating Products:", error);
    }
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Product Edit Form</Modal.Title>
      </Modal.Header>
      <Modal.Body>Please fill in what you want to update! 💬</Modal.Body>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter product name"
              onChange={handleProductNameChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Product Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter product price"
              onChange={handlePriceChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={editButton}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditProductModal;
