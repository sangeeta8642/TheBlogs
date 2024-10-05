"use client"
import React from "react";
import styles from "./adminUserForm.module.css";
import { addUser } from "@/lib/action";
import { useFormState } from "react-dom";

function AdminUserForm() {

  // const {userId} = params
  const [state, formAction] = useFormState(addUser, undefined);

  return (
    <form action={formAction} className={styles.container}>
      <h1>Add New User</h1>
      <input type="text" name="username" placeholder="Username" />
      <input type="email" name="email" placeholder="Email" />
      <input type="text" name="img" placeholder="Image" />
      <input type="password" name="password" placeholder="Password"/>
      <select name="isAdmin">
        <option value="false">Is Admin ?</option>
        <option value="false">No</option>
        <option value="true">Yes</option>
      </select>
      {/* <textarea type="text" name="desc" placeholder="Description" rows={10} /> */}
      <button>Add</button>
      {state && state.error}
    </form>
  );
}

export default AdminUserForm;
