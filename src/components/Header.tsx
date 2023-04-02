import type { Component } from "solid-js";
import moon from "../assets/images/icon-moon.svg";
import sun from "../assets/images/icon-sun.svg";
import styles from "../styles/components/Header.module.scss";

export interface Props {
  isDarkTheme: boolean;
  toggleTheme: () => void;
}

const Header: Component<Props> = (props) => {
  return (
    <header class={styles.Header}>
      <h1 class={styles.Header_title}>TODO</h1>
      <img
        src={props.isDarkTheme ? sun : moon}
        alt="Toggle theme"
        class={styles.Header_themeToggle}
        onClick={props.toggleTheme}
      />
    </header>
  );
};

export default Header;
