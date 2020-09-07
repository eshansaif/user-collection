import React from 'react';
import { Card, Row, Col,Button,Container } from 'react-bootstrap';
import './User.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMarsDouble, faMailBulk, faPhoneAlt, faMoneyBill } from '@fortawesome/free-solid-svg-icons'



const User = (props) => {
    // console.log(props);
    const {full_name,email,gender, phone, salary, image } = props.user;
    return (
        <div className="user">
            
            <Row className="justify-content-md-center single-user">
                <Col xs={12} md={2}>
                    <Card  style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{full_name}</Card.Title>
                        <Card.Text>
                        <FontAwesomeIcon icon={faMarsDouble} /> {gender} <br/>
                        <FontAwesomeIcon icon={faMailBulk} /> {email} <br/>
                        <FontAwesomeIcon icon={faPhoneAlt} /> {phone} <br/>
                        <FontAwesomeIcon icon={faMoneyBill} /> ${salary}

                        </Card.Text>
                        <Button id="add-friend-btn" onClick={() => props.addFriendsHandler(props.user)} variant="primary"><FontAwesomeIcon icon={faPlus} /> Add friend</Button>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default User;