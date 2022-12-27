import React from 'react';
import TrollFace from '../images/troll-face.svg'

export default function Header(){
    return(
        <div className='header'>
            <div className='header-body'>
                <img src={TrollFace} alt="Troll Face" />
                <p className='header-heading'>
                    Meme Generator
                </p>
            </div>
        </div>
    )
}


