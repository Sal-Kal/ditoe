import React from 'react';

export default function Main(){
    const [meme, setMeme] = React.useState({
        url: "https://i.imgflip.com/1ur9b0.jpg",
        top: "",
        bottom: ""
    })

    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    },[])

    const memeGenerator = () => {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        document.getElementsByName('top')[0].value = ""
        document.getElementsByName('bottom')[0].value = ""
        setMeme({
            url: url,
            top: "",
            bottom: ""
        })
    }

    const updateText = (event) => {
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [event.target.name]: event.target.value
            }
        })
    }

    return(
        <div className='main'>
            <div className='input-area'>
                <div>
                    <input name='top' type='text' placeholder='Top Text' onChange={updateText} value={meme.top}/>
                    <input name='bottom' type='text' placeholder='Bottom Text' onChange={updateText} value={meme.bottom}/>
                </div>
                <button onClick={memeGenerator}>Get a new meme image</button>
            </div>
            <div className='meme'>
                <p id='top-text'>{meme.top.toUpperCase()}</p>
                <img src={meme.url} alt='meme' />
                <p id='bottom-text'>{meme.bottom.toUpperCase()}</p>
            </div>
        </div>
    )
}
