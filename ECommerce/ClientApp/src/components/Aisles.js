import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Button } from 'react-bootstrap';
import CategoryModal from './CategoryModal';

function Aisles() {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const fetchCategories = async () => {
        try {
            const response = await axios.get("https://localhost:7045/Categories");
            setCategories(response.data);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    const openModal = (category) => {
        console.log("please",category)
        setSelectedCategory(category);
        setShowModal(true);
        console.log("Selected Catta",selectedCategory);
      };
      const closeModal = () => {
        setSelectedCategory([]);
        setShowModal(false);
      };

    return (
        <>
            <Container>
                <Row className="aisle-row">
                
                </Row>
                {categories.map(category => (
                    <Row key={category.id} className="aisle-row">
                        <Col xs={6}>
                            <Button onClick={() => openModal(category)} variant="primary">{category.name}</Button>
                            {console.log(category)}
                        </Col>
                    </Row>
                ))}
            </Container>
            
            <CategoryModal
                category = {selectedCategory}
                show={showModal}
                onHide={closeModal}

            />
        </>
       
    );
}

export default Aisles;
