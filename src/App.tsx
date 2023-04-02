import { Component, createSignal } from "solid-js";
import Header from "./components/Header";
import styles from "./styles/pages/Home.module.scss";

const App: Component = () => {
  const [isDarkTheme, setIsDarkTheme] = createSignal(true);

  return (
    <main
      class={`${styles.App} ${
        isDarkTheme() ? styles.App___dark : styles.App___light
      }`}
    >
      <Header
        isDarkTheme={isDarkTheme()}
        toggleTheme={() => {
          setIsDarkTheme(!isDarkTheme());
        }}
      />
      <div>TODO: input</div>
      <div>TODO: list</div>
      <div>TODO: controls</div>
    </main>
  );
};

export default App;
