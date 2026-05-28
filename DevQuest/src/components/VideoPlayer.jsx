function VideoPlayer({ driveFileId, title }) {
  // URL de embed do Google Drive
  const embedUrl = `https://drive.google.com/file/d/${driveFileId}/preview`;

  return (
    <div className="video-player">
      <div className="video-player__wrapper">
        <iframe
          className="video-player__iframe"
          src={embedUrl}
          title={title || "Vídeo da aula"}
          allow="autoplay"
          allowFullScreen
        />
      </div>
      {title && <p className="video-player__title">{title}</p>}
    </div>
  );
}

export default VideoPlayer;
