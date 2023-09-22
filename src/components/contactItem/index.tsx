import React from "react";
import styles from "./contactItem.module.scss";

import {clsx} from "clsx";
import {IContacts} from "../../types/contacts";


type ContactItemProps = {
    contact: IContacts
    itemClassName?: string
}

export default function ContactItem({contact, itemClassName}: ContactItemProps){

    const {text, href, icon} = contact;

    return (
        <div className={clsx(styles.wrap, itemClassName)}>
            <a href={href} target="_blank">
                {icon}
                <span className={styles.text}>
                        {text}
                </span>
            </a>
        </div>
    )
}