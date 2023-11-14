import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const CardTest = ({ id, name, version, model, onDelete, onEdit }) => {

    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://picsum.photos/200/100" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {version}
                    </Card.Text>
                    <Card.Text>
                        {model}
                    </Card.Text>
                    <Button variant="danger" onClick={() => onDelete(id)}>
                        Delete
                    </Button>
                    <Button variant="secondary" onClick={() => onEdit(id)}>
                        Edit
                    </Button>
                </Card.Body>
            </Card>
        </>
    );
}

export default CardTest;
