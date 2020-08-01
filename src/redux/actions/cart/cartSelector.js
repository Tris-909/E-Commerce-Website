import { createSelector } from 'reselect';

const selectCart = state => state.cart; 
const sections = state => state.shopData.shopData; 

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.itemsList
);  

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    itemsList => itemsList.reduce(
        (accumulatedQuantity, singleItem) => accumulatedQuantity + singleItem.quantities, 0
    )
)

export const getIsOpenStatus = createSelector(
    [selectCart],
    (user) => user.isOpen
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    itemsList => itemsList.reduce(
        (accumulatedTotal, singleItem) => accumulatedTotal + singleItem.quantities*singleItem.price, 0
    )
)

export const  selectCollection = collectionUrlParam => 
 createSelector([sections], sections => sections ? sections[collectionUrlParam] : null) 
