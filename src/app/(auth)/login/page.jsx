import { hangleGithubLogin, login } from "@/lib/action";
import React from "react";
import LoginFrom from "@/components/loginForm/LoginForm";
import styles from "./login.module.css";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={hangleGithubLogin}>
          <button className={styles.github}>Login with github</button>
        </form>
        <LoginFrom />
      </div>
    </div>
  );
};

export default LoginPage;
