import chapterText from "./Down going.txt?raw";
import ChapterReader from "./ChapterReader";

function DownGoing({ user, onBack, onSignOut }) {
  return (
    <ChapterReader
      user={user}
      onBack={onBack}
      onSignOut={onSignOut}
      chapterText={chapterText}
      chapterTitle="THE DOWN GOING"
      chapterNumber={1}
    />
  );
}

export default DownGoing;
