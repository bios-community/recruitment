import "./header.scss";
import medalIcon from "../../assets/medal_icon.png";
import headerBanner from "../../assets/header_banner.webp";

function Header() {
  return (
    <header className="header" id="header">
      <img
        src={headerBanner}
        alt="BIO-S Team Recruitment"
        className="header__banner"
      />
      <h1 className="header__title">
        <img src={medalIcon} alt="Medal Icon" className="header__title__icon" />
        <span className="header__title__text">BIO-S Team Recruitment</span>
      </h1>
    </header>
  );
}

export default Header
