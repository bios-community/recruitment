import './nav.scss'
import logoMark from "../../assets/bios_logo.png"
import githubIcon from "../../assets/github_icon.svg"
import twitterIcon from "../../assets/twitter_icon.svg"
import discordIcon from "../../assets/discord_icon.svg"

function Nav () {
    return (
        <nav className="nav">
            <div className="logo">
                <img src={logoMark} alt="BIOS Community Logo" className="logo__mark" />
                <span className="logo__type">BIO-S Community</span>
            </div>
            <div className="social">
                <a href="https://github.com/bios-community" className="social__link"><img src={githubIcon} alt="GitHub Icon" className="social__link__icon" /></a>
                <a href="https://twitter.com/BIOS_twt" className="social__link"><img src={twitterIcon} alt="Twitter Icon" className="social__link__icon" /></a>
                <a href="https://discord.gg/ZQGRW6uCXA" className="social__link--diff"><img src={discordIcon} alt="Discord Icon" className="social__link__icon" /><span className="social__link--diff__text">Join Discord</span></a>
            </div>
        </nav>
    )
}

export default Nav