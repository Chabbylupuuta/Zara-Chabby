import chapterText from "./The Birth of the Higher Bond.txt?raw";
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

function BirthOfTheHigherBond({ user, onBack, onSignOut, onNextChapter }) {
  return (
    <ChapterReader
      user={user}
      onBack={onBack}
      onSignOut={onSignOut}
      onNextChapter={onNextChapter}
      nextChapterLabel="THE LAST FRIEND"
      chapterText={chapterText}
      chapterTitle="THE BIRTH OF THE HIGHER BOND"
      chapterNumber={8}
      bookLabel="Book 2"
      chapterList={bookTwoChapters}
    />
  );
}

export default BirthOfTheHigherBond;
