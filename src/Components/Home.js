import React from "react";
import {Col, Container, Row, Nav} from "react-bootstrap";
import Image from "../media/images/image.png"
import { Link } from "react-router-dom"
import { DiReact, DiHtml5, DiJavascript1, DiBootstrap } from "react-icons/di";




function Home() {
    return (
        <>
            <Container>
                <Row>
                    <Col  md={4} style={{ marginTop: '30px' }}>
                        <div >
                              <h1 className="text-center" style={{ fontFamily: 'Bumblebee', fontSize: '80px', textShadow: '4px 4px 8px rgba(0, 0, 0, 0.5)'}} >Fizz Buzz</h1>
                              <p className="text-justify" style={{ fontSize: '16px', }}>
                                The Fizz Buzz app is a program that prints the numbers from 1 to 100. However, instead of printing the actual number, it follows certain rules based on the numbers you enter. If a number is a multiple of the first number you entered, it will display <strong>"Fizz"</strong> instead of the number. If a number is a multiple of the second number you entered, it will display <strong>"Buzz"</strong> instead of the number.  If a number is a multiple of both the first and second numbers you entered, it will display <strong>"FizzBuzz"</strong> instead of the number.
                              </p>
                        </div>
                        <Nav.Link className="d-flex justify-content-center">
                            <Link to="/the-app">
                            <button  type="button"
                                     className="btn btn-dark"
                                     style={{boxShadow: '6px 6px 8px rgba(0, 0, 0, 0.9)'}}>
                                Try It Out
                            </button>
                            </Link>
                        </Nav.Link>
                        <div style={{ marginTop: '20px' }}>
                            <h4 className="text-center"> Created using: </h4>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <DiReact size={62} />
                            <DiJavascript1 size={62}/>
                            <DiBootstrap size={62}/>
                            <DiHtml5 size={62}/>
                        </div>
                    </Col>
                    <Col md={8} style={{ marginTop: '30px' }}>
                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <img src={Image} alt={"Image"} style={{ width: '500px', height: 'auto' }}/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Home;
