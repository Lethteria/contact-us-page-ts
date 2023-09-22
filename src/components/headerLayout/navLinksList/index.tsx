import React from "react";
import styles from "../headerNavDesktop/HeaderNavDesktop.module.scss";
import {pages} from "../../../data/links";
import {INavLink} from "../../../types/navigation";

type NavLinksListProps = {
    className: string
    renderSubNav: (page: INavLink, index: number) => React.ReactNode
}

export default function NavLinksList({ renderSubNav, className}: NavLinksListProps){

    return (
        <ul className={className}>
            {
                pages.map((page,index) =>
                    <li key={page.text}>
                        {
                            page.subLinks
                            ? ( renderSubNav(page, index) )
                            : (
                                 <a href={page.href} >
                                     {page.text}
                                 </a>
                               )
                        }
                    </li>
                )
            }
        </ul>
    )
}