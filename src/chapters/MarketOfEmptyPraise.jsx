import chapterText from "./The Market of Empty Praise.txt?raw";
import ChapterReader from "./ChapterReader";

const bookTwoChapters = [
  "THE FRONTAL STAB (A LESSON IN FRIENDSHIP)",
  "THE MARKET OF EMPTY PRAISE",
  "THE COWARDICE OF AGREEMENT",
  "THE WEIGHT OF HONEST EYES",
  "THE BETRAYAL OF SOFT WORDS",
  "THE ENEMY WHO ELEVATES",
  "THE TRIAL OF THE TRUE FRIEND",
  "THE BIRTH OF THE HIGHER BOND",
  "THE LAST FRIEND",
];

function MarketOfEmptyPraise({ user, onBack, onSignOut, onNextChapter }) {
  return (
    <ChapterReader
      user={user}
      onBack={onBack}
      onSignOut={onSignOut}
      onNextChapter={onNextChapter}
      nextChapterLabel="THE WEIGHT OF HONEST EYES"
      chapterText={chapterText}
      chapterTitle="THE MARKET OF EMPTY PRAISE"
      chapterNumber={2}
      bookLabel="Book 2"
      chapterList={bookTwoChapters}
    />
  );
}

export default MarketOfEmptyPraise;
