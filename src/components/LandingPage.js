import React from 'react';

const LandingPage = ({ onStart }) => (
  <div className="landing-page">
    <img src="logo.png" alt="Logo" />
    {/* <link rel = "logo" herf= "logo.png"></ */}
    <h1>Let the Quizz begain....</h1>
    <div className="line"></div>
    <button onClick={onStart}>Play Now!</button>
  </div>
);

export default LandingPage;
