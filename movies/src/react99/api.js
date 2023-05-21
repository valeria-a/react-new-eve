import axios from "axios"

export const getQuote = async (api_type) => {
    let res = null;
    switch (api_type) {
        case 'quotable':
            res = await axios.get('https://api.quotable.io/random')
            return res.data.content
        case 'chuck':
            res = await axios.get('https://api.chucknorris.io/jokes/random')
            return res.data.value
        case 'kanye':
            res = await axios.get('https://api.kanye.rest')
            return res.data.quote
        case 'none':
            return null
    }
}