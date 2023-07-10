import logo from "../assets/nba-logo.png";
import appStyle from "../App.module.css";
function Header() {
  return (
    <div>
      <img src={logo} alt="logo" />
      <h1 className={appStyle.header}>
        NBA <span>Legends</span>
      </h1>
    </div>
  );
}
export default Header;
