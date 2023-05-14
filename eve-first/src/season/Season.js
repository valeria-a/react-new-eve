import { useState } from 'react'
import './Season.css'
import { SEASONS } from '../consts'

const Season = () => {

    // const [season, setSeason] = useState('Summer')
    const [seasonIdx, setSeasonIdx] = useState(0)
    console.log('rendering Season Component', seasonIdx)
    // let num = 5;


    const handleClick = () => {
        console.log('clicked')
        setSeasonIdx(seasonIdx === 3 ? 0 : seasonIdx+1)
        // setSeason(season === 'Winter' ? 'Summer' : 'Winter')
        console.log('after setSeason', seasonIdx)
        // num = 8
        // seasonIdx = 2
    }

    return(
        <div className="bordered-div">
            {/* <h2>{season}</h2> */}
            <h2>{SEASONS[seasonIdx]}</h2>
            {/* <button onClick={() => console.log('clicked')}>Switch season</button> */}
            <button onClick={handleClick}>Next season</button>
        </div>
    )

}

export default Season;