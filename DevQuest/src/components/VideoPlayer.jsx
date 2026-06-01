/**
 * VideoPlayer — Google Drive
 *
 * Props:
 *  - driveFileId  : string  — ID do arquivo no Google Drive
 *                             Ex: "1A2B3C4D5E6F..." (da URL pública do Drive)
 *  - title        : string  — Legenda exibida abaixo do vídeo (opcional)
 *
 * Como obter o driveFileId:
 *  1. Abra o vídeo no Google Drive
 *  2. Clique em "Compartilhar" → "Copiar link"
 *  3. O link será: https://drive.google.com/file/d/AQUI_ESTA_O_ID/view
 *  4. Copie apenas a parte entre /d/ e /view
 */
function getEmbedUrl({ driveFileId, videoId }) {
  if (driveFileId) {
    return `https://drive.google.com/file/d/${driveFileId}/preview`;
  }

  if (!videoId) {
    return null;
  }

  if (videoId.startsWith("drive:")) {
    return `https://drive.google.com/file/d/${videoId.replace("drive:", "")}/preview`;
  }

  if (videoId.includes("drive.google.com")) {
    return videoId.replace("/view", "/preview").split("?")[0];
  }

  if (videoId.startsWith("http")) {
    return videoId;
  }

  return `https://www.youtube.com/embed/${videoId}`;
}

function VideoPlayer({ driveFileId, videoId, title }) {
  const embedUrl = getEmbedUrl({ driveFileId, videoId });

  if (!embedUrl) {
    return null;
  }

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
