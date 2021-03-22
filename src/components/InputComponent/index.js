import React from "react";

import { Container, Label } from "./styles";
export default function InputComponent({
    type,
    label,
    placeholder,
    name,
    value,
    onChange,
    onBlur,
}) {
    return (
        <Container>
            {!!value ? <Label htmlFor={label}>{label}</Label> : ""}

            <input
                type={type}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            />
        </Container>
    );
}
