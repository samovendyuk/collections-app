import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useAuth } from "../context/AuthContext";
import styles from "./loginForm.module.css";

const RegisterForm = () => {
  const { t } = useTranslation();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { registration } = useAuth();
  const [nameDirty, setNameDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [nameError, setNameError] = useState(t("validError.name"));
  const [passwordError, setPasswordError] = useState(t("validError.password"));
  const [emailError, setEmailError] = useState(t("validError.email"));
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (nameError || passwordError || emailError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [nameError, passwordError, emailError]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    registration({ userName, password, email });
  };

  const nameHandler = (e) => {
    setUserName(e.target.value);
    if (!e.target.value) {
      setNameError(t("validError.name"));
    } else {
      setNameError("");
    }
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError(t("validError.invalidEmail"));
    } else {
      setEmailError("");
    }
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 3 || e.target.value.length > 10) {
      setPasswordError(t("validError.passwordError"));
      if (!e.target.value) {
        setPasswordError(t("validError.password"));
      }
    } else {
      setPasswordError("");
    }
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "name":
        setNameDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
      case "email":
        setEmailDirty(true);
        break;
      default:
        break;
    }
  };

  return (
    <div className={styles.main}>
      <h1>{t("registration.info")}</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div class="mb-3">
          {nameDirty && nameError && (
            <div style={{ color: "red" }}>{nameError}</div>
          )}
          <input
            onBlur={(e) => blurHandler(e)}
            name="name"
            type="text"
            class="form-control"
            placeholder={t("registration.input.labelUser")}
            value={userName}
            onChange={(e) => nameHandler(e)}
          />
        </div>
        <div class="mb-3">
          {passwordDirty && passwordError && (
            <div style={{ color: "red", width: "240px" }}>{passwordError}</div>
          )}
          <input
            onBlur={(e) => blurHandler(e)}
            name="password"
            type="password"
            class="form-control"
            placeholder={t("registration.input.labelPassword")}
            value={password}
            onChange={(e) => passwordHandler(e)}
          />
        </div>
        <div class=" mb-3">
          {emailDirty && emailError && (
            <div style={{ color: "red" }}>{emailError}</div>
          )}
          <input
            onBlur={(e) => blurHandler(e)}
            name="email"
            type="email"
            class="form-control"
            placeholder={t("registration.input.labelEmail")}
            value={email}
            onChange={(e) => emailHandler(e)}
          />
        </div>

        <button
          type="submit"
          class="btn btn-primary btn-lg"
          disabled={!formValid}
        >
          {t("registration.button")}
        </button>
      </form>
    </div>
  );
};
export default RegisterForm;
