"use client";

import { useState } from "react";
import Image from "next/image";
import Script from "next/script";
import styles from "./TwoColumns.module.css";
import posterImage from "@/public/images/video-poster.png";

export default function VimeoEmbed({ videoId, title }) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className={styles.videoWrap}>
        <iframe
          src={`https://player.vimeo.com/video/${videoId}?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1`}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          className={styles.videoIframe}
          title={title}
        />
        <Script src="https://player.vimeo.com/api/player.js" strategy="lazyOnload" />
      </div>
    );
  }

  return (
    <div className={styles.videoWrap}>
      <button
        type="button"
        className={styles.videoPoster}
        onClick={() => setPlaying(true)}
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
    </div>
  );
}
