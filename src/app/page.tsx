import styles from "./page.module.css";
import HomePage from "../pages/Home/HomePage";

export default function Home() {
  return (
    <main className={styles.main}>
      <HomePage />
    </main>
  );
}
