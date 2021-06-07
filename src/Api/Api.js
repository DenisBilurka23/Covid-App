import axios from './Axios'
export const getStatisticData = async () => {
    const response = await axios.get('summary')
    return response.data
}