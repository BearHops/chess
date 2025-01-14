"use client"

import styles from "./page.module.css";
import { Board } from './board/Board'
import { Timer } from "./timer/Timer";
import { ReactElement, useRef } from "react";

export default function Home() {
  const timerRef = useRef<ReactElement>(null)

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Timer ref={timerRef}/>
        <Board/>
      </main>
    </div>
  );
}
