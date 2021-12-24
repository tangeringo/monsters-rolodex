import React from "react";
import './search-field.styles.css';

export const SearchField = ({ placeholder, handleInputChange }) => {
    return(
        <input 
        className="search"
        type="search" 
        placeholder={placeholder} 
        onChange={handleInputChange}
        />
    )
}