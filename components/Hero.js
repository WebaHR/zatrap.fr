import Image from "next/image";
import styles from "./Hero.module.css";
import heroPhoto from "@/public/images/hero-photo.jpg";

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Présentation">
      <div className={styles.inner}>
        <div className={styles.photoWrap}>
          <Image
            src={heroPhoto}
            alt="Portrait de Zatrap'"
            fill
            sizes="(max-width: 700px) 220px, 340px"
            className={styles.photo}
            priority
          />
        </div>
        <h1 className={styles.title}>Zatrap&apos;</h1>
      </div>
    </section>
  );
}
