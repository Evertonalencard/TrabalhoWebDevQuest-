/**
 * VideoPlayerYT — YouTube embed
 *
 * Props:
 *  - video : string — Aceita qualquer formato:
 *      • URL completa:  "https://www.youtube.com/watch?v=XBxXgJcd5nU&list=..."
 *      • URL curta:     "https://youtu.be/XBxXgJcd5nU"
 *      • URL de embed:  "https://www.youtube.com/embed/XBxXgJcd5nU"
 *      • Só o ID:       "XBxXgJcd5nU"
 *  - title : string — Legenda abaixo do vídeo (opcional)
 */
function extractYouTubeId(video) {
  if (!video) return null;

  // Já é só o ID (11 caracteres alfanuméricos + - _)
  if (/^[\w-]{11}$/.test(video.trim())) return video.trim();

  try {
    const url = new URL(video);

    // https://youtu.be/ID
    if (url.hostname === "youtu.be") {
      return url.pathname.slice(1).split("/")[0];
    }

    // https://www.youtube.com/embed/ID
    if (url.pathname.startsWith("/embed/")) {
      return url.pathname.split("/embed/")[1].split("/")[0];
    }

    // https://www.youtube.com/watch?v=ID&list=...
    const v = url.searchParams.get("v");
    if (v) return v;
  } catch {
    // não é uma URL válida — retorna null
  }

  return null;
}

function VideoPlayerYT({ video, title }) {
  const videoId = extractYouTubeId(video);

  if (!videoId) {
    return (
      <div className="video-player">
        <div className="video-player__wrapper video-player__wrapper--error">
          <p>ID de vídeo inválido.</p>
        </div>
        {title && <p className="video-player__title">{title}</p>}
      </div>
    );
  }

  return (
    <div className="video-player">
      <div className="video-player__wrapper">
        <iframe
          className="video-player__iframe"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title || "Vídeo da aula"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      {title && <p className="video-player__title">{title}</p>}
    </div>
  );
}

export default VideoPlayerYT;
