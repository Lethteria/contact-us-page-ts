import React, {useState} from "react";
import styles from "./contactUsForm.module.scss";

import {checkboxLabels, inputData} from "../../data/formIntups";
import {Button, Grid, TextField} from "@mui/material";
import {ICheckbox, IFormValues} from "../../types/forms";
import CheckboxBlock from "../checkboxBlock";
import Modal from "../modal";

export default function ContactUsForm(){

    const [openModal, setOpenModal] = useState(false);

    const onOpenModal = () => {
        setOpenModal(true);
    };

    const onCloseModal = () => {
        setOpenModal(false);
    };


    const initialInputState:IFormValues = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: ""
    }

    let obj:ICheckbox = {}
    const initialCheckboxState: ICheckbox = checkboxLabels.reduce(
        (result, item) => {
            let key = item;
            result[key] =  false
            return result
        }
        , obj
    )

    const [inputValues, setInputValues] = useState<IFormValues>(initialInputState);

    const [isChecked, setIsChecked] = useState(initialCheckboxState);

    function onChangeInput(e:React.ChangeEvent<HTMLInputElement>){
        let value = e.target.value
        let name = e.target.name
        setInputValues((prevState) => { return {...prevState, [name]: value} })
    }

    function onChangeChecked(e: React.ChangeEvent<HTMLInputElement>){
        let target = e.target
        let key = target.value
        setIsChecked({...isChecked,
                [key]: target.checked
            }
        );
    }

    function onSubmitForm(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        onOpenModal();
    }

    return(
        <div className={styles.wrap}>

            <form onSubmit={onSubmitForm}>
                <Grid container justifyContent="flex-end" spacing={5}>
                    {
                        inputData.map((item) => (
                            <Grid item xs={12} sm={6} key={item.name}>
                                <TextField
                                    label={item.label}
                                    name={item.name}
                                    type={item.type}
                                    placeholder={item.placeholder }
                                    color="greyColor"
                                    variant = "standard"
                                    fullWidth
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    //focused
                                    className={styles.input}
                                    value={inputValues[item.name as keyof IFormValues]}
                                    onChange={onChangeInput}
                                    //{...InputFieldProps}
                                    //value={formik.values[item.name]}
                                    //onChange={formik.handleChange}
                                />
                            </Grid>
                        ))
                    }

                    <Grid item xs={12}>
                        <h4>Select Subject?</h4>
                        <CheckboxBlock labels={checkboxLabels}
                                       isChecked={isChecked}
                                       onChange={onChangeChecked}
                                       //checkedArr={formik.values.checked}
                                       //onChange = {formik.handleChange}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            label="Message"
                            type="textarea"
                            name="message"
                            placeholder="Write your message.."
                            color="greyColor"
                            variant = "standard"
                            fullWidth
                            //focused
                            value={inputValues.message}
                            onChange={onChangeInput}
                            className={styles.input}

                            //value={formik.values.message}
                            //onChange={formik.handleChange}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6} md={6} lg={5}>
                        <Button variant="contained"
                                disableElevation
                                fullWidth
                                className={styles.button}
                                type="submit"
                        >
                            Send Message
                        </Button>
                    </Grid>

                </Grid>
            </form>

            <Modal openModal={openModal}
                   onCloseModal={onCloseModal}
                   selectedValue={[inputValues, isChecked]}
            />

        </div>
    )
}