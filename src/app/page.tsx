"use client";
import styles from "./page.module.css";
import dynamic from "next/dynamic";
const WormholeWidget = dynamic(() => import("@/app/worm"), {
  ssr: false,
});

export default function Home() {
  return (
    <div  >
      <div style={{ padding: 10 }}>
        <WormholeWidget />
      </div>
    </div>
  );
}
