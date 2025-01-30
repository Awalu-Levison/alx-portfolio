/* eslint-disable no-unused-vars */
import React from 'react'
import './Terms.css';


const Terms = () => {
  return (
    <>
    <div className="terms-container">
      <h1>Terms & Conditions</h1>
      <p>Welcome to Foxplayer! Please read these terms and conditions carefully before using our service.</p>

      <h2>1. Acceptance of Terms</h2>
      <p>By accessing or using our platform, you agree to be bound by these terms and conditions.</p>

      <h2>2. Use of the Service</h2>
      <p>
        You must use the service in compliance with all applicable laws and regulations. Any misuse of the platform may result in
        suspension or termination of your account. In order to create a conducive environment for music lovers, Foxplayer is free of charge. There is no need of subscription fees. 
      </p>

      {/*
      <h2>3. Intellectual Property</h2>
      <p>
        All content, trademarks, and other intellectual property on this platform are owned by Foxplayer. Unauthorized use of this
        material is strictly prohibited.
      </p>
      */}

      <h2>3. User Responsibilities</h2>
      <p>As a user, you are responsible for safeguarding your account and ensuring that all information provided is accurate.</p>

      <h2>4. Limitation of Liability</h2>
      <p>
        Foxplayer is not liable for any damages arising from the use of the platform, including but not limited to data loss,
        unauthorized access, or service interruptions.
      </p>

      <h2>5. Changes to Terms</h2>
      <p>
        We reserve the right to update these terms at any time. Changes will be communicated through our platform, and continued use
        indicates acceptance.
      </p>
    </div>
    </>
    
  );
};

export default Terms;

