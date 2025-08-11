import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "./container";
import { MainRoutes } from "@/lib/helpers";

interface SocialLinkProps {
    href: string;
    icon: React.ReactNode;
    hoverColor: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, hoverColor }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`hover:${hoverColor} transition-colors`}
    >
        {icon}
    </a>
);

interface FooterLinkProps {
    to: string;
    children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ to, children }) => {
    return (
        <li>
            <Link
                to={to}
                className="hover:underline text-gray-300 hover:text-gray-100"
            >
                {children}
            </Link>
        </li>
    );
};

export const Footer = () => {
    return (
        <footer className="w-full bg-black text-gray-300 py-12">
            <Container>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-sm md:text-base">
                    {/* First Column: Quick Links */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {MainRoutes.map((route) => (
                                <FooterLink key={route.href} to={route.href}>
                                    {route.label}
                                </FooterLink>
                            ))}
                        </ul>
                    </div>

                    {/* Second Column: About Us */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">About Us</h3>
                        <p className="leading-relaxed text-gray-400">
                           Our platform provides you with the way to practice and shine, helping you unlock your full potential with AI-powered tools.
                        </p>
                    </div>

                    {/* Third Column: Services */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Services</h3>
                        <ul className="space-y-2">
                            <FooterLink to="/generate">
                               Mock Job Interviews
                            </FooterLink>
                            <FooterLink to="/generate">
                               Personalized Feedback
                            </FooterLink>
                            <FooterLink to="/generate">
                                Industry-Specific Coaching
                            </FooterLink>
                        </ul>
                    </div>

                    {/* Fourth Column: Contact & Socials */}
                    <div>
                       
                      <h3 className="font-bold text-lg mb-4 cursor-pointer">Contact Us</h3>
                     
                       <Link to="/contact">
                        <p className="mb-4 text-gray-400">
                            Contact Us for any Query<br />
                            or Suggestions
                        </p>
                        </Link>
                        <div className="flex flex-wrap gap-4">
                            <SocialLink
                                href="https://facebook.com"
                                icon={<Facebook size={24} />}
                                hoverColor="text-blue-500"
                            />
                            <SocialLink
                                href="https://twitter.com"
                                icon={<Twitter size={24} />}
                                hoverColor="text-blue-400"
                            />
                            <SocialLink
                                href="https://instagram.com"
                                icon={<Instagram size={24} />}
                                hoverColor="text-pink-500"
                            />
                            <SocialLink
                                href="https://linkedin.com"
                                icon={<Linkedin size={24} />}
                                hoverColor="text-blue-700"
                            />
                        </div>
                    </div>
                </div>

                {/* Footer bottom bar (optional) */}
                <div className="mt-10 text-center text-xs text-gray-500">
                    © {new Date().getFullYear()} AI Interviews. All rights reserved.
                </div>
            </Container>
        </footer>
    );
};
