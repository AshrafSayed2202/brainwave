import React from "react";
import Section from "./Section";
import { socials } from "../constants";

const Footer = () => {
    return (
        <Section crosses className="!px-0 !py-10">
            <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
                <p className="caption text-n-4 lg:block">
                    &copy; {new Date().getFullYear()}. All rights reserved. <br />
                    Developed by <a href="https://www.linkedin.com/in/ashraf-sayed22" target="_blanc" rel="noreferrer" className="text-blue-500 font-semibold underline">Ashraf Sayed</a>
                </p>

                <ul className="flex gap-5 flex-wrap">
                    {socials.map((item) => (
                        <a
                            key={item.id}
                            href={item.url}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
                        >
                            <img src={item.iconUrl} width={16} height={16} alt={item.title} />
                        </a>
                    ))}
                </ul>
            </div>
        </Section>
    );
};

export default Footer;