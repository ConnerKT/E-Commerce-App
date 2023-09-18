import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";

function AddProduct({fetchCategories, categories, show, onHide }) {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(null);
  const [productType, setProductType] = useState("");

  
  const submitForm = async () => {
    try {
      const finalCategory = {
        name: productName,
        price: productPrice,
        categoryId: productType,
      };
      const response = await axios.post(
        `https://localhost:7045/Products`,
        finalCategory
      );
      fetchCategories();
      onHide();

      
     

    } catch (error) {
      console.error("Error:", error);
      // Handle the error gracefully (e.g., show an error message to the user)
    }
  };
  return (
    <>

      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Add a Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="productName"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            >
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="TV" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="productPrice"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
            >
              <Form.Label>Price</Form.Label>
              <Form.Control type="number" placeholder="12" />
            </Form.Group>
            <Form.Label>Category</Form.Label>
            <Form.Select
              onChange={(e) => setProductType(e.target.value)}
              aria-label="Default select example"
            >
              <option>Choose a Category</option>
              {categories.map((category) => (
                <option value={category.id}>{category.name}</option>
              ))}
            </Form.Select>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={submitForm}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddProduct;