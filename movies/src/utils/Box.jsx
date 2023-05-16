export const Box = ({children}) => {
    return(
        <div style={{
            display: 'flex', 
            flexDirection: 'column', 
            border: '1px solid #333',
            margin: 'auto',
            maxWidth: '25em'}}>
            
            {children}

        </div>
    )
}