import chapterText from "./The Betrayal of Soft Words.txt?raw";
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

function BetrayalOfSoftWords({ user, onBack, onSignOut, onNextChapter }) {
  return (
    <ChapterReader
      user={user}
      onBack={onBack}
      onSignOut={onSignOut}
      onNextChapter={onNextChapter}
      nextChapterLabel="THE ENEMY WHO ELEVATES"
      chapterText={chapterText}
      chapterTitle="The Betrayal of Soft Words"
      chapterNumber={5}
      bookLabel="Book 2"
      chapterList={bookTwoChapters}
    />
  );
}

export default BetrayalOfSoftWords;
