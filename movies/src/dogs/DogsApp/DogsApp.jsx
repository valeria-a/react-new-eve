import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DogPicture from '../DogPicture/DogPicture';
import { useState } from 'react';
import axios from 'axios';
import { LinearProgress } from '@mui/material';

const URL = "https://random.dog/woof.json"

const DogsApp = () => {

    const [url, setUrl] = useState(null)
    const [loading, setLoading] = useState(false)

    const getDog = async () => {
        setLoading(true)
        try {
            let response = null
            do {
                response = await axios.get(URL)
                console.log(response)
            }
            while (!(response.data.url.endsWith('jpg') ||
                response.data.url.endsWith('jpeg') ||
                response.data.url.endsWith('png')))
            
            setUrl(response.data.url)

        } catch (error) {
            console.error(error)
            setLoading(false)
        }
    }

    return( 
        <Stack spacing={2} direction="column" 
            sx={{maxWidth: '480px', margin: 'auto', marginY: "2em"}}>
            
            {loading
            ?
            <LinearProgress />
            :
            <Button variant="contained" onClick={getDog} disabled={loading}>
                SHOW ME A DOG
            </Button>
            }

            {url &&
                <DogPicture url={url} onImgLoaded={() => setLoading(false)}/>
            }

            {url && !loading &&
                <Stack spacing={2} direction="row" 
                    sx={{justifyContent: "center"}}>
                    <Button>
                        SAVE
                    </Button>
                    <Button>
                        DISCARD
                    </Button>
                </Stack>
            }
        
        </Stack>
    )
}

export default DogsApp