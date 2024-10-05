"use client";
import Link from "next/link";
import React, { useState } from "react";
import Styles from "./links.module.css";
import NavLink from "./navLink/navLink";
import Image from "next/image";
import { handleLogout } from "@/lib/action";

const links = [
  {
    title: "Home",
    path: "/",
  },

  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];
const Links = ({session}) => {
  const [open, setOpen] = useState(false);

  // const Session = true;
  const isAdmin = true;
  return (
    <div>
      <div className={Styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {session?.user ? (
          <>
            {session.user?.isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <form action={handleLogout}>

            <button className={Styles.logout}>Logout</button>
            </form>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>
      {/* <button className={Styles.menuBtn} >Menu</button> */}
      <Image src='/menu.png' alt="hamburger" className={Styles.menuBtn} width={30} height={30} onClick={() => setOpen(!open)}/>
      {open && (
        <div className={Styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
