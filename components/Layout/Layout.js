import React from "react";
import styles from "./Layout.module.css";
import Navigation from "./Navigation";

function Layout(props) {
  return (
    <>
      <Navigation />
      <main className={styles["main"]}>{props.children}</main>
    </>
  );
}

export default Layout;
