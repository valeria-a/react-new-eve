const DogPicture = ({url, onImgLoaded, size='480px'}) => {
    return(
        <img src={url} style={{
            width: size, height: size,
            objectFit: 'cover',
            borderRadius: '15px'
        }}
        onLoad={onImgLoaded}/>
    )
}

export default DogPicture;