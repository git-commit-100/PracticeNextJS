import React from "react";
import styles from "./Navigation.module.css";
import Link from "next/link";

function Navigation() {
  return (
    <header className={styles["header"]}>
      <h2 className={styles["logo"]}>Meetups Manager</h2>
      <nav>
        <ul>
          <li>
            <Link href="/">All Meetups</Link>
          </li>
          <li>
            <Link href="/new-meetup">Add New Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
