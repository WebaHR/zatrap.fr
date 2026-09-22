import Image from "next/image";
import styles from "./TwoColumns.module.css";
import VideoDropzone from "./VideoDropzone";
import sidePhoto from "@/public/images/side-photo.svg";

export default function TwoColumns() {
  return (
    <section className={styles.section} aria-label="À propos">
      <div className={styles.grid}>
        <div className={styles.textCol}>
          <h2 className={styles.heading}>L&apos;histoire</h2>
          <p className={styles.paragraph}>
            Zatrap&apos; construit son univers à la croisée du son et de
            l&apos;image, entre nuits de studio et lumières de scène. Chaque
            morceau part d&apos;une idée simple, retravaillée jusqu&apos;à ce
            qu&apos;elle sonne juste.
          </p>
          <p className={styles.paragraph}>
            Remplace ce texte par la véritable biographie, l&apos;actualité
            ou la présentation du projet. La mise en page reste identique,
            seul le contenu change.
          </p>
        </div>

        <div className={styles.mediaCol}>
          <div className={styles.photoWrap}>
            <Image
              src={sidePhoto}
              alt="Photo de Zatrap' en studio"
              fill
              sizes="(max-width: 900px) 100vw, 560px"
              className={styles.photo}
            />
          </div>
          <VideoDropzone />
        </div>
      </div>
    </section>
  );
}
