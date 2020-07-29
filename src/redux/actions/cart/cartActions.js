import * as actionTypes from '../actionTypes';

export const triggerCartMenu = () => ({
    type: actionTypes.TRIGGER_CART_MENU
});

export const addItem = (item) => ({
    type: actionTypes.ADD_ITEM_TO_CART,
    payload: item
});

export const removeItem = (id) => ({
    type: actionTypes.REMOVE_ITEM_FROM_CART,
    payload: id
});