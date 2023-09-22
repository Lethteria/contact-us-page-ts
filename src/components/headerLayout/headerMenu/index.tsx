import React from 'react';
import styles from "./headerMenu.module.scss";
import Icon from "../../icon";
import {clsx} from "clsx";

type HeaderMenuProps = {
    className?: string
}
export default function HeaderMenu(props: HeaderMenuProps){
    return (
        <div className={clsx(styles.wrap, props.className)}>

            <a href="#" className={styles.link}>
                <Icon iconType="user"></Icon>
            </a>

            <a href="#" className={styles.link}>
                <Icon iconType="shoppingCard"></Icon>
            </a>

        </div>
    )
}