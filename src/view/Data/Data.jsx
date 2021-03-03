import { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { GET_DATA_SUMMARY } from './actions'
// import axios from 'axios'

const Data = () => {
    // const dispatch = useDispatch()
    // const [dataSummary, setData] = useState([])
    // useEffect(() => {
    //     axios.get('https://api.covid19api.com/summary').then((response) => {
    //         // console.log(response.data.Global)
    //         setData(response.data.Countries)
    //     }).catch((err) => {
    //         console.log(err)
    //     })
    // }, [])
    // console.log(GET_DATA_SUMMARY())
    // const dataSummary = useSelector((state) => state.dataSummary)

    useEffect(() => {
        // dispatch(GET_DATA_SUMMARY())
    }, [])


    return (
        <div className='w-100 pt-5 mt-5 text-center'>
            <div style={{ height: '85vh' }}>
                <div>{
                    dataSummary.Countries.map((el, i) => (
                        <p key={i}>{[el.Country]}</p>
                    ))
                }</div>
            </div>
        </div>
    )
}

export default Data