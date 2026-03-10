import React, { useState, useEffect } from "react";
import "../index.css";

const COOKIE_KEY = "cookieConsent";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const [consent, setConsent] = useState(null);

  useEffect(() => {
    const savedConsent = localStorage.getItem(COOKIE_KEY);
    if (!savedConsent) {
      setVisible(true);
    } else {
      setConsent(savedConsent);
    }
  }, []);

  const handleConsent = (value) => {
    localStorage.setItem(COOKIE_KEY, value);
    setConsent(value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-consent-popup">
      <div className="cookie-consent-content">
        <h4>Cookie Consent</h4>
        <p>
          We use cookies to enhance your experience. You can accept or reject cookies. See our <a href="/privacy">Privacy Policy</a> for details.
        </p>
        <button onClick={() => handleConsent("accepted")}>Accept</button>
        <button onClick={() => handleConsent("rejected")}>Reject</button>
      </div>
    </div>
  );
};

export default CookieConsent;
