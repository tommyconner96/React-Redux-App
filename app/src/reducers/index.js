import {
    FETCHING_CAT_START,
    FETCHING_CAT_SUCCESS,
    FETCHING_CAT_FAIL
  } from '../actions'

  const initialState = {
    cat: null,
    isFetching: false,
    error: ''
  }

  export const catReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCHING_CAT_START:
        return {
          ...state,
          isFetching: true
        }
      case FETCHING_CAT_SUCCESS:
        return {
          ...state,
          isFetching: false,
          cat: action.payload
        }
      case FETCHING_CAT_FAIL:
        return {
          ...state,
          isFetching: false,
          error: 'THere was an error'
        }
      default:
        return state
    }
  }
  