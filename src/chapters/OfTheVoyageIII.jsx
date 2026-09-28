import chapterText from "./OF THE VOYAGE III.txt?raw";
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

function OfTheVoyageIII({ user, onBack, onSignOut }) {
  return (
    <ChapterReader
      user={user}
      onBack={onBack}
      onSignOut={onSignOut}
      chapterText={chapterText}
      chapterTitle="OF THE VOYAGE III"
      chapterNumber={6}
      bookLabel="Book 3"
      chapterList={bookThreeChapters}
    />
  );
}

export default OfTheVoyageIII;
