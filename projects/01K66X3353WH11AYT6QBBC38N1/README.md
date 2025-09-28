# Fees App Project: 01K66X3353WH11AYT6QBBC38N1

## Frontend Components
// React Component for Guided Tours
import React from 'react';
import './Tour.css';

const GuidedTour = ({ steps, currentStep, onNext, onPrevious }) => {
    return (
        <div className="tour-overlay">
            <div className="tour-modal">
                <h2>{steps[currentStep].title}</h2>
                <p>{steps[currentStep].content}</p>
                <div className="tour-controls">
                    <button onClick={onPrevious} disabled={currentStep === 0}>Previous</button>
                    <button onClick={onNext} disabled={currentStep === steps.length - 1}>Next</button>
                </div>
            </div>
        </div>
    );
};

export default GuidedTour;

// Example usage:
// const steps = [{title: 'Step 1', content: 'This is the first step.'}, {title: 'Step 2', content: 'This is the second step.'}];
// <GuidedTour steps={steps} currentStep={0} onNext={handleNext} onPrevious={handlePrevious} />

## Backend API
// API Endpoints

const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const { authenticateJWT } = require('./middleware');
const TourController = require('./controllers/TourController');

// Fetch tour data
router.get('/tours/:userId', authenticateJWT, TourController.getTours);

// Save user progress
router.post('/tours/progress', [
  authenticateJWT,
  check('tourId').notEmpty().withMessage('Tour ID is required'),
  check('progress').isInt({ min: 0, max: 100 }).withMessage('Progress must be a percentage between 0 and 100')
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  TourController.saveProgress(req, res);
});

module.exports = router;

// Middleware for user authentication

const jwt = require('jsonwebtoken');

function authenticateJWT(req, res, next) {
  const token = req.headers['authorization'] && req.headers['authorization'].split(' ')[1];
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
}

// Tour Controller

class TourController {
  static async getTours(req, res) {
    // Logic to fetch tours for the user
    res.json({ tours: [] }); // Placeholder
  }
  static async saveProgress(req, res) {
    // Logic to save user progress
    res.status(200).json({ message: 'Progress saved successfully!' });
  }
}

// Environment Variables
// .env.sample
JWT_SECRET=mysecretkey
DATABASE_URL=mongodb://localhost:27017/mydatabase

// README.md
# Guided Tours API

This project provides an API for tracking user progress through interactive tours.

## Setup
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Create a `.env` file based on `.env.sample`.
4. Run the application with `npm start`.

## Usage
- GET `/tours/:userId` - Fetch all tours for a user.
- POST `/tours/progress` - Save user progress through a tour.

## Dependencies
- express
- express-validator
- jsonwebtoken
- dotenv


## Database Schema
-- Schema for Guided Tours Database
CREATE TABLE Tours (
    TourID INT PRIMARY KEY,
    TourName VARCHAR(255) NOT NULL,
    CreatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    UpdatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE TourSteps (
    StepID INT PRIMARY KEY,
    TourID INT,
    StepDescription TEXT,
    StepOrder INT,
    FOREIGN KEY (TourID) REFERENCES Tours(TourID)
);

CREATE TABLE UserProgress (
    ProgressID INT PRIMARY KEY,
    UserID INT,
    TourID INT,
    CurrentStepID INT,
    Completed BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (TourID) REFERENCES Tours(TourID),
    FOREIGN KEY (CurrentStepID) REFERENCES TourSteps(StepID)
);

CREATE TABLE UserFeedback (
    FeedbackID INT PRIMARY KEY,
    UserID INT,
    TourID INT,
    FeedbackText TEXT,
    CreatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
);

## Technical Specifications
The project involves creating guided tours in Grist, enabling users to navigate through documents interactively. This will include designing workflows for Document Tours and Tutorials, integrating them into existing Grist documents, and ensuring seamless onboarding for new users.