import axios from "axios";



export const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': 'a3eb8dab05msh094e62c901e6d99p129b44jsnf50fe2e5fec7',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    })

    return data
}