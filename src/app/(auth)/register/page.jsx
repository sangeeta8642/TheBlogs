import { register } from "@/lib/action";
import React from "react";
import styles from "./register.module.css";
import RegisterFrom from "@/components/registerFrom/registerFrom";

const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <RegisterFrom/>
      </div>
    </div>
  );
};

export default RegisterPage;
