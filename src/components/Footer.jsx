import { footerLinks } from "../constants"

const Footer = () => {
    return (
        <footer>
            <div className="info">
                <p>
                    More ways to shop:
                    <span><a href="dummyUrl">Find an Apple Store</a></span>or
                    <span><a href="dummyUrl">other retailer</a></span> near you. Or call 000800 040 1966.
                </p>
                <img src="/logo.svg" alt="Apple logo" />
            </div>
            <hr />
            <div className="links">
                <p>Copyright © 2024 Apple Inc. All rights reserved.</p>

                <ul>
                    {footerLinks.map(({link, label}) => (
                        <li key="label">
                            <a href={link}>{label}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    )
}

export default Footer
