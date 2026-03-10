import React from "react";
import { NavLink } from "react-router-dom";

const ThankYou = () => (
  <div className="max-w-2xl mx-auto py-24 px-4 text-center text-white">
    <h2 className="text-4xl font-bold mb-6">Thank You!</h2>
    <p className="mb-8 text-lg">
      We appreciate you reaching out. A NEREON specialist will contact you soon.
    </p>
    <NavLink to="/" className="btn-primary" style={{ padding: '12px 24px' }}>
      Back to Home
    </NavLink>
  </div>
);

export default ThankYou;
