import './footer.scss'
import logoMark from '../../assets/bios_logo.png'

function Footer () {
    return (
        <footer className="footer">
            <div className="footer__main">
                <div className="footer__main__logo">
                    <img className='logo-mark' src={logoMark} alt="BIO-S Community Logo" />
                    <span className="logo-type">BIO-S Community</span>
                </div>
                <div className="footer__main__links">
                    <div className="footer__main__links__column">
                        <p className="footer__main__links__column--title">Connect</p>
                        <ul className="footer__main__links__column--list">
                            <li className="footer__main__links__column--list__link"><a href="https://discord.gg/ZQGRW6uCXA">Discord</a></li>
                            <li className="footer__main__links__column--list__link"><a href="https://twitter.com/bios_twt">Twitter</a></li>
                            <li className="footer__main__links__column--list__link"><a href="https://github.com/bios-community">GitHub</a></li>
                        </ul>
                    </div>
                    <div className="footer__main__links__column">
                        <p className="footer__main__links__column--title">Contact Us</p>
                        <ul className="footer__main__links__column--list">
                            <li className="footer__main__links__column--list__link"><a href="bachelorsinopensource@gmail.com">Email</a></li>
                            <li className="footer__main__links__column--list__link"><a href="dubeyadarshmain@gmail.com">Adarsh</a></li>
                            <li className="footer__main__links__column--list__link"><a href="pranavprajapati586@gmail.com">Pranav</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">This website is 100% open-source. <a rel="noreferrer" target="_blank" href="https://github.com/bios-community/team">See on GitHub</a>.</div>
        </footer>
    )
}

export default Footer