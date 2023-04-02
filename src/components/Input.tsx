import { Component, createSignal } from "solid-js";
import { useThemeContext } from "../stores/ThemeContext";
import styles from "../styles/components/Input.module.scss";

interface Props {
  onSubmit: (todo: string) => void;
}

const Input: Component<Props> = (props) => {
  const { isDarkTheme } = useThemeContext();
  const [todo, setTodo] = createSignal("");

  return (
    <form
      class={`${styles.Input} ${
        isDarkTheme() ? styles.Input___dark : styles.Input___light
      }`}
      onsubmit={(e) => {
        e.preventDefault();
        props.onSubmit(todo());
        setTodo("");
      }}
    >
      <span class={styles.Input_leadingIcon}>&nbsp</span>
      <input
        class={styles.Input_field}
        type="text"
        value={todo()}
        onChange={(e) => setTodo(e.currentTarget.value)}
        placeholder="Create a new todo..."
      />
    </form>
  );
};

export default Input;
