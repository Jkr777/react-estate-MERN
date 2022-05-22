import { useState } from "react";
import { Link } from "react-router-dom";

function RequestForm({ propertyId }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: ""
  });

  const handleChange = e => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  function handleSubmit(e) {
    e.preventDefault();
    
  }
  
  return (
    <div className="requestForm-container">
      <span className="requestForm-container__title margin-bottom3">Request a viewing</span>
      <form className="requestForm" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="your name*"
          minLength="2"
          maxLength="255"
          autoComplete="name"
          className="requestForm__input"
          required
          value={formData.name}
          onChange={handleChange}
        />        
        
        <input
          type="email"
          name="email"
          placeholder="your email*"
          minLength="2"
          maxLength="255"
          autoComplete="email"
          className="requestForm__input"
          required
          value={formData.name}
          onChange={handleChange}
        />        
        
        <input
          type="text"
          name="name"
          placeholder="your phone number*"
          minLength="2"
          maxLength="255"
          autoComplete="phone number"
          className="requestForm__input"
          required
          value={formData.name}
          onChange={handleChange}
        />

        <textarea
          name="message" 
          required 
          placeholder="your message*"
          className="requestForm__textArea"
          value={formData.message}
          onChange={handleChange}
        />
        <button className="action-btn">Request Details</button>
      </form>
      <p className="requestForm-container__terms">By submitting this form, you confirm that you agree to our website <Link className="terms-link" to="">terms of use</Link>, and our <Link className="terms-link" to="">privacy policy</Link>.</p>
    </div>
  );
}

export default RequestForm;