import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function CategoryModal({ category, show, onHide }) {

  return (
    <>

      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>{category.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{category.description}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Delete
          </Button>
          <Button variant="primary" onClick={onHide}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default CategoryModal
