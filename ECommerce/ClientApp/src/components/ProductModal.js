import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ProductModal({ category, show, onHide }) {
  
  return (
    <>
      

      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>{category.name} Products</Modal.Title>
        </Modal.Header>
        <Modal.Body>Test Test Test</Modal.Body>
        <Modal.Footer>
          <Button>
            PlaceHolder
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProductModal;
