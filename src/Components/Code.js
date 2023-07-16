import React from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {Container, Col, Row} from "react-bootstrap";

function Code() {

    const codeString = `import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap';

function FizzBuzz() {

  const [num1, setNum1] = useState(3);
  const [num2, setNum2] = useState(5);
  const [results, setResults] = useState([]);

  const handleNum1Change = (event) => {
    setNum1(parseInt(event.target.value));
  };

  const handleNum2Change = (event) => {
    setNum2(parseInt(event.target.value));
  };

  const handleBuzzItClick = () => {
    const newResults = [];
    for (let i = 1; i <= 100; i++) {
      let output = '';
      if (i % num1 === 0) output += 'Fizz';
      if (i % num2 === 0) output += 'Buzz';
      if (output === '') output = i.toString();
      newResults.push(output);
    }
    setResults(newResults);
  };

  const renderResultsTable = () => {
    return (
      <Table striped bordered size="sm" 
                              style={{ margin: 'auto', marginTop: '20px' }}>
        <tbody>
          {results.map((result, index) => (
            <tr key={index}>
              <td style={{
                width: '20%',
                height: '2rem',
                fontSize: '1.2rem',
                fontWeight: result === 'Fizz' ? 'bold' :
                            result === 'Buzz' ? 'bold' :
                            result === 'FizzBuzz' ? 'bold' : 'normal',
                }}>{result}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  };

    return (
        <Container style={{ marginTop: '50px' }}>
          <Row>
            <Col>
              <Form>
                <Form.Group controlId="num1" 
                            style={{ marginBottom: '10px' }}>
                  <Form.Label>Enter Number 1:</Form.Label>
                  <Form.Control type="number" 
                                value={num1} 
                                onChange={handleNum1Change} />
                </Form.Group>
                <Form.Group controlId="num2" 
                            style={{ marginBottom: '10px' }}>
                  <Form.Label>Enter Number 2:</Form.Label>
                  <Form.Control type="number" 
                                value={num2}   
                                onChange={handleNum2Change} />
                </Form.Group>
                <Button variant="dark" 
                        onClick={handleBuzzItClick} 
                        style={{ width: '100%' }}>
                  Buzz It
                </Button>
              </Form>
            </Col>
          </Row>
          <Row>
            <Col>
              <h2 style={{ marginTop: '20px', 
                           textAlign: 'center' }}>Results:</h2>
              <div style={{ maxHeight: '300px', 
                            overflowY: 'auto', 
                            border: '1px solid #ccc', 
                            borderRadius: '5px', 
                            padding: '10px' }}>
                {renderResultsTable()}
              </div>
            </Col>
          </Row>
        </Container>
    );
}

export default FizzBuzz;
`;

    return (
        <Container>
            <Row>
                <Col md={4} style={{ marginTop: '30px' }}>
                    <h4>Here's the code for the function FizzBuzz component:</h4>
                    <p>
                        The code implements the FizzBuzz game using React and React Bootstrap.
                    </p>
                </Col>
                <Col md={8} style={{ marginTop: '30px' }}>
                    <div style={{ maxHeight: '600px', overflowY: 'auto', border: '1px solid #ccc', borderRadius: '5px', padding: '10px' }}>
                        <SyntaxHighlighter
                            language="javascript"
                            style={tomorrowNight}
                            customStyle={{padding: "25px"}}>
                            {codeString}
                        </SyntaxHighlighter>
                    </div>

                </Col>
            </Row>
        </Container>
    );
}

export default Code;
