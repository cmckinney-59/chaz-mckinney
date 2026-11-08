import { useMemo, useState } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import {
  BOOKS,
  GENRE_LABEL,
  getBookAuthors,
  getBookGenres,
  getBookYears,
  type BookGenre,
} from "../../data/books";
import "./ReadingPage.css";

type YearFilter = "all" | number;
type GenreFilter = "all" | BookGenre;
type AuthorFilter = "all" | string;

export default function ReadingPage() {
  const [year, setYear] = useState<YearFilter>(2026);
  const [genre, setGenre] = useState<GenreFilter>("all");
  const [author, setAuthor] = useState<AuthorFilter>("all");

  const years = useMemo(() => getBookYears(), []);
  const genres = useMemo(() => getBookGenres(), []);
  const authors = useMemo(() => getBookAuthors(), []);

  const books = useMemo(() => {
    return BOOKS.filter((book) => {
      if (year !== "all" && book.yearRead !== year) return false;
      if (genre !== "all" && book.genre !== genre) return false;
      if (author !== "all" && book.author !== author) return false;
      return true;
    });
  }, [year, genre, author]);

  const hasActiveFilters =
    year !== "all" || genre !== "all" || author !== "all";

  const clearFilters = () => {
    setYear("all");
    setGenre("all");
    setAuthor("all");
  };

  return (
    <article className="reading-page">
      <header className="reading-header">
        <PageTitle title="Reading" />
        <p className="reading-lead">
          Books I&apos;ve finished — filter by year, genre, or author.
        </p>
      </header>

      <div className="reading-filters">
        <div className="reading-filter-group" role="group" aria-label="Year">
          <p className="reading-filter-label">Year</p>
          <div className="reading-filter-pills">
            <button
              type="button"
              className={`reading-filter${year === "all" ? " is-active" : ""}`}
              aria-pressed={year === "all"}
              onClick={() => setYear("all")}
            >
              All
            </button>
            {years.map((y) => (
              <button
                key={y}
                type="button"
                className={`reading-filter${year === y ? " is-active" : ""}`}
                aria-pressed={year === y}
                onClick={() => setYear(y)}
              >
                {y}
              </button>
            ))}
          </div>
        </div>

        <div className="reading-filter-group" role="group" aria-label="Genre">
          <p className="reading-filter-label">Genre</p>
          <div className="reading-filter-pills">
            <button
              type="button"
              className={`reading-filter${genre === "all" ? " is-active" : ""}`}
              aria-pressed={genre === "all"}
              onClick={() => setGenre("all")}
            >
              All
            </button>
            {genres.map((g) => (
              <button
                key={g}
                type="button"
                className={`reading-filter${genre === g ? " is-active" : ""}`}
                aria-pressed={genre === g}
                onClick={() => setGenre(g)}
              >
                {GENRE_LABEL[g]}
              </button>
            ))}
          </div>
        </div>

        <div className="reading-filter-group">
          <label className="reading-filter-label" htmlFor="reading-author">
            Author
          </label>
          <select
            id="reading-author"
            className="reading-author-select"
            value={author}
            onChange={(event) =>
              setAuthor(event.target.value as AuthorFilter)
            }
          >
            <option value="all">All authors</option>
            {authors.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="reading-results-bar">
        <p className="reading-results-count">
          {books.length} {books.length === 1 ? "book" : "books"}
        </p>
        {hasActiveFilters && (
          <button
            type="button"
            className="reading-clear-filters"
            onClick={clearFilters}
          >
            Clear filters
          </button>
        )}
      </div>

      {books.length === 0 ? (
        <p className="reading-empty">No books match these filters.</p>
      ) : (
        <ul className="reading-grid">
          {books.map((book, index) => (
            <li
              key={book.id}
              className="reading-item"
              style={{ animationDelay: `${0.04 * Math.min(index, 20)}s` }}
            >
              <div className="reading-cover-wrap">
                {book.coverUrl ? (
                  <img
                    src={book.coverUrl}
                    alt={`Cover of ${book.title}`}
                    className="reading-cover"
                    loading="lazy"
                    width={200}
                    height={300}
                  />
                ) : (
                  <div
                    className="reading-cover reading-cover--fallback"
                    aria-label={`No cover available for ${book.title}`}
                  >
                    <span>{book.title}</span>
                  </div>
                )}
              </div>
              <div className="reading-meta">
                <h2 className="reading-title">{book.title}</h2>
                <p className="reading-author">{book.author}</p>
                <p className="reading-genre">{GENRE_LABEL[book.genre]}</p>
                {book.yearRead != null && (
                  <p className="reading-year">Read {book.yearRead}</p>
                )}
                {book.notes && <p className="reading-notes">{book.notes}</p>}
              </div>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
