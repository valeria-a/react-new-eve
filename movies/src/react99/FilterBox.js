import { useState } from "react"

const FilterBox = ({api, onApiChange, seconds, onSecondsChange}) => {

    return(
        <>
            <select value={api}
                onChange={(e) => onApiChange(e.target.value)}>
                <option disabled value={'none'}>---SELECT---</option>
                <option value='quotable'>Quotable</option>
                <option value='chuck'>Chuck Norris</option>
                <option value='kanye'>Kanye Rest</option>
            </select>

            <input type="number" value={seconds}
                onChange={(e) => onSecondsChange(e.target.value)}/>
        </>
    )
}

export default FilterBox