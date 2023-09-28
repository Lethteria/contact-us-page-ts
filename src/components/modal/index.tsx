import React from "react";
import styles from "./modal.module.scss";
import Dialog from '@mui/material/Dialog';
import {Alert} from "@mui/material";
import {ICheckbox, IFormValues} from "../../types/forms";

type ModalProps = {
    openModal: boolean;
    selectedValue: [IFormValues, ICheckbox];
    onCloseModal: () => void;
}


export default function Modal(props: ModalProps){
    const {onCloseModal, openModal, selectedValue} = props;
    console.log(selectedValue)

    return (
        <Dialog onClose={onCloseModal}
                open={openModal}
        >
            {/*<Alert onClose={onCloseModal}>
                Your data was send
            </Alert>*/}

            <div className={styles.wrap}>

                {/*Object.entries(userData).map( (item,index) => (
                        item[1].length ? <p key={index}> {item[0]} : {item[1]}</p> : null
                    )
                )*/}
                :)
            </div>

        </Dialog>
    )
}