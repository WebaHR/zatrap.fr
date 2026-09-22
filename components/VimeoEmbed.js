"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Script from "next/script";
import styles from "./TwoColumns.module.css";
import posterImage from "@/public/images/video-poster.png";

const ACCESS_PASSWORD = "zatrap2026";

export default function VimeoEmbed({ videoId, title }) {
  const [playing, setPlaying] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const wrapRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    if (password !== ACCESS_PASSWORD) {
      setError(true);
      return;
    }
    setError(false);
    setPassword("");
    setShowModal(false);
    setPlaying(true);
    wrapRef.current?.requestFullscreen?.().catch(() => {});
  }

  return (
    <>
      <div className={styles.videoWrap} ref={wrapRef}>
        {playing ? (
          <>
            <iframe
              src={`https://player.vimeo.com/video/${videoId}?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1`}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              className={styles.videoIframe}
              title={title}
            />
            <Script src="https://player.vimeo.com/api/player.js" strategy="lazyOnload" />
          </>
        ) : (
          <button
            type="button"
            className={styles.videoPoster}
            onClick={() => setShowModal(true)}
            aria-label={`Lire la vidéo : ${title}`}
          >
            <Image
              src={posterImage}
              alt=""
              fill
              sizes="(max-width: 900px) 100vw, 560px"
              className={styles.videoPosterImage}
              priority
            />
            <span className={styles.playIcon} aria-hidden="true">▶</span>
          </button>
        )}
      </div>

      {showModal && (
        <div
          className={styles.modalOverlay}
          onClick={() => setShowModal(false)}
        >
          <form
            className={styles.modalBox}
            role="dialog"
            aria-modal="true"
            aria-label="Accès protégé à la vidéo"
            onClick={(event) => event.stopPropagation()}
            onSubmit={handleSubmit}
          >
            <p className={styles.modalLabel}>Cette vidéo est protégée</p>
            <input
              type="password"
              className={styles.modalInput}
              placeholder="Mot de passe"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
                setError(false);
              }}
              autoFocus
            />
            {error && (
              <p className={styles.modalError}>Mot de passe incorrect.</p>
            )}
            <div className={styles.modalActions}>
              <button
                type="button"
                className={styles.modalCancel}
                onClick={() => setShowModal(false)}
              >
                Annuler
              </button>
              <button type="submit" className={styles.modalSubmit}>
                Valider
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
