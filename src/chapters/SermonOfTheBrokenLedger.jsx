import chapterText from "./The Sermon of the Broken Ledger.txt?raw";
import ChapterReader from "./ChapterReader";

function SermonOfTheBrokenLedger({ user, onBack, onSignOut }) {
  return (
    <ChapterReader
      user={user}
      onBack={onBack}
      onSignOut={onSignOut}
      chapterText={chapterText}
      chapterTitle="THE SERMON OF THE BROKEN LEDGER"
      chapterNumber={3}
    />
  );
}

export default SermonOfTheBrokenLedger;