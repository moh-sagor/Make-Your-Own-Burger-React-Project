import React, { Component } from "react";
import Burger from "./Burger/Burger";
import Controls from "./Controls/Controls";
import Summary from "./Summary/Summary";
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from 'reactstrap';
import { connect } from "react-redux";
import { addIngredient, removeIngredient, updatePurchaseable } from '../../redux/actionCreators';

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        totalPrice: state.totalPrice,
        purchaseAble: state.purchaseAble,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addIngredient: (igtype) => dispatch(addIngredient(igtype)),
        removeIngredient: (igtype) => dispatch(removeIngredient(igtype)),
        updatePurchaseable: () => dispatch(updatePurchaseable()),
    }
}

class BurgerBuilder extends Component {
    state = {
        modalOpen: false,
    }

    addIngredientHandle = type => {
        this.props.addIngredient(type);
        this.props.updatePurchaseable();
    }


    removeIngredientHandle = type => {
        this.props.removeIngredient(type);
        this.props.updatePurchaseable();
    }

    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }

    // handleCheckout = () => {
    //     this.props.history.push("/checkout");
    // }
    // componentDidMount() {
    //     console.log(this.props);
    // }

    render() {
        return (
            <div>
                <div className="d-flex flex-md-row flex-column">
                    <Burger ingredients={this.props.ingredients} />
                    <Controls
                        ingredientAdded={this.addIngredientHandle}
                        ingredientRemove={this.removeIngredientHandle}
                        price={this.props.totalPrice}
                        toggleModal={this.toggleModal}
                        purchaseAble={this.props.purchaseAble}
                    />
                </div>
                <Modal isOpen={this.state.modalOpen}>
                    <ModalHeader>Your Order Summary</ModalHeader>
                    <ModalBody>
                        <h5>Total Price:{this.props.totalPrice.toFixed(0)} BDT</h5>
                        <Summary ingredients={this.props.ingredients} />
                    </ModalBody>
                    <ModalFooter>
                        {/* <Button color="success" onClick={this.handleCheckout}>Continue to checkout</Button> */}
                        <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>

                    </ModalFooter>

                </Modal>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);