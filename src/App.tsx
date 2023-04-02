import { Component, createSignal } from "solid-js";
import Header from "./components/Header";
import { useThemeContext } from "./stores/ThemeContext";
import styles from "./styles/pages/Home.module.scss";

const App: Component = () => {
  const { isDarkTheme } = useThemeContext();

  return (
    <main
      class={`${styles.App} ${
        isDarkTheme() ? styles.App___dark : styles.App___light
      }`}
    >
      <Header />
      <div>TODO: input</div>
      <div>TODO: list</div>
      <div>TODO: controls</div>
    </main>
  );
};

export default App;
