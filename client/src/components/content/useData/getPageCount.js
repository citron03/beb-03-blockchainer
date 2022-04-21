import axios from "axios"

const getPageCount = async () => {
    const url = 'http://localhost:4000/page/count';
    const lastPage = await axios.get(url);
    return lastPage.data.data;
}

export default getPageCount;