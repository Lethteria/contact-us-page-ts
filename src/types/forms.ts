export interface IInputField {
    label: string,
    type: string,
    name: string,
    placeholder?: string
}

export interface ICheckbox  {
    [propName: string]: boolean
}

export interface IContactFormVal {
    firstName: string,
    lastName: string,
    email: string,
    phone: string | number,
    message: string,
    checked: Array<string>
}

export interface ISubscrFormVal {
    email: string
}

export interface IValidateVal<T> {
    form: string
    values: T
}

export interface IValidationErrors {
    firstName?: string,
    lastName?: string,
    email?: string,
    phone?: string | number,
    message?: string
}