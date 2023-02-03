import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";



const GifExpertApp = () => {

const [categories, setCategories] = useState(['el chavo']);

const onAddCategory = (newCategory) => {

    if(categories.includes(newCategory)) return;

setCategories([newCategory, ...categories])
}


return (
    <>
    <h1>Gifs App</h1>

    <AddCategory onNewCategory={onAddCategory} />

    
        {
            categories.map(category => {
                return <GifGrid key={category} category={category}/>
            })
        }
    </>
)
}

export default GifExpertApp;