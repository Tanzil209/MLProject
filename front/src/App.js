import React, { useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Button, Form, Alert, Spinner } from 'react-bootstrap';

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [result, setResult] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setErrorMessage(''); // Clear error message when a new file is selected
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedFile) {
      setErrorMessage('Please select a file first!');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    setLoading(true); // Start loading state

    try {
      const response = await axios.post('https://mlproject-api.onrender.com//predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(response.data);
      setResult(`Prediction: ${response.data.message} with confidence: ${response.data.confidence}`);
      setErrorMessage(''); // Clear any previous error messages
    } catch (error) {
      console.error('Error during file upload or prediction', error.response || error);
      setErrorMessage(error.response?.data?.error || 'Error uploading file or getting prediction');
      setResult(''); // Clear result on error
    } finally {
      setLoading(false); // Stop loading state
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={6} className="text-center">
          <h1 className="mb-4">Road Anomaly Detection</h1>

          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Select an image to upload:</Form.Label>
              <Form.Control type="file" onChange={handleFileChange} />
            </Form.Group>

            {loading ? (
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Processing...</span>
              </Spinner>
            ) : (
              <Button variant="primary" type="submit" className="mt-2">
                Predict
              </Button>
            )}
          </Form>

          {result && <Alert variant="success" className="mt-3">{result}</Alert>}
          {errorMessage && <Alert variant="danger" className="mt-3">{errorMessage}</Alert>}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
