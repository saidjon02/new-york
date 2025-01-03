import React from 'react';
import { Helmet } from 'react-helmet';

function Not() {
  return (
    <div className="not">
      <Helmet>
        <title>Beautiful NYC / page not found</title>
        <meta name="description" content="The page is not found" />
        <link rel="canonical" href="https://beautiful-newyork.netlify.app/not" />
      </Helmet>
      <div className="not2">
        <div className="not3">
          <h2 className="not-title">FOG ERROR</h2>
          <h2 className="not-title2">404</h2>
          <h1 className="not-text">The page is not found.</h1>
          <p className="not-text">I tried to catch some fog, but I missed it.</p>
          <a href="/" className="not-btn">
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}

export default Not;
