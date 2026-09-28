import Image from "next/image";
import styles from "./TwoColumns.module.css";
import VimeoEmbed from "./VimeoEmbed";
import ExpandableBio from "./ExpandableBio";
import sidePhoto from "@/public/images/side-photo.jpg";

export default function TwoColumns() {
  return (
    <section className={styles.section} aria-label="À propos">
      <div className={styles.grid}>
        <div className={styles.textCol}>
          <ExpandableBio />
        </div>

        <div className={styles.mediaCol}>
          <div className={styles.photoWrap}>
            <Image
              src={sidePhoto}
              alt="Sculpture en bois de Zatrap'"
              fill
              sizes="(max-width: 900px) 100vw, 560px"
              className={styles.photo}
            />
          </div>
          <VimeoEmbed videoId="1229180211" title="ZATRAP_REGIS GRANVILLE_092026" />
        </div>
      </div>
    </section>
  );
}
