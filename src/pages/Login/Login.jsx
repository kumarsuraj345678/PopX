import React, { useState } from "react";
import MobileLayout from "../../layouts/MobileLayout";
import Input from "../../components/Input/Input";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getUsers } from "../../utils/localStorage";
import { STORAGE_KEYS } from "../../utils/storageKeys";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const users = getUsers();

    const user = users.find(
      (u) => u.email === email && u.password === password,
    );

    if (!user) {
      toast.error("Invalid credentials");
      return;
    }

localStorage.setItem(
  STORAGE_KEYS.CURRENT_USER,
  JSON.stringify(user)
);

localStorage.setItem(
  STORAGE_KEYS.IS_LOGGED_IN,
  "true"
);

    toast.success("Login successful");

    setTimeout(() => {
      navigate("/profile");
    }, 1000);
  };

  return (
    <MobileLayout>
      <div className={styles.container}>
        <h1>
          Signin to your <br />
          PopX account
        </h1>
        <p>
          Lorem ipsum dolor sit amet, <br />
          consectetur adipiscing elit,
        </p>
        <Input
          label="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email address"
        />

        <Input
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />
        <button className={styles.loginBtn} onClick={handleLogin}>
          Login
        </button>
      </div>
    </MobileLayout>
  );
};

export default Login;
