import { FaBook, FaCalendar, FaClock, FaInbox, FaRegQuestionCircle, FaTachometerAlt, FaTv, FaRegUserCircle } from "react-icons/fa";
import { TbLetterN } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";
import "./index.css"

function KanbasNavigation() {
  const links = [
    {label: "Account", icon: <FaRegUserCircle style={{"color": "white"}} className="fs-2" /> },
    {label: "Dashboard", icon: <FaTachometerAlt className="fs-2" /> },
    {label: "Courses", icon: <FaBook className="fs-2" /> },
    {label: "Calendar", icon: <FaCalendar className="fs-2" /> },
    {label: "Inbox", icon: <FaInbox className="fs-2" /> },
    {label: "History", icon: <FaClock className="fs-2" /> },
    {label: "Studio", icon: <FaTv className="fs-2" /> },
    {label: "Help", icon: <FaRegQuestionCircle className="fs-2"/> }
  ];
  const { pathname } = useLocation();
  return (
    <ul className="wd-kanbas-navigation">
      <li><Link to="https://www.northeastern.edu">
        <TbLetterN className="fs-2" /></Link></li>
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
          <Link to={`/Kanbas/${link.label}`}> {link.icon} {link.label} </Link>
        </li>
      ))}
    </ul>
  );
}
export default KanbasNavigation;