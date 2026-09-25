import { useState } from "react";
import DownGoing from "../chapters/DownGoing";
import ThresholdOfMadasara from "../chapters/ThresholdOfMadasara";
import SermonOfTheBrokenLedger from "../chapters/SermonOfTheBrokenLedger";
import TightropeWalkersShadow from "../chapters/TightropeWalkersShadow";
import TroubledWorker from "../chapters/TroubledWorker";
import OnWomen from "../chapters/OnWomen";
import FestivalOfTheLastMen from "../chapters/FestivalOfTheLastMen";
import FrontalStab from "../chapters/FrontalStab";
import MarketOfEmptyPraise from "../chapters/MarketOfEmptyPraise";
import WeightOfHonestEyes from "../chapters/WeightOfHonestEyes";
import EnemyWhoElevates from "../chapters/EnemyWhoElevates";

const books = [
	{
		number: "Book 1",
		
		chapters: [
			"ZARACHABBY'S DOWNGOING",
			"OF THE THRESHOLD OF MADASARA",
			"THE SERMON OF THE BROKEN LEDGER",
			"OF THE TIGHTROPE WALKER'S SHADOW",
			"THE TROUBLED WORKER",
			"OF WOMEN",
			"OF THE FESTIVAL OF THE LAST MEN",
		],
	},
	{
		number: "Book 2",
		
		chapters: [
       "THE FRONTAL STAB (A LESSON IN FRIENDSHIP)",
			"THE MARKET OF EMPTY PRAISE",
			"THE COWARDICE OF AGREEMENT",
			"THE WEIGHT OF HONEST EYES",
			"THE BETRAYAL OF SOFT WORDS",
			"THE ENEMY WHO ELEVATES",
			"THE TRIAL OF THE TRUE FRIEND",
			"THE BIRTH OF THE HIGHER BOND",
			"THE LAST FRIEND",
		],
	},
	{
		number: "Book 3",
	
		chapters: [
			"OF THE CHILD IN THE CLEARING",
			"OF THE OLD WARRIOR",
			"OF THE LAST NOON",
			"OF THE VOYAGE I",
			"OF THE VOYAGE II",
			"OF THE VOYAGE III",
			"OF THE RETURNING STRANGER",
		],
	},
];

