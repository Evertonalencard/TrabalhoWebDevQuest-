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
