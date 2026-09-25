import chapterText from "./THE FESTIVAL OF THE LAST MEN.txt?raw";
import ChapterReader from "./ChapterReader";

function FestivalOfTheLastMen({ user, onBack, onSignOut }) {
  return (
    <ChapterReader
      user={user}
      onBack={onBack}
      onSignOut={onSignOut}
      chapterText={chapterText}
      chapterTitle="OF THE FESTIVAL OF THE LAST MEN"
      chapterNumber={7}
    />
  );
}

export default FestivalOfTheLastMen;
