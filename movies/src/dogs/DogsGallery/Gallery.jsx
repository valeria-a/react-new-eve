import { Button, Stack } from "@mui/material"
import DogsList from "./DogsList"
import DogPicture from "../DogPicture/DogPicture"
import { useState } from "react"

var INDEX = 1

const Gallery = ({url, loading, onDiscard}) => {

    const [dogs, setDogs] = useState({})
    const [selectedId, setSelectedId] = useState(null)

    const saveHandler = () => {
        const dog = {id: INDEX ,label: `Dog ${INDEX}`, url}
        setDogs({...dogs, [INDEX]: dog})
        INDEX++
    }

    return(
        <>
        {url && !loading &&
            <Stack spacing={2} direction="row" 
                sx={{justifyContent: "center"}}>
                <Button onClick={saveHandler}>
                    SAVE
                </Button>
                <Button onClick={onDiscard}>
                    DISCARD
                </Button>
            </Stack>
        }
        <Stack direction={'row'} spacing={5}>
            <DogsList 
                dogs={dogs} 
                onDogSelected={(id) => setSelectedId(id)}/>
            {selectedId &&
                <DogPicture size="100px" url={dogs[selectedId].url} onImgLoaded={() => {}}/>
            }
        </Stack>
        </>
    )
}

export default Gallery