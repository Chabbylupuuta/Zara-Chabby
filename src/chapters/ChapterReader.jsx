import { useEffect, useState } from "react";

const bookOneChapterList = [
  "ZARACHABBY'S DOWNGOING",
  "OF THE THRESHOLD OF MADASARA",
  "THE SERMON OF THE BROKEN LEDGER",
  "OF THE TIGHTROPE WALKER'S SHADOW",
  "THE TROUBLED WORKER",
  "OF WOMEN",
  "OF THE FESTIVAL OF THE LAST MEN",
];

function ChapterReader({
  user,
  onBack,
  onSignOut,
  chapterText,
  chapterTitle,
  chapterNumber,
  bookLabel = "Book 1",
  chapterList = bookOneChapterList,
  onNextChapter,
  nextChapterLabel,
}) {
  const [pageIndex, setPageIndex] = useState(0);
  const [pageDirection, setPageDirection] = useState("next");
  const [readerFontSize, setReaderFontSize] = useState(20);
  const paragraphs = chapterText
    .split(/\r?\n+/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
  const pages = [];
  let currentPage = [];
  let currentPageLength = 0;
  paragraphs.forEach((paragraph) => {
    if (currentPage.length && currentPageLength + paragraph.length > 2800) {
      pages.push(currentPage);
      currentPage = [];
      currentPageLength = 0;
    }
    currentPage.push(paragraph);
    currentPageLength += paragraph.length;
  });
  if (currentPage.length) pages.push(currentPage);
  const progress = Math.round(((pageIndex + 1) / pages.length) * 100);
  const currentPageParagraphs = pages[pageIndex] || [];

  const changePage = (nextIndex) => {
    if (nextIndex < 0 || nextIndex >= pages.length) return;
    setPageDirection(nextIndex > pageIndex ? "next" : "previous");
    setPageIndex(nextIndex);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.altKey || event.ctrlKey || event.metaKey) return;
      if (["INPUT", "TEXTAREA", "SELECT"].includes(event.target.tagName)) return;
      if (event.key === "ArrowLeft") {
        goToPage(event, pageIndex - 1);
      } else if (event.key === "ArrowRight") {
        goToPage(event, pageIndex + 1);
      }
    };

    const goToPage = (event, nextIndex) => {
      if (nextIndex < 0 || nextIndex >= pages.length) return;
      event.preventDefault();
      setPageDirection(nextIndex > pageIndex ? "next" : "previous");
      setPageIndex(nextIndex);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [pageIndex, pages.length]);

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
          <span>{bookLabel} / {chapterTitle}</span>
          <span>{progress}% read</span>
        </div>
        <progress className="chapter-progress" value={progress} max="100">{progress}%</progress>
      </div>

      <div className="chapter-layout">
        <aside className="chapter-sidebar" aria-label={`${bookLabel} chapters`}>
          <p className="eyebrow">{bookLabel}</p>
          <h2>{chapterTitle}</h2>
          <ol>
            {chapterList.map((chapter, index) => {
              const isCurrent = index === chapterNumber - 1;
              const isAvailable =
                bookLabel === "Book 2" ? index < 9 : bookLabel === "Book 3" ? index < 8 : index < 7;
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
            <p className="chapter-kicker">{bookLabel} / Chapter {chapterNumber} / Page {pageIndex + 1}</p>
            <h1>{chapterTitle}</h1>
            <p className="chapter-deck">A descent into the world below, where certainty begins to crack.</p>
            <div className="reader-type-controls" role="group" aria-label="Reading text size">
              <button
                type="button"
                aria-label="Decrease text size"
                onClick={() => setReaderFontSize((size) => Math.max(16, size - 2))}
                disabled={readerFontSize === 16}
              >
                A−
              </button>
              <span aria-live="polite">{readerFontSize}px</span>
              <button
                type="button"
                aria-label="Increase text size"
                onClick={() => setReaderFontSize((size) => Math.min(28, size + 2))}
                disabled={readerFontSize === 28}
              >
                A+
              </button>
            </div>
            <div className="chapter-rule" aria-hidden="true" />
          </header>

          <div className="chapter-manuscript" style={{ "--reader-font-size": `${readerFontSize}px` }}>
            {currentPageParagraphs.map((paragraph, index) => (
              <p className={index === 0 ? "chapter-lead" : ""} key={`${pageIndex}-${index}`}>
                {paragraph}
              </p>
            ))}
          </div>

          <footer className="chapter-footer">
            <button type="button" onClick={() => changePage(pageIndex - 1)} disabled={pageIndex === 0} aria-keyshortcuts="ArrowLeft">
              <span aria-hidden="true">&#8592;</span> Previous page
            </button>
            <span>{progress}% · Page {pageIndex + 1} of {pages.length}</span>
            <button type="button" onClick={() => changePage(pageIndex + 1)} disabled={pageIndex === pages.length - 1} aria-keyshortcuts="ArrowRight">
              Next page <span aria-hidden="true">&#8594;</span>
            </button>
          </footer>

          {pageIndex === pages.length - 1 && onNextChapter && (
            <div className="chapter-next-step">
              <button type="button" className="primary-book-button" onClick={onNextChapter}>
                Continue to next chapter: {nextChapterLabel || "Next chapter"}
                <span aria-hidden="true"> &#8594;</span>
              </button>
            </div>
          )}
        </article>
      </div>

      <footer className="site-footer chapter-site-footer">
        <span>Thus spoke Zara Chabby</span>
        <span>{bookLabel} / {chapterTitle}</span>
        <button type="button" onClick={onBack}>Back to contents &#8593;</button>
      </footer>
    </main>
  );
}

export default ChapterReader;
