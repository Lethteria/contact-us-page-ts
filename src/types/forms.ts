export interface IInputField {
    label: string,
    type: string,
    name: string,
    placeholder?: string
}

export interface IFormValues {
    firstName: string,
    lastName: string,
    email: string,
    phone: string | number,
    message: string
    //[propName: string]: string | number
}