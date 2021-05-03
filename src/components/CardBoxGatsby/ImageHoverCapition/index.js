import React from 'react'

import './ImageHoverCapition.scss'

export default function ImageHoverCapition({children, textH2, textP, price}) {
    return (
        <figure className="image-hover-capition">
            {children}
            <figcaption>
                <h2 className="image-hover-capition__h2">{textH2}</h2>
                <p className="image-hover-capition__p">{textP}</p>
                <p className="image-hover-capition__price">{price} PLN</p>
                <a href="#" className="image-hover-capition__a"></a>
            </figcaption>			
        </figure>

    )
}
