import React from 'react'

import './HoverFillButton.scss'

export default function HoverFillButton({children, style}) {
    return (
<button style={style} class="btn draw-border">{children}</button>
    )
}
