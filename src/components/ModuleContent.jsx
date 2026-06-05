import { useEffect, useState } from "react";
import { getModuleBySlug } from "../services/moduleService";
import VideoPlayer from "./VideoPlayer";
import PDFModule from "./PDFModule";
import QuestionsModule from "./QuestionsModule";
import RatingModule from "./RatingModule";
import "../css/VideoModulo.css";

function ModuleContent({ slug, fallback }) {
  const [moduleData, setModuleData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
        <div className={`video-grid ${videos.length === 1 ? "video-grid--1" : "video-grid--4"}`}>
          {videos.map((video) => (
            <VideoPlayer
              key={video.id ?? video.videoId ?? video.driveFileId}
              driveFileId={video.driveFileId}
              videoId={video.videoId}
              title={video.title}
            />
          ))}
        </div>
      )}

      <PDFModule pdfs={pdfs} />
      <QuestionsModule questions={questions} moduleKey={slug} />
      <RatingModule pageKey={slug} pageTitle={content.title} />
    </section>
  );
}

export default ModuleContent;
