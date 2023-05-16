import 'axios'
import axios from 'axios'
import { useState } from 'react'

const ShowButton = () => {

    const [imgUrl, setImgUrl] = useState(null)
    const [videoUrl, setVideoUrl] = useState(null)

    const clickHandler = async () => {
        const response = await axios.get('https://random.dog/woof.json')
        console.log('after response', response)
        if (response.data.url.endsWith('mp4')) {
            setVideoUrl(response.data.url)
        } else {
            setImgUrl(response.data.url)
        }
    }


    return(
        <>
            <button onClick={clickHandler}>SHOW ME A DOG</button>
            <img src={imgUrl} />
            <video src={videoUrl}/>
        </>
    )
}

export default ShowButton