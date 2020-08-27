import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPiedPiper } from '@fortawesome/free-brands-svg-icons'

function CartIcon() {
    return (
        <div>
            <FontAwesomeIcon icon={faPiedPiper} size="3x" color="#AAC5C7" />
        </div>
    )
}

export default CartIcon;