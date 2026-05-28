import { useState } from "react";
import "../css/PDFModule.css";

function PDFModule({ pdfs = [] }) {
  const [downloading, setDownloading] = useState({});

  async function handleDownload(pdf) {
    setDownloading(prev => ({ ...prev, [pdf.id]: true }));
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
      setDownloading(prev => ({ ...prev, [pdf.id]: false }));
    }
  }

  if (!pdfs.length) return null;

  return (
    <div className="pdf-module">
      <h4 className="pdf-module__title">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="12" y1="18" x2="12" y2="12"/>
          <line x1="9" y1="15" x2="15" y2="15"/>
        </svg>
        Material para Download
      </h4>
      <ul className="pdf-module__list">
        {pdfs.map(pdf => (
          <li key={pdf.id} className="pdf-module__item">
            <div className="pdf-module__item-info">
              <span className="pdf-module__item-icon">📄</span>
              <div>
                <span className="pdf-module__item-name">{pdf.name}</span>
                {pdf.description && <span className="pdf-module__item-desc">{pdf.description}</span>}
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
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
              )}
              {downloading[pdf.id] ? "Baixando..." : "Baixar PDF"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PDFModule;
