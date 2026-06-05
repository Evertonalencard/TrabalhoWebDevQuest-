function extractYouTubeId(videoId) {
  if (!videoId) return null;

  const value = videoId.trim();

  if (/^[\w-]{11}$/.test(value)) {
    return value;
  }

  try {
    const url = new URL(value);

    if (url.hostname === "youtu.be") {
      return url.pathname.slice(1).split("/")[0];
    }

    if (url.pathname.startsWith("/embed/")) {
      return url.pathname.split("/embed/")[1].split("/")[0];
    }

    if (url.hostname.includes("studio.youtube.com") && url.pathname.startsWith("/video/")) {
      return url.pathname.split("/video/")[1].split("/")[0];
    }

    const youtubeId = url.searchParams.get("v");
    if (youtubeId) {
      return youtubeId;
    }
  } catch {
    return null;
  }

  return null;
}

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

  const youtubeId = extractYouTubeId(videoId);
  if (youtubeId) {
    return `https://www.youtube.com/embed/${youtubeId}`;
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
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      {title && <p className="video-player__title">{title}</p>}
    </div>
  );
}

export default VideoPlayer;
