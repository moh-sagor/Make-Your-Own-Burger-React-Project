import React, { Component } from "react";
import Burger from "./Burger/Burger";
import Controls from "./Controls/Controls";


const ingredient_prices = {
    salad: 20,
    cheese: 45,
    meat: 90
}

export default class BurgerBuilder extends Component {
    state = {
        ingredients: [
            { type: 'salad', amount: 0 },
            { type: 'cheese', amount: 0 },
            { type: 'meat', amount: 0 }
        ],
        totalPrice: 80,
    }

    addIngredientHandle = type => {
        const ingredients = [...this.state.ingredients];
        const newPrice = this.state.totalPrice + ingredient_prices[type];
        for (let item of ingredients) {
            if (item.type === type) item.amount++;
        }
        this.setState({ ingredients: ingredients, totalPrice: newPrice });
    }


    removeIngredientHandle = type => {
        const ingredients = [...this.state.ingredients];
        const newPrice = this.state.totalPrice - ingredient_prices[type];
        for (let item of ingredients) {
            if (item.type === type) {
                if (item.amount <= 0) return;
                else item.amount--;
            };
        }
        this.setState({ ingredients: ingredients, totalPrice: newPrice });
    }
    render() {
        return (
            <div className="d-flex flex-md-row flex-column">
                <Burger ingredients={this.state.ingredients} />
                <Controls
                    ingredientAdded={this.addIngredientHandle}
                    ingredientRemove={this.removeIngredientHandle}
                    price={this.state.totalPrice}
                />
            </div>)
    }
}