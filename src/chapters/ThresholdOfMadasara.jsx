import chapterText from "./The Threshold of Madasara.txt?raw";
import ChapterReader from "./ChapterReader";

function ThresholdOfMadasara({ user, onBack, onSignOut }) {
  return (
    <ChapterReader
      user={user}
      onBack={onBack}
      onSignOut={onSignOut}
      chapterText={chapterText}
      chapterTitle="THE THRESHOLD OF MADASARA"
      chapterNumber={2}
    />
  );
}

export default ThresholdOfMadasara;
