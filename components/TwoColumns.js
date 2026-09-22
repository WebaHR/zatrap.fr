import Image from "next/image";
import styles from "./TwoColumns.module.css";
import VideoDropzone from "./VideoDropzone";
import sidePhoto from "@/public/images/side-photo.jpg";

export default function TwoColumns() {
  return (
    <section className={styles.section} aria-label="À propos">
      <div className={styles.grid}>
        <div className={styles.textCol}>
          <h2 className={styles.heading}>Régis Granville, artiste plasticien et visuel</h2>
          <p className={styles.paragraph}>
            Il ne crée pas de simples objets : il façonne des expériences. Sa
            démarche explore le dialogue intime entre la matière et la
            lumière, tissant des ponts entre mémoire, spiritualité et
            condition humaine. Qu’il s’exprime à travers la peinture
            abstraite, la photographie ou la rigueur alchimique du verre en
            fusion, son travail cherche à donner une forme tangible à ce qui
            nous lie à notre environnement.
          </p>
          <p className={styles.paragraph}>
            Au-delà de la toile, l&apos;artiste libère l&apos;œuvre de son
            cadre traditionnel pour concevoir des installations immersives où
            le spectateur devient acteur. C’est le cœur de son projet
            magistral, Zatrap’. Inspiré par la tradition martiniquaise du
            piège à crabes de terre et le mythique crabe violoniste —
            poétiquement nommé « Cé ma faute » en raison du mouvement de sa
            pince rappelant le mea culpa —, ce dispositif monumental
            transcende le folklore pour devenir une odyssée anthropologique
            universelle.
          </p>
          <p className={styles.paragraph}>
            Ici, l&apos;homme moderne, prisonnier de ses certitudes, est
            invité à se laisser piéger pour mieux se libérer. De
            l&apos;arche minérale à l&apos;antre mémoriel, le visiteur
            traverse un rite de passage sensoriel total où résonnent les
            échos d&apos;Eugène Mona et la grandeur de Verdi. Véritable
            électrochoc humaniste face à une époque hyper-connectée mais
            isolée, Zatrap’ et l&apos;œuvre de Régis Granville rappellent
            l&apos;essentiel : briser l&apos;indifférence, éveiller les cinq
            sens et renouer avec la profondeur de son propre Soi. Car au bout
            du compte, Zatrap’ n&apos;est pas seulement une installation,
            c’est une expérience à voir, à écouter, à respirer, à goûter et
            à toucher dans un souffle organique : c&apos;est une offrande,
            une vérité posée là, qui nous murmure qu&apos;il est encore temps
            de se reconnecter au vivant.
          </p>
          <p className={styles.paragraph}>
            À vous, désormais, de la faire naître.
          </p>
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
          <VideoDropzone />
        </div>
      </div>
    </section>
  );
}
