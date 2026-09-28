import chapterText from "./BONUS CHAPTER: THE SECOND DOWN-GOING.txt?raw";
import ChapterReader from "./ChapterReader";

const bookThreeChapters = [
  "OF THE CHILD IN THE CLEARING",
  "OF THE OLD WARRIOR",
  "OF THE LAST NOON",
  "OF THE VOYAGE I",
  "OF THE VOYAGE II",
  "OF THE VOYAGE III",
  "OF THE RETURNING STRANGER",
  "BONUS CHAPTER: THE SECOND DOWN-GOING",
];

function BonusSecondDownGoing({ user, onBack, onSignOut }) {
  return (
    <ChapterReader
      user={user}
      onBack={onBack}
      onSignOut={onSignOut}
      chapterText={chapterText}
      chapterTitle="BONUS CHAPTER: THE SECOND DOWN-GOING"
      chapterNumber={8}
      bookLabel="Book 3"
      chapterList={bookThreeChapters}
    />
  );
}

export default BonusSecondDownGoing;
