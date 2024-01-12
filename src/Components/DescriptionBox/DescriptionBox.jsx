import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>

            </div>
            <div className="descriptionbox-description">
                <p>A static ecommerce site displays the same content to all users
                    and doesn't change unless the developer manually updates it. On
                    the other hand, a dynamic ecommerce site uses databases and
                    server-side scripting to display real-time product information,
                    process transactions, and personalize content for users.</p>
                <p>
                    A static ecommerce site displays the same content to all users
                    and doesn't change unless the developer manually updates it. On
                    the other hand, a dynamic ecommerce site uses databases and
                    server-side scripting to display real-time product information,
                    process transactions, and personalize content for users.
                </p>
            </div>
        </div>
    )
}

export default DescriptionBox
