import React from "react";
import styles from "./modal.module.scss";
import Dialog from '@mui/material/Dialog';
import {Alert} from "@mui/material";
import {IContactFormVal} from "../../types/forms";

type ModalProps = {
    openModal: boolean;
    data: IContactFormVal
    onCloseModal: () => void;
}


export default function Modal(props: ModalProps){
    const {onCloseModal, openModal, data} = props;

    return (
        <Dialog onClose={onCloseModal}
                open={openModal}
        >
            {<Alert onClose={onCloseModal}>
                Your data was send
            </Alert>}

            <div className={styles.wrap}>

                {Object.entries(data).map(item =>
                    <p key={item[0]}>
                        {item[0]}: {item[1]}
                    </p>
                )}

            </div>

        </Dialog>
    )
}