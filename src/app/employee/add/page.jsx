"use client"; // Mark this file as a client-side component

import React, { useState } from "react";
import AddForm from '../../../components/AddForm';
import { useDispatch } from "react-redux";
import { createEmployee } from "@/thunks/employee-thunk";

const Page = () => {
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    gender: "M", // Default gender set to "M"
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFormError(null);

    const formDataToSend = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      gender: formData.gender,
    };
    dispatch(createEmployee(formDataToSend))
  };

  return (
    <main>
      <AddForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        error={formError}
        loading={loading}
      />
    </main>
  );
};

export default Page;
