const initState = {
    data: [],
    isLoading: true,
    isError: false,
    message: null
}

const dataSummaryReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET_DATA_SUMMARY_PENDING':
            return {...state, message = 'Loading'}
        case 'GET_DATA_SUMMARY_FULFILLED':
            return {...state, isLoading = false, message = 'Success', data = action.payload}
        case 'GET_DATA_SUMMARY_REJECTED':
            return {...state, isLoading = false, isError = true, message = 'Error'}
            default:
            return state;
    }
}

export default dataSummaryReducer