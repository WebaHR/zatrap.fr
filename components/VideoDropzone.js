"use client";

import { useRef, useState } from "react";
import styles from "./VideoDropzone.module.css";

export default function VideoDropzone() {
  const [videoUrl, setVideoUrl] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef(null);

  function handleFiles(files) {
    const file = files && files[0];
    if (!file || !file.type.startsWith("video/")) return;
    const url = URL.createObjectURL(file);
    setVideoUrl(url);
  }

  function handleDrop(event) {
    event.preventDefault();
    setIsDragging(false);
    handleFiles(event.dataTransfer.files);
  }

  if (videoUrl) {
    return (
      <div className={styles.zone}>
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video className={styles.video} src={videoUrl} controls />
      </div>
    );
  }

  return (
    <div
      className={`${styles.zone} ${isDragging ? styles.dragging : ""}`}
      onDragOver={(event) => {
        event.preventDefault();
        setIsDragging(true);
      }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={handleDrop}
      role="button"
      tabIndex={0}
      onClick={() => inputRef.current?.click()}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") inputRef.current?.click();
      }}
    >
      <span className={styles.icon} aria-hidden="true">▶</span>
      <p className={styles.label}>Glisse une vidéo ici</p>
      <p className={styles.sublabel}>ou clique pour choisir un fichier</p>
      <input
        ref={inputRef}
        type="file"
        accept="video/*"
        className={styles.input}
        onChange={(event) => handleFiles(event.target.files)}
      />
    </div>
  );
}
