import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import PersonalInfo from "./components/PersonalInfo";
import AddressInfo from "./components/AddressInfo";
import ReviewSubmit from "./components/ReviewSubmit";

const App = () => {
  const [formData, setFormData] = useState({
    personalInfo: {
      name: "",
      email: "",
    },
    addressInfo: {
      address: "",
      city: "",
    },
  });

  const updateFormData = (section, data) => {
    setFormData((prev) => ({
      ...prev,
      [section]: { ...prev[section], ...data },
    }));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<PersonalInfo updateFormData={updateFormData} formData={formData} />} />
        <Route path="/address" element={<AddressInfo updateFormData={updateFormData} formData={formData} />} />
        <Route path="/review" element={<ReviewSubmit formData={formData} />} />
      </Routes>
    </Router>
  );
};

export default App;
