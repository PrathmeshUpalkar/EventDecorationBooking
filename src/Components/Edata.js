import React from 'react';
import { Card, CardGroup, Col, Row } from 'react-bootstrap';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Edata = () => {

    const [data, setData] = useState([]);


    const getData = async () => {
        let result = await fetch("http://localhost:5000/data");
        result = await result.json();
        setData(result);

    }
    useEffect(() => {
        getData();
    }, []);

    const deleteData = async (id) => {
        console.log(id)

        let result = await fetch(`http://localhost:5000/delete/${id}`, {
            method: 'delete',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json()
        getData()
    }

    const done = async (id) => {
        let result = await fetch(`http://localhost:5000/done/${id}`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json()
        getData()
        alert('Email sent to Customer')
    }

    return (
        <>
            <div className='container'>
                <Row xs={4} md={4} className=" mt-5 g-4">
                    {
                        data.map((item, index) => (



                            <Col>
                                <Card>
                                    <Card.Header className='text-center'>Enquiry No {index + 1}</Card.Header>

                                    <Card.Body className='px-3'>
                                        {/* <Card.Title>Enquiry No {index +1}</Card.Title> */}
                                        <Card.Text>
                                            Name : {item.name}<br></br>
                                            City: {item.city}<br></br>
                                            Email Id : {item.email}<br></br>
                                            Contact:{item.contact}<br></br>
                                            Event Date :{item.date}<br></br>
                                        </Card.Text>

                                        <button onClick={() => deleteData(item._id)} className='mt-3 py-2 px-3 btn btn-danger'>Delete</button>&nbsp;&nbsp;
                                        <button onClick={() => done(item._id)} className='mt-3 py-2 px-3 btn btn-primary'>Send Email</button>&nbsp;&nbsp;


                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                </Row>
            </div>
        </>
    )
};

export default Edata;
