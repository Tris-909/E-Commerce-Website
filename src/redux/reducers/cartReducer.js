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
                } else if ( (curItem[i].id !== newItem.id) && (i === curItem.length-1) ) {
                    return {
                        ...state,
                        itemsList: [...curItem, newItem]
                    }
                }
            }
            return {
                ...state,
                itemsList: [...state.itemsList, newItem]
            }
        case actionTypes.REMOVE_ITEM_FROM_CART: 
            let curListItem = [...state.itemsList];
            let removeIndex = curListItem.findIndex(item => item.id === action.payload);
            curListItem.splice(removeIndex, 1);
            return {
                ...state,
                itemsList: curListItem
            }
        case actionTypes.INCREASE_ITEM_QUANTITY:
            let currentListItem = [...state.itemsList];
            let index = currentListItem.findIndex(item => item.id === action.payload);
            currentListItem[index].quantities++;
            return {
                ...state,
                itemsList: currentListItem
            }
        case actionTypes.DECREMENT_ITEM_QUANTITY:
            let currentListItemDecre = [...state.itemsList];
            let DecreIndex = currentListItemDecre.findIndex(item => item.id === action.payload);
            if (currentListItemDecre[DecreIndex].quantities > 0) {
                currentListItemDecre[DecreIndex].quantities--;
            } 
            return {
                ...state,
                itemsList: currentListItemDecre
            }
        default: 
            return state;
    }
}

export default cartReducer;