import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import FizzBuzz from "./FizzBuzz";


function TheApp() {
    return (
        <>
            <Container>
                <Row>
                    <Col  md={4} style={{ marginTop: '50px' }}>
                        <div >
                                <h4 className='text-center'>Fizz Buzz: A Portfolio Project</h4>
                                <p className='text-justify' >
                                    By customizing the first and second numbers, you can observe different patterns and combinations of <strong>"Fizz"</strong> and <strong>"Buzz"</strong> throughout the sequence of numbers from 1 to 100.
                                </p>
                        </div>
                        <div style={{ marginTop: '50px' }}>
                            <h4 className="text-center"> Instructions </h4>
                        </div>
                        <div >
                                <p className='text-justify' >
                                    Enter a <strong>"Fizz"</strong> and a <strong>"Buzz"</strong> value. Press the button and the values will appear
                                </p>
                        </div>
                    </Col>
                    <Col md={8}>
                    <FizzBuzz/>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default TheApp;
