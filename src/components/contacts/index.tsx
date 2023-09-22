import React from "react";
import styles from "./contacts.module.scss";
import { clsx } from 'clsx';

import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';
import RoomIcon from '@mui/icons-material/Room';


import ContactItem from "../contactItem";
import {IContacts} from "../../types/contacts";

type ContactsProps = {
    className?: string
    itemClassName?: string
}

export default function Contacts({className, itemClassName}: ContactsProps){

    let contactsData: IContacts[] = [
            {href: "tel:+10123456789",
             text: "+1012 3456 789",
             icon: <PhoneInTalkIcon/>
            },
            {href: "mailto:demo@gmail.comil",
             text: "demo@gmail.comil",
             icon: <EmailIcon/>
            },
            {href: "https://goo.gl/maps/D6L8e9qUUHUaG1fS8",
             text: "132 Dartmouth Street Boston, Massachusetts 02156 United States",
             icon: <RoomIcon/>
            }
        ]
    const contactList = contactsData.map((item) =>
        <ContactItem itemClassName={itemClassName}
                     contact={item}
                     key={item.text}
        />
    )

    return(
        <div className={clsx(styles.wrap, className)}>
            {contactList}
        </div>
    )
}