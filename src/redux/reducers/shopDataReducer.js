import * as actionTypes from '../actions/actionTypes';

const initialState = {
    shopData: []
}

const shopDataReducer = (state = initialState, action) => {
    switch(action.type) {
      case actionTypes.RETRIEVE_SHOP_DATA:
        return {
          ...state,
          shopData: action.payload
        }
      default: 
        return state
    }
}

export default shopDataReducer;