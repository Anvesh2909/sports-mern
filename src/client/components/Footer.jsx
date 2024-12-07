import logo from "../../../public/assets/images/logo.svg";
import copyright from "../../../public/assets/icons/copyright-sign.svg";
import { footerLinks, socialMedia } from "../../constants.js"; // Add sports-specific links here

const Footer = () => {
    return (
        <footer className="bg-primary-50 text-white py-10 px-5">
            <div className="container mx-auto">
                <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
                    {/* Logo and About */}
                    <div className="flex flex-col items-start">
                        <a href="/">
                            <img
                                src={logo}
                                alt="Sports Logo"
                                width={150}
                                height={46}
                                className="m-0"
                            />
                        </a>
                        <p className="mt-6 text-base leading-7 font-montserrat text-gray-400 sm:max-w-sm">
                            Your one-stop platform for sports events, matches, and community
                            engagement. Stay updated and connected!
                        </p>
                        {/* Social Media Icons */}
                        <div className="flex items-center gap-5 mt-8">
                            {socialMedia.map((icon) => (
                                <div
                                    className="flex justify-center items-center w-12 h-12 bg-white rounded-full hover:shadow-lg transition-shadow"
                                    key={icon.alt}
                                >
                                    <a href={icon.link} target="_blank" rel="noopener noreferrer">
                                        <img src={icon.src} alt={icon.alt} width={24} height={24} />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Footer Links */}
                    <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
                        {footerLinks.map((section) => (
                            <div key={section.title}>
                                <h4 className="font-montserrat text-2xl font-medium mb-6 text-black">
                                    {section.title}
                                </h4>
                                <ul>
                                    {section.links.map((link) => (
                                        <li
                                            className="mt-3 font-montserrat text-base text-gray-400 hover:text-gray-200 transition-colors"
                                            key={link.name}
                                        >
                                            <a href={link.link}>{link.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="flex justify-between items-center mt-16 text-gray-400 text-sm flex-wrap max-sm:flex-col max-sm:items-center">
                    <div className="flex items-center gap-2 font-montserrat">
                        <img
                            src={copyright}
                            alt="Copyright sign"
                            width={20}
                            height={20}
                        />
                        <p>© {new Date().getFullYear()} Sports Platform. All rights reserved.</p>
                    </div>
                    <div className="flex gap-4 font-montserrat mt-4 max-sm:mt-2">
                        <a href="/terms" className="hover:text-gray-200 transition-colors">
                            Terms & Conditions
                        </a>
                        <a href="/privacy" className="hover:text-gray-200 transition-colors">
                            Privacy Policy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
