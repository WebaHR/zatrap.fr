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
          <div className={styles.videoRow}>
            <div className={styles.videoText}>
              <h3 className={styles.videoTitle}>ZATRAP&apos; – L&apos;APPÂT SACRÉ</h3>
              <p className={styles.videoTagline}>Une Odyssée anthropologique</p>
              <p className={styles.videoByline}>
                Installation immersive de Régis Granville
              </p>
              <p className={styles.videoParagraph}>
                Le zatrap&apos;, piège à crabes traditionnel de Martinique,
                devient ici le pivot d&apos;une réflexion universelle. Regis
                Granville, artiste vivant et travaillant à Paris, détourne
                cet objet du quotidien pour transformer le visiteur en
                acteur d&apos;une expérience initiatique : celle de la
                capture de soi.
              </p>
              <p className={styles.videoParagraph}>
                En quatre actes, l&apos;installation invite à une immersion
                sensorielle — du « seuil de l&apos;humilité » à la «
                transmutation » finale. Le visiteur chemine dans une
                structure évoquant les galeries du terrier pour questionner,
                par un glissement de perspective, sa propre condition
                humaine et son rapport au vivant. Entre mémoire rurale des
                Antilles françaises, héritage français et dimension sacrée,
                Zatrap&apos; devient le théâtre d&apos;une métamorphose :
                ici, l&apos;œuvre-rite transcende le réel, invitant le
                visiteur à traverser ses propres zones d&apos;ombre pour
                atteindre, en piégeur piégé, une quête de lumière où
                l&apos;intime renoue enfin avec l&apos;universel. Parce que
                piéger l&apos;autre, c&apos;est finalement s&apos;offrir
                soi-même au piège de l&apos;éveil.
              </p>
              <p className={styles.videoNote}>
                « Une vidéo d&apos;animation 3D de 2 minutes du projet est
                disponible ici-même sur le site ».
              </p>
            </div>
            <VimeoEmbed videoId="1229180211" title="ZATRAP_REGIS GRANVILLE_092026" />
          </div>
        </div>
      </div>
    </section>
  );
}
