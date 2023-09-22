import React, {useState} from "react";
import styles from "./contactUsForm.module.scss";
import {Button, Grid, TextField} from "@mui/material";
import {IFormValues, IInputField} from "../../types/forms";

export default function ContactUsForm(){

    const inputDataArr: Array<IInputField> = [
        {label: "First Name",
         name: "firstName",
         type: "text"},
        {label: "Last Name",
         name: "lastName",
         type: "text"},
        {label: "Email",
         name: "email",
         type: "email"},
        {label: "Phone Number",
         type: "number",
         name: "phone",
         placeholder: "380507308340"}
    ]

    const initialState:IFormValues = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: ""
    }

    const [inputValues, setInputValues] = useState<IFormValues>(initialState);
    function onChangeInput(e:React.ChangeEvent<HTMLInputElement>){
        let value = e.target.value
        let name = e.target.name
        setInputValues((prevState) => { return {...prevState, [name]: value} })
    }

    return(
        <div className={styles.wrap}>

            <form >
                <Grid container justifyContent="flex-end" spacing={5}>
                    {
                        inputDataArr.map((item) => (
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

        </div>
    )
}