import React from 'react'

import './ImageFeaturedHoverCapition.scss'

export default function ImageHoverCapition({children, textH2, textP, price}) {
    return (
        <figure className="image-featured-hover-capition">
            {children}
            <figcaption>
                <h2 className="image-featured-hover-capition__h2">{textH2}</h2>
                <p className="image-featured-hover-capition__p">{textP}</p>
                <p className="image-featured-hover-capition__price">{price} PLN</p>
                <a href="#" className="image-featured-hover-capition__a"></a>
            </figcaption>			
        </figure>

    )
}
