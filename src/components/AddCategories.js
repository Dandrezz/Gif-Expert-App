import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategories = ({ setCategories }) => {
    
    const [valueInput, setvalueInput] = useState('');

    const handleInputChange = (e) => {
        setvalueInput( e.target.value );
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(valueInput.length>2){
            setCategories( cats => [  valueInput, ...cats ]  );
            setvalueInput('');
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input
                type="text"
                value={ valueInput }
                onChange={ handleInputChange }
            ></input>
        </form>
    )
}

AddCategories.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategories
