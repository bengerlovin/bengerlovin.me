import React from "react";

const Link = ({ target, children, href }: { target?: '_blank' | '_self'; children: React.ReactNode, href: string; }) => {
    return (
        <a target={target ? target : '_blank'} href={href} className="text-blue-800 underline hover:text-blue-400 transition-colors duration-200 ease-in-out">{children}</a>
    )
}

export default Link
