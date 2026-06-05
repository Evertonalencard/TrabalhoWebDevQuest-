import { useState } from "react";
import "../css/PDFModule.css";

const PDF_PREVIEW_LIMIT = 5;

function PDFModule({ pdfs = [] }) {
  const [downloading, setDownloading] = useState({});
  const [showAllPdfs, setShowAllPdfs] = useState(false);

  async function handleDownload(pdf) {
    setDownloading((prev) => ({ ...prev, [pdf.id]: true }));
    try {
      const response = await fetch(pdf.url);
      const blob = await response.blob();
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = pdf.filename || "material.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(a.href);
    } catch {
      alert("Erro ao baixar o arquivo. Tente novamente.");
    } finally {
      setDownloading((prev) => ({ ...prev, [pdf.id]: false }));
    }
  }

  if (!pdfs.length) return null;

  const hasHiddenPdfs = pdfs.length > PDF_PREVIEW_LIMIT;
  const visiblePdfs = showAllPdfs ? pdfs : pdfs.slice(0, PDF_PREVIEW_LIMIT);

  return (
    <div className="pdf-module">
      <div className="pdf-module__header">
        <div>
          <h4 className="pdf-module__title">Materiais do módulo</h4>
          <p className="pdf-module__subtitle">
            Slides e PDFs de apoio organizados para consulta e download.
          </p>
        </div>
        <span className="pdf-module__count">
          {pdfs.length} PDF{pdfs.length > 1 ? "s" : ""}
        </span>
      </div>

      <ul className="pdf-module__list">
        {visiblePdfs.map((pdf) => (
          <li key={pdf.id} className="pdf-module__item">
            <div className="pdf-module__item-info">
              <span className="pdf-module__item-icon" aria-hidden="true">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7z" />
                  <path d="M14 2v5h5" />
                  <path d="M9 13h6" />
                  <path d="M9 17h4" />
                </svg>
              </span>
              <div className="pdf-module__item-text">
                <span className="pdf-module__item-name">{pdf.name}</span>
                {pdf.description && (
                  <span className="pdf-module__item-desc">{pdf.description}</span>
                )}
              </div>
            </div>
            <button
              type="button"
              className="pdf-module__download-btn"
              onClick={() => handleDownload(pdf)}
              disabled={downloading[pdf.id]}
              aria-label={`Baixar ${pdf.name}`}
            >
              {downloading[pdf.id] ? (
                <span className="pdf-module__spinner" aria-hidden="true" />
              ) : (
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  aria-hidden="true"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              )}
              {downloading[pdf.id] ? "Baixando..." : "Baixar PDF"}
            </button>
          </li>
        ))}
      </ul>

      {hasHiddenPdfs && (
        <div className="pdf-module__footer">
          <button
            type="button"
            className="pdf-module__toggle"
            onClick={() => setShowAllPdfs((current) => !current)}
          >
            {showAllPdfs ? "Mostrar menos PDFs" : `Ver todos os ${pdfs.length} PDFs`}
          </button>
        </div>
      )}
    </div>
  );
}

export default PDFModule;
