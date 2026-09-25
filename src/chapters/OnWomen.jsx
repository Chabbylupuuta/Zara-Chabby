import chapterText from "./On Women.txt?raw";
import ChapterReader from "./ChapterReader";

function OnWomen({ user, onBack, onSignOut }) {
  return (
    <ChapterReader
      user={user}
      onBack={onBack}
      onSignOut={onSignOut}
      chapterText={chapterText}
      chapterTitle="OF WOMEN"
      chapterNumber={6}
    />
  );
}

export default OnWomen;
