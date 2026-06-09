import React, { useState } from "react";
import MobileLayout from "../../layouts/MobileLayout";
import styles from "./Register.module.css";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { saveUser, getUsers } from "../../utils/localStorage";
import { validateEmail, validatePhone } from "../../utils/validation";
const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "yes",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    const users = getUsers();
    const existingUser = users.find((user) => user.email === formData.email);

    if (existingUser) {
      toast.error("Email already exists");
      return;
    }

    const { fullName, phone, email, password } = formData;

    if (!fullName || !phone || !email || !password) {
      toast.error("Please fill all required fields");
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Please enter valid email");
      return;
    }

    if (!validatePhone(phone)) {
      toast.error("Please enter valid phone number");
      return;
    }

    saveUser(formData);

    toast.success("Account created successfully");

    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };
  return (
    <MobileLayout>
      <div className={styles.container}>
        <h1>
          Create your <br />
          PopX account
        </h1>
        <Input
          label="Full Name"
          required
          value={formData.fullName}
          onChange={(e) => handleChange("fullName", e.target.value)}
        />

        <Input
          label="Phone Number"
          required
          value={formData.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
        />

        <Input
          label="Email Address"
          required
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
        />

        <Input
          label="Password"
          type="password"
          required
          value={formData.password}
          onChange={(e) => handleChange("password", e.target.value)}
        />

        <Input
          label="Company Name"
          value={formData.company}
          onChange={(e) => handleChange("company", e.target.value)}
        />

        <div className={styles.radioGroup}>
          <p>
            Are you an Agency?<span>*</span>
          </p>
          <div className={styles.radioOptions}>
            <label htmlFor="">
              <input
                type="radio"
                name="agency"
                value="yes"
                checked={formData.agency === "yes"}
                onChange={(e) => handleChange("agency", e.target.value)}
              />
              Yes
            </label>

            <label htmlFor="">
              <input
                type="radio"
                name="agency"
                value="no"
                checked={formData.agency === "no"}
                onChange={(e) => handleChange("agency", e.target.value)}
              />
              No
            </label>
          </div>
        </div>

        <div className={styles.buttonWrapper}>
          <Button variant="primary" onClick={handleSubmit}>
            Create Account
          </Button>
        </div>
      </div>
    </MobileLayout>
  );
};

export default Register;
