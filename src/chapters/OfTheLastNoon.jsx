import chapterText from "./OF THE LAST NOON.txt?raw";
import ChapterReader from "./ChapterReader";

const bookThreeChapters = [
  "OF THE CHILD IN THE CLEARING",
  "OF THE OLD WARRIOR",
  "OF THE LAST NOON",
  "OF THE VOYAGE I",
  "OF THE VOYAGE II",
  "OF THE VOYAGE III",
  "OF THE RETURNING STRANGER",
];

function OfTheLastNoon({ user, onBack, onSignOut, onNextChapter }) {
  return (
    <ChapterReader
      user={user}
      onBack={onBack}
      onSignOut={onSignOut}
      onNextChapter={onNextChapter}
      nextChapterLabel="OF THE VOYAGE I"
      chapterText={chapterText}
      chapterTitle="OF THE LAST NOON"
      chapterNumber={3}
      bookLabel="Book 3"
      chapterList={bookThreeChapters}
    />
  );
}

export default OfTheLastNoon;
