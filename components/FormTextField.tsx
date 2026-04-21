import { FieldError, Input, Label, TextField } from '@heroui/react'
import React from 'react'

interface Props {
    placeholder: string;
    label: string;
    name: string;
    type: 'email' | 'text' | 'tel' | 'number';
    required?: boolean;
}

export const FormTextField = ({ placeholder, label, name, type, required }: Props) => {
    return (
        <TextField name={name} type={type} className='w-[49%]'>
            <Label>{label}</Label>
            <Input placeholder={placeholder} variant="secondary" required={required} min={0} />
            <FieldError />
        </TextField>
    )
}
