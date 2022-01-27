import React from "react";
import styles from "./Navigation.module.css";
import Link from "next/link";

function Navigation() {
  return (
    <header className={styles["nav-div"]}>
      <h2 className={styles["logo"]}>Meetups Manager</h2>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
