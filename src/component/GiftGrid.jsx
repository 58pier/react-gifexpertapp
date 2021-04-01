import React, { useState, useEffect } from 'react'
import { GiftGridItem } from './GiftGridItem';

export const GiftGrid = ({category}) => {

    const [images, setImages] = useState([]);

    useEffect( ()=> {
        getGifs();
    },[])

    const getGifs = async() => {

        const url = 'https://api.giphy.com/v1/gifs/search?q=Rick+and+morty&limit=11&api_key=RfKcTjXXvjqnhoUja5IuXu49foFlHOOs'

        const resp = await fetch(url);
        const {data} = await resp.json();

        const gifs = data.map( img=>{
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })
        console.log(gifs)
        setImages(gifs)
    }



    return (
        <>
            <h3>{category}</h3>
                {
                    images.map( image =>
                        <GiftGridItem
                            key={image.id}
                            {...image}
                        />
                    )
                }
        </>
    )
}
