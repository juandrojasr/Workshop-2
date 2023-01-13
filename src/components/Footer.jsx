import React from 'react'
import image1 from "../assets/images/icon-facebook.svg"
import image2 from "../assets/images/icon-instagram.svg"
import image3 from "../assets/images/icon-twitter.svg"
import image4 from "../assets/images/icon-pinterest.svg"
import "../styles/footer.scss"

const navegacion = [{
    id: 1,
    content: "About",
},
{
    id: 2,
    content: "Careers",
},
{
    id: 3,
    content: "Events",
},
{
    id: 4,
    content: "Products",
},
{
    id: 5,
    content: "Support",
},
]

const Footer = () => {
    return (
        <footer>
            <div className='mainFooter'>

                <div className='footer1'>
                    <h2>loopstudios</h2>
                    <span className='iconos'>
                        <img src={image1} alt="facebook.icon" />
                        <img src={image2} alt="instagram-icon" />
                        <img src={image3} alt="twitter-icon" />
                        <img src={image4} alt="pinterest-icon" />
                    </span>
                </div>
                <div className='footer2'>
                <nav>
                        <ul className='lista'>
                            {navegacion.map(({ id, content }) => <li key={id}>{content}</li>)}
                        </ul>
                    </nav>
                    
                    <p>2021 Loopstudios, All rights reserved</p>
                </div>

            </div>
        </footer>
    )
}

export default Footer