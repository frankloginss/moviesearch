import axios from "axios";

const getMovies = async (text: string) => {
    const baseURL = "https://www.omdbapi.com/"
    try {
        const {data, status} = await axios.get(baseURL, 
        {params: {s: text, i: 'tt3896198', apiKey: 'a3a847b3'}}
        );
        // console.log("data =>", data)
        if (status !== 200) {
            throw data.message;
        } else {
            return data
        }
        
    } catch (error) {
        console.log("error => ", error);
    }
}

export default getMovies