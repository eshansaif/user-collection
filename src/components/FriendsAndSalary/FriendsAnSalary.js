import React from 'react';
import { Container,Button,Badge,Alert,Navbar } from 'react-bootstrap';
import './FriendsAndSalary.css';

const FriendsAnSalary = (props) => {

    const totalSalary = props.salaryNFriends.reduce( (total, user) => total + user.salary ,0)
    return (
        <div>
            <Container fluid>
                <Alert variant="success" className="justify-content-md-center text-center fixed-top custom-alert">
                    <Alert.Heading>Hey, here is your total Friends and Salary count!</Alert.Heading>
                        <hr />  
                    <p className="mb-0">
                        <Button variant="primary" className="badge-gap">
                        Total Friends <Badge variant="light">{props.salaryNFriends.length}</Badge>
                        <span className="sr-only">unread messages</span>
                        </Button>
                    
                        <Button variant="warning" className="badge-gap">
                        Total Salary <Badge variant="light">{totalSalary}</Badge>
                        <span className="sr-only">unread messages</span>
                        </Button>
                    </p>
                </Alert>
                
            </Container>
        </div>
    );
};

export default FriendsAnSalary;