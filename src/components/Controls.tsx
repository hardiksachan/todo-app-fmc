import type { Component } from "solid-js";
import { useThemeContext } from "../stores/ThemeContext";
import { incompleteTodos, removeCompletedTodos } from "../stores/TodosStore";
import styles from "../styles/components/Controls.module.scss";

const CompletionStatus: Component = () => {
  return (
    <div class={styles.CompletionStatus}>{incompleteTodos} items left</div>
  );
};

const ClearCompleted: Component = () => {
  return (
    <div class={styles.ClearCompleted}>
      <button onClick={() => removeCompletedTodos()}>Clear Completed</button>
    </div>
  );
};

const Filter: Component = () => {
  return <div class={styles.Filter}>FILTER</div>;
};

const Controls: Component = () => {
  const { isDarkTheme } = useThemeContext();

  return (
    <div
      class={`${styles.ControlsLayout} ${
        isDarkTheme()
          ? styles.ControlsLayout___dark
          : styles.ControlsLayout___light
      }`}
    >
      <CompletionStatus />
      <ClearCompleted />
      <Filter />
    </div>
  );
};

export default Controls;
