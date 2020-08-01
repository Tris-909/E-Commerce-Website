import * as actionTypes from '../actionTypes';

export const GetShopData = (data) => ({
    type: actionTypes.RETRIEVE_SHOP_DATA,
    payload: data
});