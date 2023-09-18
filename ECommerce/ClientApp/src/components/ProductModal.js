import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from 'react-bootstrap/Card';
import AddProduct from "./AddProduct";
import axios from "axios";
import EditProductModal from "./EditProductModal";

function ProductModal({ fetchCategories, setCategories, categories, category, show, onHide }) {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showCurrentProduct, setCurrentProduct] = useState(undefined);
  const [showCurrentCategory, setCurrentCategory] = useState(undefined);

  const openAddModal = () => {
    setShowAddModal(true);
  };

  const closeAddModal = () => {
    setShowAddModal(false);
  };

  const productModalOpen = () => {
    onHide();
    openAddModal();
  };
  const openEditModal = (id, categoryId) => {
    setCurrentProduct(id);
    setCurrentCategory(categoryId);
    onHide();
    setShowEditModal(true);
    
  }
  
  const closeEditModal = () => {
    setShowEditModal(false);
  }

  const deleteProduct = async (productId) => {
    try {
      // Assuming axios is properly imported and configured
      await axios.delete(`https://localhost:7045/Products/${productId}`);
      fetchCategories();
      onHide();

    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };
  

  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>{category.name} Products</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {category.description}
          {category.products && category.products.length > 0 ? (
            category.products.map((product) => (
              <Card key={product.id} style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>
                    {product.price}
                  </Card.Text>
                  <Button onClick={() => deleteProduct(product.id)} variant="danger">Delete</Button>
                  <Button onClick={() => openEditModal(product.id, category.id)} variant="danger">Edit</Button>
                </Card.Body>
              </Card>
            ))
          ) : (
            <p>No products available.</p>
          )}
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={productModalOpen}>Add Product</Button>
        </Modal.Footer>
      </Modal>
      <AddProduct
      fetchCategories={fetchCategories}
        setCategories={setCategories}
        show={showAddModal}
        onHide={closeAddModal}
        categories={categories}
      />
      <EditProductModal
        fetchCategories={fetchCategories}
        setCategories={setCategories}
        show={showEditModal} 
        onHide={closeEditModal}
        categories={categories}
        category={category}
        product={showCurrentProduct}
        categoryID={showCurrentCategory}
      />
    </>
  );
}

export default ProductModal;
