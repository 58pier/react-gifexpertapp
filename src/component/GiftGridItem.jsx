import React from 'react'

export const GiftGridItem = ({id,title,url}) => {

    // console.log(id,title,url)

    return (
        <div>
            <img
                src={url}
                alt={title}
            />
            <p>{title}</p>
        </div>
    )
}
