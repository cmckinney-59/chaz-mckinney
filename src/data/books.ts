export type Book = {
  id: string;
  title: string;
  author: string;
  /** Open Library cover URL — swap for local assets later if needed */
  coverUrl: string;
  yearRead?: number;
  notes?: string;
};

function coverFromId(coverId: number): string {
  return `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`;
}

function coverFromIsbn(isbn: string): string {
  return `https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg`;
}

export const BOOKS: Book[] = [
  {
    id: "words-of-radiance",
    title: "Words of Radiance",
    author: "Brandon Sanderson",
    coverUrl: coverFromId(14658334),
    yearRead: 2026,
  },
  {
    id: "edgedancer",
    title: "Edgedancer",
    author: "Brandon Sanderson",
    coverUrl: coverFromId(14658530),
    yearRead: 2026,
  },
  {
    id: "queen-of-scots",
    title: "Mary Queen of Scotland and the Isles",
    author: "Margaret George",
    coverUrl: coverFromId(8355282),
    yearRead: 2026,
  },
  {
    id: "old-testament-stories",
    title: "Old Testament Stories",
    author: "The Church of Jesus Christ of Latter-day Saints",
    coverUrl: coverFromId(6985988),
    yearRead: 2026,
  },
  {
    id: "the-odyssey",
    title: "The Odyssey",
    author: "Homer",
    coverUrl: coverFromId(9045853),
    yearRead: 2026,
  },
  {
    id: "learn-deseret",
    title: "Learn Deseret",
    author: "Unknown",
    // No reliable Open Library cover found yet
    coverUrl: "",
    yearRead: 2026,
  },
  {
    id: "deseret-first-book",
    title: "Deseret First Book",
    author: "University of Deseret",
    coverUrl: coverFromId(5837559),
    yearRead: 2026,
  },
  {
    id: "the-iliad",
    title: "The Iliad",
    author: "Homer",
    coverUrl: coverFromId(7083790),
    yearRead: 2026,
  },
  {
    id: "oathbringer",
    title: "Oathbringer",
    author: "Brandon Sanderson",
    coverUrl: coverFromId(14658111),
    yearRead: 2026,
  },
  {
    id: "the-little-prince",
    title: "The Little Prince",
    author: "Antoine de Saint-Exupéry",
    coverUrl: coverFromId(10708272),
    yearRead: 2026,
  },
  {
    id: "dawnshard",
    title: "Dawnshard",
    author: "Brandon Sanderson",
    coverUrl: coverFromId(11385385),
    yearRead: 2026,
  },
  {
    id: "vagabond",
    title: "Vagabond",
    author: "Takehiko Inoue",
    coverUrl: coverFromId(863044),
    yearRead: 2026,
  },
  {
    id: "book-of-five-rings",
    title: "The Book of 5 Rings",
    author: "Miyamoto Musashi",
    coverUrl: coverFromId(6621293),
    yearRead: 2026,
  },
  {
    id: "book-of-mormon-1920-a",
    title: "The Book of Mormon 1920",
    author: "Joseph Smith, Jr.",
    coverUrl: coverFromId(2977155),
    yearRead: 2026,
  },
  {
    id: "book-of-mormon-1920-b",
    title: "The Book of Mormon 1920",
    author: "Joseph Smith, Jr.",
    coverUrl: coverFromId(2977155),
    yearRead: 2026,
  },
  {
    id: "dichotomy-of-leadership",
    title: "The Dichotomy of Leadership",
    author: "Jocko Willink & Leif Babin",
    coverUrl: coverFromId(10184059),
    yearRead: 2026,
  },
  {
    id: "pauls-life-and-letters",
    title: "Paul's Life and Letters",
    author: "Sidney B. Sperry",
    coverUrl: coverFromId(14921242),
    yearRead: 2026,
  },
  {
    id: "narnia-3-dawn-treader",
    title: "The Voyage of the Dawn Treader",
    author: "C. S. Lewis",
    coverUrl: coverFromId(9184719),
    yearRead: 2026,
    notes: "Narnia 3 (publication order)",
  },
  {
    id: "the-alchemist",
    title: "The Alchemist",
    author: "Paulo Coelho",
    coverUrl: coverFromIsbn("9780061122415"),
    yearRead: 2026,
  },
  {
    id: "the-four-agreements",
    title: "The Four Agreements",
    author: "Don Miguel Ruiz",
    coverUrl: coverFromId(924521),
    yearRead: 2026,
  },
  {
    id: "total-money-makeover",
    title: "Total Money Makeover",
    author: "Dave Ramsey",
    coverUrl: coverFromId(7282912),
    yearRead: 2026,
  },
  {
    id: "rich-dad-poor-dad",
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    coverUrl: coverFromId(8315603),
    yearRead: 2026,
  },
  {
    id: "mentally-ill-mentor",
    title: "The Mentally Ill Mentor",
    author: "David Grant Miller",
    coverUrl: coverFromId(1769510),
    yearRead: 2026,
  },
  {
    id: "dune-messiah",
    title: "Dune Messiah",
    author: "Frank Herbert",
    coverUrl: coverFromId(980253),
    yearRead: 2026,
  },
  {
    id: "horse-and-his-boy",
    title: "The Chronicles of Narnia: The Horse and His Boy",
    author: "C. S. Lewis",
    coverUrl: coverFromId(9184792),
    yearRead: 2026,
  },
  {
    id: "introduction-to-baybayin",
    title: "An Introduction to Baybayin",
    author: "Christian Cabuay",
    coverUrl: "",
    yearRead: 2026,
  },
  {
    id: "clean-hands-pure-heart",
    title: "Clean Hands, Pure Heart",
    author: "Philip A. Harrison",
    coverUrl: coverFromId(14451724),
    yearRead: 2026,
  },
  {
    id: "magicians-nephew",
    title: "The Chronicles of Narnia: The Magician's Nephew",
    author: "C. S. Lewis",
    coverUrl: coverFromId(1072931),
    yearRead: 2026,
  },
  {
    id: "lethbridge-history-in-pictures",
    title: "Lethbridge: A History In Pictures",
    author: "Belinda Crowson, Bobbie Fox, Lorien Johansen & George Kuhl",
    coverUrl: "",
    yearRead: 2026,
  },
  {
    id: "the-last-battle",
    title: "The Last Battle",
    author: "C. S. Lewis",
    coverUrl: coverFromId(6529226),
    yearRead: 2026,
  },
  {
    id: "the-mormon-story",
    title: "The Mormon Story",
    author: "Rulon S. Howells",
    coverUrl: coverFromId(6919848),
    yearRead: 2026,
  },
  {
    id: "children-of-dune",
    title: "Children Of Dune",
    author: "Frank Herbert",
    coverUrl: coverFromId(6976407),
    yearRead: 2026,
  },
  {
    id: "gifts-of-imperfection",
    title: "The Gifts of Imperfection",
    author: "Brené Brown",
    coverUrl: coverFromId(7237826),
    yearRead: 2026,
  },
  {
    id: "book-of-mormon",
    title: "The Book of Mormon",
    author: "Joseph Smith, Jr.",
    coverUrl: coverFromId(733401),
    yearRead: 2026,
  },
  {
    id: "god-emperor-of-dune",
    title: "God Emperor of Dune",
    author: "Frank Herbert",
    coverUrl: coverFromId(6711531),
    yearRead: 2026,
  },
  {
    id: "visions-of-glory",
    title: "Visions of Glory",
    author: "John Pontius",
    coverUrl: "",
    yearRead: 2026,
  },
  {
    id: "the-art-of-war",
    title: "The Art of War",
    author: "Sun Tzu",
    coverUrl: coverFromId(4849549),
    yearRead: 2026,
  },
  {
    id: "his-holy-name",
    title: "His Holy Name",
    author: "Dallin H. Oaks",
    coverUrl: coverFromId(13830546),
    yearRead: 2026,
  },
  {
    id: "women-and-the-priesthood",
    title: "Women and The Priesthood",
    author: "Sheri Dew",
    coverUrl: coverFromId(8941602),
    yearRead: 2026,
  },
];
