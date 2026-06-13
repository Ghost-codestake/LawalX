import { Link } from "react-router-dom";
import logo from "../../assets/images/LawalX_logo.png";

/**
 * Brand wordmark + glyph, links home.
 */
export default function Logo({ onClick }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      className="flex items-center gap-3"
      aria-label="Nebufy home"
    >
     <img src={logo} alt="Nebufy logo" className="h-9 w-auto" />
    </Link>
  );
}
