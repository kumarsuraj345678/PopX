import React from "react";
import styles from "./Input.module.css";

const Input = ({
  label,
  value,
  onChange,
  type = "text",
  required = false,
  placeholder = "",
}) => {
  return (
    <div className={styles.inputGroup}>
      <label htmlFor="" className={styles.label}>
        {label}
        {required && <span className={styles.required}>*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={styles.input}
      />
    </div>
  );
};

export default Input;
