import * as actionTypes from './actionTypes';
const ingredient_prices = {
    salad: 20,
    cheese: 45,
    meat: 90
}


const initialState = {
    ingredients: [
        { type: 'salad', amount: 0 },
        { type: 'cheese', amount: 0 },
        { type: 'meat', amount: 0 }
    ],
    totalPrice: 80,
    purchaseAble: false,
}

export const reducer = (state = initialState, action) => {
    const ingredients = [...state.ingredients];
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            for (let item of ingredients) {
                if (item.type === action.payload) item.amount++;
            }
            return {
                ...state,
                ingredients: ingredients,
                totalPrice: state.totalPrice + ingredient_prices[action.payload],
            }

        case actionTypes.REMOVE_INGREDIENT:
            for (let item of ingredients) {
                if (item.type === action.payload) {
                    if (item.amount <= 0) return state;
                    else item.amount--;
                };
            }
            return {
                ...state,
                ingredients: ingredients,
                totalPrice: state.totalPrice - ingredient_prices[action.payload],
            }

        case actionTypes.UPDATE_PURCHASEABLE:
            const sum = state.ingredients.reduce((sum, element) => {
                return sum + element.amount;
            }, 0)
            return {
                ...state,
                purchaseAble: sum > 0,
            }


        default:
            return state;
    }

}