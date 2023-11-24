import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useAuth } from "../context/AuthContext";
import styles from "./loginForm.module.css";

const LoginForm = () => {
  const { t } = useTranslation();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [nameDirty, setNameDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [nameError, setNameError] = useState(t("validError.name"));
  const [passwordError, setPasswordError] = useState(t("validError.password"));
  const [formValid, setFormValid] = useState(false);

  const { singIn } = useAuth();

  useEffect(() => {
    if (nameError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [nameError, passwordError]);

  const handleSubmit = (e) => {
    e.preventDefault();
    singIn({ userName, password });
  };

  const nameHandler = (e) => {
    setUserName(e.target.value);
    if (!e.target.value) {
      setNameError(t("validError.name"));
    } else {
      setNameError("");
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
      default:
        break;
    }
  };

  return (
    <div className={styles.main}>
      <h1>{t("login.info")}</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div class=" mb-3">
          {nameDirty && nameError && (
            <span style={{ color: "red" }}>{nameError}</span>
          )}
          <input
            onBlur={(e) => blurHandler(e)}
            name="name"
            type="text"
            class="form-control"
            placeholder={t("login.input.labelUser")}
            value={userName}
            onChange={(e) => nameHandler(e)}
          />
        </div>
        <div class="mb-3">
          {passwordDirty && passwordError && (
            <div
              style={{
                color: "red",
                width: "240px",
              }}
            >
              {passwordError}
            </div>
          )}
          <input
            onBlur={(e) => blurHandler(e)}
            name="password"
            type="password"
            class="form-control"
            placeholder={t("login.input.labelPassword")}
            value={password}
            onChange={(e) => passwordHandler(e)}
          />
        </div>
        <button
          type="submit"
          class="btn btn-primary btn-lg"
          disabled={!formValid}
        >
          {t("login.button")}
        </button>
      </form>
    </div>
  );
};
export default LoginForm;
