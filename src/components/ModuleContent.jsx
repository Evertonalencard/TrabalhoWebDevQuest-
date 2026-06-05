import { useEffect, useState } from "react";
import { getModuleBySlug } from "../services/moduleService";
import VideoPlayer from "./VideoPlayer";
import PDFModule from "./PDFModule";
import QuestionsModule from "./QuestionsModule";
import RatingModule from "./RatingModule";
import "../css/VideoModulo.css";

const VIDEO_PREVIEW_LIMIT = 4;

function ModuleContent({ slug, fallback }) {
  const [moduleData, setModuleData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAllVideos, setShowAllVideos] = useState(false);

  useEffect(() => {
    let active = true;

    async function loadModule() {
      setLoading(true);
      setError(null);

      try {
        const data = await getModuleBySlug(slug);

        if (active) {
          setModuleData(data);
        }
      } catch (err) {
        if (active) {
          setError(err.message);
          setModuleData(null);
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    loadModule();

    return () => {
      active = false;
    };
  }, [slug]);

  const content = moduleData ?? fallback;
  const videos = moduleData?.videos ?? fallback.videos ?? [];
  const pdfs = moduleData?.pdfMaterials ?? fallback.pdfs ?? [];
  const questions = moduleData?.questions ?? fallback.questions ?? [];
  const hasHiddenVideos = videos.length > VIDEO_PREVIEW_LIMIT;
  const visibleVideos = showAllVideos ? videos : videos.slice(0, VIDEO_PREVIEW_LIMIT);

  return (
    <section className="page-content">
      <h2>{content.title}</h2>
      <p>{content.description}</p>

      {fallback.topics?.length > 0 && (
        <ul>
          {fallback.topics.map((topic) => (
            <li key={topic}>{topic}</li>
          ))}
        </ul>
      )}

      {loading && <p>Carregando modulo...</p>}

      {error && (
        <div className="alert alert-warning" role="alert">
          Nao foi possivel carregar os dados do servidor. Exibindo conteudo
          local.
        </div>
      )}

      {videos.length > 0 && (
        <div className="video-module">
          <div className="video-module__header">
            <div>
              <h4 className="video-module__title">Aulas em vídeo</h4>
              <p className="video-module__subtitle">
                Assista aos conteúdos do módulo sem perder a organização da página.
              </p>
            </div>
            <span className="video-module__count">
              {videos.length} vídeo{videos.length > 1 ? "s" : ""}
            </span>
          </div>

          <div className={`video-grid ${visibleVideos.length === 1 ? "video-grid--1" : "video-grid--4"}`}>
            {visibleVideos.map((video) => (
              <VideoPlayer
                key={video.id ?? video.videoId ?? video.driveFileId}
                driveFileId={video.driveFileId}
                videoId={video.videoId}
                title={video.title}
              />
            ))}
          </div>

          {hasHiddenVideos && (
            <div className="video-module__footer">
              <button
                type="button"
                className="video-module__toggle"
                onClick={() => setShowAllVideos((current) => !current)}
              >
                {showAllVideos
                  ? "Mostrar menos vídeos"
                  : `Ver todos os ${videos.length} vídeos`}
              </button>
            </div>
          )}
        </div>
      )}

      <PDFModule pdfs={pdfs} />
      <QuestionsModule questions={questions} moduleKey={slug} />
      <RatingModule pageKey={slug} pageTitle={content.title} />
    </section>
  );
}

export default ModuleContent;
