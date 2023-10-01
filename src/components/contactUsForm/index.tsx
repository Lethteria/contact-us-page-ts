import React, {useState} from "react";
import styles from "./contactUsForm.module.scss";
import {checkboxLabels, inputData} from "../../data/formIntups";
import {Button, Grid, TextField} from "@mui/material";
import {IContactFormVal, IValidateVal} from "../../types/forms";
import CheckboxBlock from "../checkboxBlock";
import Modal from "../modal";
import {useFormik} from "formik";
import {FormValidate} from "../../helpFunctions/validateForm";

export default function ContactUsForm(){

    const [openModal, setOpenModal] = useState(false);

    const onOpenModal = () => {
        setOpenModal(true);
    };

    const onCloseModal = () => {
        setOpenModal(false);
        formik.resetForm()
    };


    const initialInputState: IValidateVal<IContactFormVal> = {
         form: "contactUs",
         values: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
            checked: []
        }
    }

    const validate = FormValidate(initialInputState);

    const formik = useFormik({
        initialValues: initialInputState.values,
        validate,
        onSubmit: (values) => {
            onOpenModal();
        },
    });

    return(
        <div className={styles.wrap}>

            <form onSubmit={formik.handleSubmit}>
                <Grid container justifyContent="flex-end" spacing={5}>
                    {
                        inputData.map((item) => (
                            <Grid item xs={12} sm={6} key={item.name}>
                                <TextField
                                    label={item.label}
                                    type={item.type}
                                    placeholder={item.placeholder }
                                    color="greyColor"
                                    variant = "standard"
                                    fullWidth
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    className={styles.input}
                                    {...formik.getFieldProps(item.name)}
                                    error = {formik.touched[item.name as keyof IContactFormVal]
                                        && Boolean(formik.errors[item.name as keyof IContactFormVal])
                                    }
                                    helperText={formik.touched[item.name as keyof IContactFormVal]
                                        && formik.errors[item.name as keyof IContactFormVal]
                                    }
                                />

                            </Grid>
                        ))
                    }

                    <Grid item xs={12}>
                        <h4>Select Subject?</h4>
                        <CheckboxBlock labels={checkboxLabels}
                                       checkedArr={formik.values.checked}
                                       onChange={formik.handleChange}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            label="Message"
                            type="textarea"
                            placeholder="Write your message.."
                            color="greyColor"
                            variant = "standard"
                            fullWidth
                            InputLabelProps={{
                                shrink: true,
                            }}
                            className={styles.input}
                            {...formik.getFieldProps('message')}
                            error = {formik.touched.message
                                && Boolean(formik.errors.message)
                            }
                            helperText={formik.touched.message
                                && formik.errors.message
                            }
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
                   data={formik.values}
            />

        </div>
    )
}