import "./Header.css";
import zerodhaLogo from "./zerodha-kite-logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="wrapper">
        <div className="header-right menu-closed">
          <a href="/dashboard" className="logo">
            <img src={zerodhaLogo} alt="Logo" />
          </a>
          <div className="mobile-page-title">P&amp;L</div>
          <a href="#" className="toggle-mobile-menu">
            <div id="nav-icon4">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </a>
          <nav className="app-nav hide-on-mobile">
            <a href="/dashboard" className="">
              <span>Dashboard</span>
            </a>
            <a href="" className="dropdown-label portfolio-label">
              <span className="portfolio-id">Portfolio</span>
            </a>
            <a href="" className="dropdown-label reports-label router-link-active">
              <span className="reports-id">Reports</span>
            </a>
            <a href="" className="dropdown-label funds-label">
              <span className="funds-id">Funds</span>
            </a>
            <a href="/account" className="">
              <span>Account</span>
            </a>
          </nav>
          <div className="right-nav hide-on-mobile">
            <div className="user-nav perspective">
              <a href="" className="dropdown-label user-id">
                <div id="avatar-17" className="profile-avatar">
                  <div
                    className="avatar"
                    style={{
                      width: "25px",
                      height: "25px",
                      borderRadius: "50%",
                      textAlign: "center",
                      verticalAlign: "middle",
                      backgroundColor: "rgba(232, 30, 99, 0.1)",
                      fontSize: "9px",
                      fontWeight: 300,
                      color: "rgb(232, 30, 99)",
                      lineHeight: "26px",
                    }}
                  >
                    <span>MB</span>
                  </div>
                </div>
                <span id="userDetails" name="Manoj">
                  TJY261
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
