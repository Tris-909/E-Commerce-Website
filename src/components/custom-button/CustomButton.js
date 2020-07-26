import React from 'react'
import './CustomButton.scss';

export default function CustomButton({ text, otherProps }) {
    return (
        <button type="submit" className="custom-button" {...otherProps}>
            {text}
        </button>
    )
}
