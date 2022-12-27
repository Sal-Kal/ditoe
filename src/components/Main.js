import React from 'react';
import MemeData from './memeData.js'

export default function Main(){
    const [memeImage, setMemeImage] = React.useState(MemeData.data.memes[2].url)
    const [topText, setTopText] = React.useState("")
    const [bottomText, setBottomText] = React.useState("")

    const memeGenerator = () => {
        const memesArray = MemeData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
        document.getElementById('upper').value = ""
        document.getElementById('downer').value = ""
        setTopText("")
        setBottomText("")
    }

    const updateTop = () => {
        const text = document.getElementById('upper').value.toUpperCase()
        setTopText(text)
    }

    const updateBottom = () => {
        const text = document.getElementById('downer').value.toUpperCase()
        setBottomText(text)
    }
    return(
        <div className='main'>
            <div className='input-area'>
                <div>
                    <input id='upper' type='text' placeholder='Top Text' onChange={updateTop}/>
                    <input id='downer' type='text' placeholder='Bottom Text' onChange={updateBottom}/>
                </div>
                <button onClick={memeGenerator}>Get a new meme image</button>
            </div>
            <div className='meme'>
                <p id='top-text'>{topText}</p>
                <img src={memeImage} alt='meme' />
                <p id='bottom-text'>{bottomText}</p>
            </div>
        </div>
    )
}
