import { useState } from "react";

const chapterList = [
  "ZARACHABBY'S DOWNGOING",
  "OF THE THRESHOLD OF MADASARA",
  "THE SERMON OF THE BROKEN LEDGER",
  "OF THE TIGHTROPE WALKER'S SHADOW",
  "THE TROUBLED WORKER",
  "OF WOMEN",
  "OF THE FESTIVAL OF THE LAST MEN",
];

function ChapterReader({ user, onBack, onSignOut, chapterText, chapterTitle, chapterNumber }) {
  const [pageIndex, setPageIndex] = useState(0);
  const [pageDirection, setPageDirection] = useState("next");
  const paragraphs = chapterText
    .split(/\r?\n+/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
  const pageSize = Math.max(1, Math.ceil(paragraphs.length / 3));
  const pages = Array.from({ length: 3 }, (_, index) => ({
    label: `Page ${index + 1}`,
    paragraphs: paragraphs.slice(index * pageSize, (index + 1) * pageSize),
  }));
  const progress = Math.round(((pageIndex + 1) / pages.length) * 100);
  const page = pages[pageIndex];

  const changePage = (nextIndex) => {
    if (nextIndex < 0 || nextIndex >= pages.length) return;
    setPageDirection(nextIndex > pageIndex ? "next" : "previous");
    setPageIndex(nextIndex);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="chapter-page">
      <nav className="chapter-nav" aria-label="Chapter navigation">
        <button type="button" className="back-button" onClick={onBack}>
          <span aria-hidden="true">&#8592;</span>
          Back to the book
        </button>
        <span className="chapter-nav-title">Thus spoke Zara Chabby</span>
        <div className="chapter-account">
          <span>{user.email}</span>
          <button type="button" className="text-button" onClick={onSignOut}>Sign out</button>
        </div>
      </nav>

      <div className="chapter-progress-wrap" aria-label={`Chapter progress: ${progress}%`}>
        <div className="chapter-progress-meta">
          <span>Book 1 / {chapterTitle}</span>
          <span>{progress}% read</span>
        </div>
        <progress className="chapter-progress" value={progress} max="100">{progress}%</progress>
      </div>

      <div className="chapter-layout">
        <aside className="chapter-sidebar" aria-label="Book 1 chapters">
          <p className="eyebrow">Book 1</p>
          <h2>ZARACHABBY'S DOWNGOING</h2>
          <ol>
            {chapterList.map((chapter, index) => {
              const isCurrent = index === chapterNumber - 1;
              const isAvailable = index < 5;
              return (
                <li className={isCurrent ? "active" : ""} key={chapter}>
                  <button type="button" disabled={!isAvailable} aria-current={isCurrent ? "page" : undefined}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {chapter}
                  </button>
                </li>
              );
            })}
          </ol>
        </aside>

        <article key={pageIndex} className={`chapter-reading page-${pageDirection}`}>
          <header className="chapter-heading">
            <p className="chapter-kicker">Book 1 / Chapter {chapterNumber} / {page.label}</p>
            <h1>{chapterTitle}</h1>
            <p className="chapter-deck">A descent into the world below, where certainty begins to crack.</p>
            <div className="chapter-rule" aria-hidden="true" />
          </header>

          <div className="chapter-manuscript">
            {page.paragraphs.map((paragraph, index) => (
              <p className={index === 0 ? "chapter-lead" : ""} key={`${pageIndex}-${index}`}>
                {paragraph}
              </p>
            ))}
          </div>

          <footer className="chapter-footer">
            <button type="button" onClick={() => changePage(pageIndex - 1)} disabled={pageIndex === 0}>
              <span aria-hidden="true">&#8592;</span> Previous page
            </button>
            <span>Page {pageIndex + 1} of {pages.length}</span>
            <button type="button" onClick={() => changePage(pageIndex + 1)} disabled={pageIndex === pages.length - 1}>
              Next page <span aria-hidden="true">&#8594;</span>
            </button>
          </footer>
        </article>
      </div>

      <footer className="site-footer chapter-site-footer">
        <span>Thus spoke Zara Chabby</span>
        <span>Book 1 / {chapterTitle}</span>
        <button type="button" onClick={onBack}>Back to contents &#8593;</button>
      </footer>
    </main>
  );
}

export default ChapterReader;
