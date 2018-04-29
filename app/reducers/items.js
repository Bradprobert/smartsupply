import {ADD_ITEM, DELETE_ITEM, EDIT_ITEM} from '../constants/ActionTypes'

const initialState = [
    {
        name: 'Generic Food',
        barcode: '012345678910',
        amazonPrice: 10.99,
        walmartPrice: 11.99
    }
]

export default items = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return [
                ...state,
                {
                    name: action.name,
                    barcode: action.barcode,
                    amazonPrice: action.amazonPrice,
                    walmartPrice: action.walmartPrice
                }
            ]

        case DELETE_ITEM:
            return state.filter(item => item.barcode !== item.barcode)
        default:
            return state
    }
}