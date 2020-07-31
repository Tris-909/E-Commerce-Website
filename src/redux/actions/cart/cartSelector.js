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

const COLLECTION_ID_MATCH = {
    hats: 1,
    jackets: 2,
    sneakers: 3,
    womens: 4,
    mens: 5 
}

export const  selectCollection = collectionUrlParam => 
 createSelector([sections], sections => sections.find(section => section.id === COLLECTION_ID_MATCH[collectionUrlParam]))
