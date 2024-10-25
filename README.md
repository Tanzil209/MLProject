Road Anomaly Detection App
---
A web application for detecting road anomalies using a Convolutional Neural Network (CNN) model. Users can upload images, and the app will predict if the image contains any dangerous anomaly, such as an accident, car fire, fighting, or snatching. This project features a React frontend and a Flask backend API.

## Table of Contents
- [Features](#features)
- [Project Structure](#project-structure)
- [Requirements](#requirements)
- [Setup](#setup)
- [Usage](#usage)
- [Backend API](#backend-api)
- [License](#license)

## Features

- **Image Upload**: Users can upload images of road scenes.
- **Prediction Display**: The app provides predictions and the confidence score of detected anomalies.
- **Loading Spinner**: Shows a loading spinner while processing.
- **Error Handling**: Displays error messages for invalid inputs or API issues.

## Project Structure

```
MLproject/
├── back/                # Backend (Flask API)
│   ├── app.py           # Main backend script
│   ├── requirements.txt # Backend dependencies
│   └── model/           # Contains the CNN model files
└── front/               # Frontend (React app)
    ├── public/
    ├── src/
    │   ├── App.js       # Main frontend component
    │   └── index.js     # Entry point
    └── package.json     # Frontend dependencies
```

## Requirements

- **Frontend**: 
  - React
  - Axios
  - Bootstrap (for styling)

- **Backend**:
  - Python 3.7+
  - Flask
  - TensorFlow or PyTorch (for the CNN model)

## Setup

### Backend

1. Navigate to the `back` directory:
   ```bash
   cd MLproject/back
   ```

2. Install the required Python packages:
   ```bash
   pip install -r requirements.txt
   ```

3. Start the Flask server:
   ```bash
   python app.py
   ```
   This will run the server on `http://127.0.0.1:5000`.

### Frontend

1. Navigate to the `front` directory:
   ```bash
   cd MLproject/front
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the React app:
   ```bash
   npm start
   ```
   By default, this runs on `http://localhost:3000`.

## Usage

1. Open the web app at `http://localhost:3000`.
2. Select an image file showing a road scene with possible anomalies.
3. Click the "Predict" button to receive the prediction result.
4. The app will display either the prediction and confidence score or an error message if something goes wrong.

## Backend API

The backend Flask API endpoint `/predict` accepts a `POST` request with an image file and returns the prediction.

- **URL**: `POST http://127.0.0.1:5000/predict`
- **Headers**: `Content-Type: multipart/form-data`
- **Response**:
  ```json
  {
    "message": "Accident",
    "confidence": 0.85
  }
  ```
- **Error Handling**: Returns a relevant error message if the file is invalid or prediction fails.

## License

This project is licensed under the MIT License.

---

This `README` covers all essential parts of the project and guides users through setting up and using your app. Let me know if you’d like to add more specific information, like additional error handling cases or examples!
