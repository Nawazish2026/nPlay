import { useState } from 'react';
import styles from './Login.module.css';
import '@fontsource/open-sans'; 

export default function Login() {
  return (
   <>
   <div className={styles.heading}><img src="/header.png" className={styles.logoImage} /></div>
   <div className={styles.container}>
    <div className={styles.card}>
    <p className={styles.title}>Create a new account</p>

      <button className={styles.googleBtn}>
        <img src="/google.png" alt="Google logo" className={styles.googleIcon} />
        Sign Up with Google
      </button>
    </div>
    <div className={styles.content}>
    <button className={styles.createBtn}>Create an Account</button>
<p className={styles.signInText}>
  Already have an account? <span className={styles.signInLink}>Sign In</span>
</p>
    </div>
    </div>
    <div className={styles.footer}>
  <p className={styles.footerText}>© 2025 nPlay. All rights reserved.</p>
</div>

   </>
  );
}