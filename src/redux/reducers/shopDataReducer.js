import * as actionTypes from '../actions/actionTypes';

const initialState = {
    shopData: [],
    isLoading: false,
    errorMessage: null
}

const shopDataReducer = (state = initialState, action) => {
    switch(action.type) {
      case actionTypes.RETRIEVE_SHOP_DATA_START: 
        return {
          ...state,
          isLoading: true
        }
      case actionTypes.RETRIEVE_SHOP_DATA_SUCCESS:
        return {
          ...state,
          isLoading: false,
          shopData: action.payload
        }
      case actionTypes.RETRIEVE_SHOP_DATA_FAIL:
        return {
          ...state,
          isLoading: false,
          errorMessage: action.payload
        }
      default: 
        return state
    }
}

export default shopDataReducer;