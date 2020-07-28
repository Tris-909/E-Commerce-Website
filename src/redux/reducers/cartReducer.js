import * as actionTypes from '../actions/actionTypes';

const initialState = {
    isOpen: false,
    itemsList: []
}

const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.TRIGGER_CART_MENU: 
            return {
                ...state,
                isOpen: !state.isOpen
            };
        case actionTypes.ADD_ITEM_TO_CART:
            let newItem = action.payload;
            let curItem = [...state.itemsList];
            //** INCREMENT QUANTITIES OF ITEM IF THE ADDED ITEM HAVE ALREADY INSIDED THE CART */
            for (let i = 0; i < curItem.length; i++) {
                if (curItem[i].id === newItem.id) {
                    curItem[i].quantities += 1;
                    return {
                        ...state,
                        itemsList: [...curItem]
                    }
                } else if ( (curItem[i].id !== newItem.id) && (i !== curItem.length-1) ) {
                    let newArr = [...curItem, newItem];
                    return {
                        ...state,
                        itemsList: [...newArr]
                    }
                }
            }
            return {
                ...state,
                itemsList: [...state.itemsList, newItem]
            }
        default: 
            return state;
    }
}

export default cartReducer;