import * as actionTypes from '../actionTypes';

import {firestore ,convertCollectionsSnapShotToMap} from '../../../firebase/firebase';

export const RetrieveShopDataStart = () => ({
    type: actionTypes.RETRIEVE_SHOP_DATA_START
});

export const RetrieveShopDataFail = (error) => ({
    type: actionTypes.RETRIEVE_SHOP_DATA_FAIL,
    payload: error
});

export const RetrieveShopDataSuccess = (data) => ({
    type: actionTypes.RETRIEVE_SHOP_DATA_SUCCESS,
    payload: data
});

export const RetrieveShopDataAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(RetrieveShopDataStart());
        collectionRef.get().then(snapshot => {
            const data = convertCollectionsSnapShotToMap(snapshot); 
            dispatch(RetrieveShopDataSuccess(data)); 
        }).catch(err => dispatch(RetrieveShopDataFail(err.message)));        
    }
};

