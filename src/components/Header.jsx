// React
import React, { useState } from "react";
// CSS
import styles from "./Header.module.css";
// Icons
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

// function handleClick(params) {
//   return (window.location.href =
//     "mailto:webgallery@protonmail.com?subject=I%20need%20a%20website.&body=Hi,%20I%20want%20to%20buy%20a%20website!");
// }

export default function Header() {
  const [sidebar, setSidebar] = useState(false);

  const SidebarHandler = () => {
    setSidebar(!sidebar);
  };

  return (
    <header>
      {/* Toolbar */}
      <div className={styles.toolbar}>
        <AiOutlineMenu
          className={styles.hamburgerMenu}
          onClick={SidebarHandler}
        />
        <div className={styles.toolbarTitle}>WEBGALLERY</div>
      </div>

      {/* Mobile Sidebar */}
      <div className={sidebar ? styles.sidebarOpen : styles.sidebar}>
        <div className={styles.sidebarContainer}>
          <AiOutlineClose
            className={styles.closeBtn}
            onClick={SidebarHandler}
          />

          <div className={styles.sidebarLogo}>
            <img src="/images/logo.png" alt="Logo" />
          </div>

          {/* <hr />

          <h2>How it works ?</h2>

          <ol>
            <li>Choose your website.</li>
            <li>We install your website with your content.</li>
            <li>Enjoy your website, it’s live!</li>
          </ol>

          <hr />

          <p>
            Your website for{" "}
            <span className={styles.accentColor}>only 47$</span>.
          </p>

          <button
            className={styles.startBtn}
            onClick={handleClick}
            target="_blank"
            rel="noreferrer"
          >
            START
          </button> */}
        </div>
      </div>
    </header>
  );
}
