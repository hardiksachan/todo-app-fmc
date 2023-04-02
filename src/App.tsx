import { Component } from "solid-js";
import Header from "./components/Header";
import Input from "./components/Input";
import { useThemeContext } from "./stores/ThemeContext";
import styles from "./styles/pages/Home.module.scss";
import { addTodo } from "./stores/TodosStore";

const App: Component = () => {
  const { isDarkTheme } = useThemeContext();

  return (
    <main
      class={`${styles.App} ${
        isDarkTheme() ? styles.App___dark : styles.App___light
      }`}
    >
      <Header />
      <Input
        onSubmit={(todo) => {
          addTodo(todo);
        }}
      />
      <div>TODO: list</div>
      <div>TODO: controls</div>
    </main>
  );
};

export default App;
