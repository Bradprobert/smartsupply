import * as types from '../constants/ActionTypes'

// action creators
export const addItem = (name, barcode, amazonPrice, walmartPrice) => ({
    type: types.ADD_ITEM,
    name,
    barcode,
    amazonPrice,
    walmartPrice
})
export const deleteItem = barcode => ({type: types.DELETE_ITEM, barcode})