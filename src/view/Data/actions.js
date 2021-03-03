import axios from 'axios'

export const GET_DATA_SUMMARY = () => {
    return {
        type: 'GET_DATA_SUMMARY',
        payload: new Promise ((resolve, reject) => {
            axios.get('https://api.covid19api.com/summary').then((response) => {
                resolve(response.data)
            }).catch((err) => {
                reject(err)
            })
        })
    }
}