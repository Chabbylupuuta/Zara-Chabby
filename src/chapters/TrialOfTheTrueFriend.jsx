import chapterText from "./The Trial of the True Friend.txt?raw";
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

function TrialOfTheTrueFriend({ user, onBack, onSignOut, onNextChapter }) {
  return (
    <ChapterReader
      user={user}
      onBack={onBack}
      onSignOut={onSignOut}
      onNextChapter={onNextChapter}
      nextChapterLabel="THE BIRTH OF THE HIGHER BOND"
      chapterText={chapterText}
      chapterTitle="THE TRIAL OF THE TRUE FRIEND"
      chapterNumber={7}
      bookLabel="Book 2"
      chapterList={bookTwoChapters}
    />
  );
}

export default TrialOfTheTrueFriend;
