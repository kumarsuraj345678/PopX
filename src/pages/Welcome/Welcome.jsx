import React from "react";
import MobileLayout from "../../layouts/MobileLayout";
import Button from "../../components/Button/Button";
import styles from "./Welcome.module.css";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <MobileLayout>
      <div className={styles.content}>
        <h1>Welcome to PopX</h1>
        <p>
          Lorem ipsum dolor sit amet,
          <br /> consectetur adipiscing elit,
        </p>
        <Button variant="primary" onClick={() => navigate("/register")}>
          Create Account
        </Button>
        <Button variant="secondary" onClick={() => navigate("/login")}>
          Already Registered? Login
        </Button>
      </div>
    </MobileLayout>
  );
};

export default Welcome;
