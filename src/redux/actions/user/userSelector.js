import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const settUser = createSelector(
    [selectUser],
    (user) => user.currentUser
)