function Home({ user, onSignOut }) {
	const [activeChapter, setActiveChapter] = useState(null);

	if (activeChapter === 1) {
		return (
			<DownGoing
				user={user}
				onBack={() => setActiveChapter(null)}
				onSignOut={onSignOut}
			/>
		);
	}

	if (activeChapter === 2) {
		return (
			<ThresholdOfMadasara
				user={user}
				onBack={() => setActiveChapter(null)}
				onSignOut={onSignOut}
			/>
		);
	}

	if (activeChapter === 3) {
		return (
			<SermonOfTheBrokenLedger
				user={user}
				onBack={() => setActiveChapter(null)}
				onSignOut={onSignOut}
			/>
		);
	}

	if (activeChapter === 4) {
		return (
			<TightropeWalkersShadow
				user={user}
				onBack={() => setActiveChapter(null)}
				onSignOut={onSignOut}
			/>
		);
	}

	if (activeChapter === 5) {
		return (
			<TroubledWorker
				user={user}
				onBack={() => setActiveChapter(null)}
				onSignOut={onSignOut}
			/>
		);
	}

	if (activeChapter === 6) {
		return (
			<OnWomen
				user={user}
				onBack={() => setActiveChapter(null)}
				onSignOut={onSignOut}
			/>
		);
	}

	if (activeChapter === 7) {
		return (
			<FestivalOfTheLastMen
				user={user}
				onBack={() => setActiveChapter(null)}
				onSignOut={onSignOut}
			/>
		);
	}

	if (activeChapter === 10) {
		return (
			<FrontalStab
				user={user}
				onBack={() => setActiveChapter(null)}
				onSignOut={onSignOut}
				onNextChapter={() => setActiveChapter(11)}
			/>
		);
	}

	if (activeChapter === 11) {
		return (
			<MarketOfEmptyPraise
				user={user}
				onBack={() => setActiveChapter(null)}
				onSignOut={onSignOut}
				onNextChapter={() => setActiveChapter(12)}
			/>
		);
	}

	if (activeChapter === 12) {
		return (
			<WeightOfHonestEyes
				user={user}
				onBack={() => setActiveChapter(null)}
				onSignOut={onSignOut}
				onNextChapter={() => setActiveChapter(13)}
			/>
		);
	}

	if (activeChapter === 13) {
		return (
			<EnemyWhoElevates
				user={user}
				onBack={() => setActiveChapter(null)}
				onSignOut={onSignOut}
				onNextChapter={() => setActiveChapter(14)}
			/>
		);
	}

	return (
		<main className="book-home">
			<nav className="book-nav" aria-label="Main navigation">
				<a className="book-logo" href="#top">
					<span className="book-logo-mark">Z</span>
					<span>Zara Chabby</span>
				</a>
				<div className="book-nav-actions">
					<a className="book-nav-link" href="#about">The book</a>
					<a className="book-nav-link" href="#chapters">Chapters</a>
					<a className="book-nav-link" href="#excerpt">Excerpt</a>
					<span className="signed-in-label">{user.email}</span>
					<button type="button" className="text-button" onClick={onSignOut}>
						Sign out
					</button>
				</div>
			</nav>

			<section className="book-hero" id="top">
				<div className="book-intro">
					<p className="eyebrow">A story by Dumbo Phatson</p>
					<h1>Thus spoke Zara Chabby</h1>
					<p className="book-lede">A book for every one and no one.</p>
					<div className="book-actions">
						<button
							type="button"
							className="primary-book-button"
							onClick={() => setActiveChapter(1)}
						>
							Enter the story <span aria-hidden="true">&#8594;</span>
						</button>
						<a className="secondary-book-button" href="#excerpt">
							Read an excerpt
						</a>
					</div>
				</div>

				<div className="book-cover" aria-label="Book cover: Thus spoke Zara Chabby">
					<span className="cover-kicker">A novel</span>
					<div className="cover-title">
						<strong>Thus spoke</strong>
						<strong>Zara Chabby</strong>
					</div>
					<span className="cover-author">Dumbo Phatson</span>
				</div>
			</section>

			<section className="book-about" id="about">
				<div className="section-index">01</div>
				<div className="book-about-copy">
					<p className="eyebrow">A foreword</p>
					<h2>A strange, beautiful beginning.</h2>
					<p className="foreword-text">
						This book was inspired by nothing beyond the strange, beautiful,
						and unforgiving thing we call life.
					</p>
					<p className="foreword-author">— Dumbo Phatson I</p>
				</div>
			</section>

			<section className="book-chapters" id="chapters">
				<div className="section-index">02</div>
				<div className="chapters-content">
					<p className="eyebrow">The table of contents</p>
					<h2>Three books. One descent into meaning.</h2>
					<div className="chapter-grid">
						{books.map((book) => (
							<article className="chapter-book" key={book.number}>
								<div className="chapter-book-heading">
									<span>{book.number}</span>
									{book.title && <h3>{book.title}</h3>}
								</div>
								<ol>
									{book.chapters.map((chapter, index) => {
										const isBookOneReadable = book.number === "Book 1" && index < 7;
										const bookTwoChapterMap = {
											"THE FRONTAL STAB (A LESSON IN FRIENDSHIP)": 10,
											"THE MARKET OF EMPTY PRAISE": 11,
											"THE WEIGHT OF HONEST EYES": 12,
											"THE ENEMY WHO ELEVATES": 13,
										};
										const chapterKey = book.number === "Book 1" ? index + 1 : bookTwoChapterMap[chapter];
										const isReadableChapter = !!chapterKey || isBookOneReadable;

										return (
											<li className={isReadableChapter ? "readable" : ""} key={chapter}>
												<button
													type="button"
													disabled={!isReadableChapter}
													onClick={() => chapterKey && setActiveChapter(chapterKey)}
												>
													{chapter}
												</button>
											</li>
										);
									})}
								</ol>
							</article>
						))}
					</div>
				</div>
			</section>

			<section className="book-excerpt" id="excerpt">
				<div className="section-index">03</div>
				<div>
					<p className="eyebrow">From the opening pages</p>
					<blockquote>
						“There are names that follow you, and names that wait for you. Zara
						heard his in the distance and turned toward it.”
					</blockquote>
					<p className="excerpt-note">More of the story is waiting inside.</p>
				</div>
			</section>

			<footer className="site-footer">
				<span>Thus spoke Zara Chabby</span>
				<span>Written by Dumbo Phatson</span>
				<a href="#top">Back to top &#8593;</a>
			</footer>
		</main>
	);
}

export default Home;
