import axios from 'axios'

export const FETCHING_CAT_START = 'FETCHING_CAT_START'
export const FETCHING_CAT_SUCCESS = 'FETCHING_CAT_SUCCESS'
export const FETCHING_CAT_FAIL = 'FETCHING_CAT_FAIL'

export const getCats = () => (dispatch) => {
    dispatch({type: FETCHING_CAT_START})
    //axios call
    axios
    .get('https://aws.random.cat/meow?ref=public-apis')
    .then(res => {
        console.log(res)
        dispatch({ type: FETCHING_CAT_SUCCESS, payload: res.data.file})
    })
    .catch(err => {
        console.log(err)
        dispatch({
            type: FETCHING_CAT_FAIL,
            payload: `${err.statusText} with response code ${err.status}`
        })
    })
}