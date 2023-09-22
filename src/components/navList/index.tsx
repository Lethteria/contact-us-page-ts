import React from "react";
import styles from "./navList.module.scss";
import {ILink} from "../../types/navigation";
import {clsx} from "clsx";

type NavListProps = {
    links: ILink[]
    className?: string
}

export default function NavList({links, className}:NavListProps){

    return (
        <div>
            {links.map((link) =>
                 <a href={link.href}
                    className={clsx(styles.link, className)}
                    key={link.text}
                 >
                     {link.text}
                 </a>
                )
            }
        </div>
    )
}