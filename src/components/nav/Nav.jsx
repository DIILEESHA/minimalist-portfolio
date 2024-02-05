import "./nav.css";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav_container">
      <div className="nav_grid">
        <div className="nav logo">
          <img src="https://i.imgur.com/fYuFZ2C.png" alt="" />
        </div>
        <div className="nav_links">
          <ul className="nav_ul">
            <li className="nav_li">
              <NavLink to="/" className="linka">
                home
              </NavLink>
            </li>
            <li className="nav_li">about me</li>
            <li className="nav_li">portfolio</li>
          </ul>
        </div>
        <div className="nav_links2">
          <ul className="nav_ul_last">
            <li className="nav_li_last">contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
