import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [result, setResult] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setErrorMessage(''); // Clear error message when a new file is selected
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!selectedFile) {
      alert('Please select a file first!');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await axios.post('https://mlproject-578n.onrender.com/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(response.data);
      setResult(`Prediction: ${response.data.message} with confidence: ${response.data.confidence}`);
      setErrorMessage(''); // Clear any previous error messages
    } catch (error) {
      console.error("Error during file upload or prediction", error.response || error);
      setErrorMessage(error.response?.data?.error || "Error uploading file or getting prediction");
      setResult(''); // Clear result on error
    }
  };

  return (
    <div className="App">
      <h1>Road Anomaly Detection</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Predict</button>
      </form>

      {result && <p>{result}</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
}

export default App;
