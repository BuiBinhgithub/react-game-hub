import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'b3d77805fa004119b7b4d53bc11cab3c'
    }
})