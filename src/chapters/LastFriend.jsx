import chapterText from "./ THE LAST FRIEND .txt?raw";
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

function LastFriend({ user, onBack, onSignOut, onNextChapter }) {
  return (
    <ChapterReader
      user={user}
      onBack={onBack}
      onSignOut={onSignOut}
      onNextChapter={onNextChapter}
      nextChapterLabel="THE LAST FRIEND"
      chapterText={chapterText}
      chapterTitle="THE LAST FRIEND"
      chapterNumber={9}
      bookLabel="Book 2"
      chapterList={bookTwoChapters}
    />
  );
}

export default LastFriend;
