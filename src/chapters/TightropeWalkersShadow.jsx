import chapterText from "./The Tightrope Walker's Shadow.txt?raw";
import ChapterReader from "./ChapterReader";

function TightropeWalkersShadow({ user, onBack, onSignOut }) {
  return (
    <ChapterReader
      user={user}
      onBack={onBack}
      onSignOut={onSignOut}
      chapterText={chapterText}
      chapterTitle="THE TIGHTROPE WALKER'S SHADOW"
      chapterNumber={4}
    />
  );
}

export default TightropeWalkersShadow;