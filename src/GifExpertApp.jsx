
import React, { useState } from 'react'
import { AddCategory } from './component/AddCategory';
import { GifGrid } from './component/GifGrid';


export const GifExpertApp = () => {

    // const categories = ['One Puch', 'Samurari','Dragon Ball']
    const [categories, setCategories] = useState([]);

    // const handleAdd = () =>{
    //     // setCategories(['HunterXHUnter', ...categories, ]);
    //     setCategories(cats => [...cats, 'HunterXHunter']);
    // }

    return (
        <>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr/>

            <ol>
                { categories.map (category =>
                    <GifGrid 
                        key={category}
                        category={category} />
                ) }
            </ol>
        </>
    )
}
