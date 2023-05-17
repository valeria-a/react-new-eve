const DogPicture = ({url, onImgLoaded}) => {
    return(
        <img src={url} style={{
            width: '480px', height: '480px',
            objectFit: 'cover',
            borderRadius: '15px'
        }}
        onLoad={onImgLoaded}/>
    )
}

export default DogPicture;