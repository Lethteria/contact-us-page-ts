import React from "react";
import styles from "./tabletSubNav.module.scss";
import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {ILink} from "../../../types/navigation";
import NavList from "../../navList";

type TabletSubNavProps = {
    text: string
    index: number
    expanded: string | false
    onChangeExpanded: (panel:string) => (e: React.SyntheticEvent, isExpanded: boolean) => void
    onClose?: () => void
    links: ILink[]
}
export default function TabletSubNav(props:TabletSubNavProps){

    const { text, index, expanded, links,
            onChangeExpanded, onClose
          } = props

    return (
        <Accordion className={styles.submenu}
                   expanded={expanded === `panel${index}`}
                   onChange={onChangeExpanded(`panel${index}`)}
        >

            <AccordionSummary aria-controls={`panel${index}-content`}
                              id={`panel${index}-header`}
                              expandIcon={<ExpandMoreIcon />}
                              className={styles.submenuTitle}
            >
                <Typography>{text}</Typography>
            </AccordionSummary>

            <AccordionDetails className={styles.submenuLinks}>
                <NavList links={links} />
            </AccordionDetails>

        </Accordion>
    )
}