import Container from '@mui/material/Container';
import { IMG1_URL } from '../consts';
import Button from '@mui/material/Button' ;
import Box from '@mui/material/Box';

import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';

import './FunnyImgs.css'

const FunnyImgs = ({url, ...props}) => {

    // const {url} = props

    // console.log(props)
    // const {name, num} = props
    // console.log(name, num)

    console.log('Rendering FunnyImg', props.name)

    return(

        <div className='img-card'>
            <h5>{props.name}</h5>
            <img 
                className='rounded-img' 
                src={url}>
            </img>
        </div>

    )
}

export default FunnyImgs;