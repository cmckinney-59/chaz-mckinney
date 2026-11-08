import PageTitle from "../../components/PageTitle/PageTitle";
import { BOOKS } from "../../data/books";
import "./ReadingPage.css";

export default function ReadingPage() {
  return (
    <article className="reading-page">
      <header className="reading-header">
        <PageTitle title="Reading" />
        <p className="reading-lead">
          Books I&apos;ve finished — covers, authors, and the year I read them.
        </p>
      </header>

      <ul className="reading-grid">
        {BOOKS.map((book, index) => (
          <li
            key={book.id}
            className="reading-item"
            style={{ animationDelay: `${0.05 * index}s` }}
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
              {book.yearRead != null && (
                <p className="reading-year">Read {book.yearRead}</p>
              )}
              {book.notes && <p className="reading-notes">{book.notes}</p>}
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
}
