import React, {useState} from 'react'
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Evangelion']);

    // const handleAdd = () => {
    //     // categories.push('Evangelion')
    //     setCategories(cats => [...categories, 'Evangelion']);
    //     // console.log(categories);
    // }

    return (
        <>
            {/* <button onClick={handleAdd}>Agregar</button> */}
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />
            <ol>
                {
                    categories.map(category => (<GifGrid 
                        key={category}
                        category={ category }/>) )
                }
            </ol>
        </>
        
    )
}