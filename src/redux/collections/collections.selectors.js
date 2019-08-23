import { createSelector } from 'reselect';

export const selectCollections = state => state.collections
/* 
export const selectItemsFromCollections = createSelector(
    [selectCollections],
    collection => collection
) */