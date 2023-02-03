import { useState } from "react";
const AddCategory = ({onNewCategory}) => {

const [inputValue, setInputValue] = useState('');

const onInputChange = (event) => {
    setInputValue(event.target.value)
}

const onSubmit = (event) => {
    event.preventDefault();
    onNewCategory(inputValue)
    setInputValue('');
}

  return (
    <form onSubmit={onSubmit}>
        <input type="text" 
    placeholder="buscar gif"
    value= {inputValue}
    onChange= {onInputChange}
        />
    </form>
  )
}

export default AddCategory;