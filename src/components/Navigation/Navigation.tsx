import type { JSX } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineProject,
  AiOutlineBook,
  AiOutlineMail,
  AiFillHome,
  AiFillInfoCircle,
  AiFillProject,
  AiFillBook,
  AiFillMail,
} from "react-icons/ai";

type NavigationProps = {
  isOpen: boolean;
  onNavigate?: () => void;
};

const links = [
  {
    path: "/home",
    label: "Home",
    outline: AiOutlineHome,
    filled: AiFillHome,
  },
  {
    path: "/work",
    label: "Work",
    outline: AiOutlineProject,
    filled: AiFillProject,
  },
  {
    path: "/reading",
    label: "Reading",
    outline: AiOutlineBook,
    filled: AiFillBook,
  },
  {
    path: "/about",
    label: "About",
    outline: AiOutlineInfoCircle,
    filled: AiFillInfoCircle,
  },
  {
    path: "/contact",
    label: "Contact",
    outline: AiOutlineMail,
    filled: AiFillMail,
  },
] as const;

export default function Navigation({
  isOpen,
  onNavigate,
}: NavigationProps): JSX.Element {
  const location = useLocation();

  const isActiveRoute = (path: string): boolean => {
    if (path === "/home") {
      return location.pathname === "/" || location.pathname === "/home";
    }
    if (path === "/work") {
      return location.pathname.startsWith("/work");
    }
    return location.pathname === path;
  };

  return (
    <nav
      id="app-navigation"
      className={`App-Navigation ${isOpen ? "open" : "collapsed"}`}
      aria-label="Main"
    >
      <div className="Navigation-content">
        <ul>
          {links.map(({ path, label, outline: Outline, filled: Filled }) => {
            const active = isActiveRoute(path);
            return (
              <li key={path}>
                <Link
                  to={path}
                  onClick={onNavigate}
                  title={label}
                  className={active ? "is-active" : undefined}
                  aria-current={active ? "page" : undefined}
                >
                  {active ? (
                    <Filled className="nav-icon" />
                  ) : (
                    <Outline className="nav-icon" />
                  )}
                  <span className="nav-text">{label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
