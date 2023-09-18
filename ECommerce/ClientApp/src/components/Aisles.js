import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Button } from 'react-bootstrap';
import CategoryModal from './CategoryModal';
import ProductModal from './ProductModal';
import AddModal from './AddModal';

function Aisles() {
    
    // A state for keeping track of all categories
    const [categories, setCategories] = useState([]);
    //Our state for keeping track of current category
    const [selectedCategory, setSelectedCategory] = useState([]);
    //Edit modal States
    const [showModal, setShowModal] = useState(false);
    //Product Modal States
    const [showProductModal, setShowProductModal] = useState(false);
    // Add Modal States
    const [showAddModal, setShowAddModal] = useState(false);
    


    const fetchCategories = async () => {
        try {
            const response = await axios.get("https://localhost:7045/Categories");
            console.log(response.data, "Howdy");
            setCategories(response.data);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    const openModal = (category) => {
        // console.log("please",category)
        setSelectedCategory(category);
        setShowModal(true);
       
      };
      const closeModal = () => {
        setSelectedCategory([]);
        setShowModal(false);
      };
    const productModal = (category) => {
        setSelectedCategory(category);
        setShowProductModal(true);

    }
    const closeProductModal = () => {
        setSelectedCategory([]);
        setShowProductModal(false);
      };
      const openAddModal = () => {
        setShowAddModal(true);
      };
      const closeAddModal = () => {
        setShowAddModal(false);
      };

    return (
        <>
            <Container>
                <Row className="aisle-row">
                    
                </Row>
                {categories.map(category => (
                    
                    <Row key={category.id} className="aisle-row">
                        <Col xs={6}>
                            <Button onClick={() => productModal(category)} variant="primary">{category.name}</Button>
                            {console.log(category)}
                            <Button onClick={() => openModal(category)} style = {{ margin: '10px' }}  variant="danger">Manage</Button>
                            <h1>➖➖➖➖➖➖➖➖➖➖➖➖</h1>
                        </Col>
                    </Row>
                ))}
            </Container>
            
            <CategoryModal
                categories = {categories}
                setCategories = {setCategories}
                category = {selectedCategory}
                show={showModal}
                onHide={closeModal}
                fetchCategories = {fetchCategories}

            />
            <ProductModal
                fetchCategories={fetchCategories}
                setCategories = {setCategories}
                categories = {categories}
                category = {selectedCategory}
                show = {showProductModal}
                onHide= {closeProductModal}
            />
            <AddModal
                fetchCategories={fetchCategories}
                setCategories = {setCategories}
                categories = {categories}
                category = {selectedCategory}
                show = {showAddModal}
                onHide = {closeAddModal}
            />

            
            <Button onClick={() => openAddModal()}>Add a new Category</Button>

            
        </>
       
    );
}

export default Aisles;
