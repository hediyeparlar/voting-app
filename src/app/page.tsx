import Image from "next/image";
import styles from "./page.module.css";
import HomePage from "../pages/Home/HomePage";

export default function Home() {
  return (
    <main className={styles.main}>
      <HomePage />
      {/* 
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
     */}
    </main>
  );
}
