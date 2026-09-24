import chapterText from "./The Troubled Worker.txt?raw";
import ChapterReader from "./ChapterReader";

function TroubledWorker({ user, onBack, onSignOut }) {
  return (
    <ChapterReader
      user={user}
      onBack={onBack}
      onSignOut={onSignOut}
      chapterText={chapterText}
      chapterTitle="THE TROUBLED WORKER"
      chapterNumber={5}
    />
  );
}

export default TroubledWorker;