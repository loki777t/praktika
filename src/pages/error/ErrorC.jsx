import React from "react";
import styles from "./ErrorC.module.css"; // Assuming you have a CSS module for styling

const ErrorC = () => {
  return (
    <div className={styles.error}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <img src="/assets/img/NotFound/404.png" alt="404" />
    </div>
  );
};

export default ErrorC;
