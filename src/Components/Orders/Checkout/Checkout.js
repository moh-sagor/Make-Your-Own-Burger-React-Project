import React, { Component } from 'react';
import { Button, Modal, ModalBody } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import Spinner from '../../Spinner/Spinner';
import { resetIngredient } from '../../../redux/actionCreators';


const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        totalPrice: state.totalPrice,
        purchaseAble: state.purchaseAble,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        resetIngredient: () => dispatch(resetIngredient()),
    }
}

class Checkout extends Component {
    state = {
        values: {
            cus_name: "",
            deliveryAddress: "",
            phone: "",
            paymentType: "Cash On Delivery",
        },
        isLoading: false,
        isModalOpen: false,
        modalMsg: "",
    }

    inputChangerHandler = (e) => {
        this.setState({
            values: {
                ...this.state.values,
                [e.target.name]: e.target.value,
            }
        })
    }

    submitHandler = () => {
        this.setState({ isLoading: true });
        const order = {
            ingredients: this.props.ingredients,
            customer: this.state.values,
            price: this.props.totalPrice,
            orderTime: new Date(),
        }
        axios.post("https://burger-builder-2a9c5-default-rtdb.firebaseio.com/orders.json", order)
            .then(response => {
                if (response.status === 200) {
                    this.setState({
                        isLoading: false,
                        isModalOpen: true,
                        modalMsg: "Order Placed Successfully",
                    })
                    this.props.resetIngredient();
                } else {
                    this.setState({
                        isLoading: false,
                        isModalOpen: true,
                        modalMsg: "Something Went Wrong ! Order Again! ",
                    })
                }
            })
            .catch(err => {
                this.setState({
                    isLoading: false,
                    isModalOpen: true,
                    modalMsg: "Something Went Wrong ! Order Again! ",
                })
            })
        // console.log(order);
    }

    render() {
        let form = (
            <div>
                <h4 style={{
                    border: "1px solid grey",
                    boxShadow: "1px 1px #888888",
                    borderRadius: "5px",
                    padding: "20px",
                    backgroundColor: "#D70F64",
                    color: "white",
                }}>
                    Payment: {this.props.totalPrice} BDT</h4>
                <form style={{
                    border: "1px solid grey",
                    boxShadow: "1px 1px #888888",
                    borderRadius: "5px",
                    padding: "20px",
                    backgroundColor: "#D70F64",
                }}>
                    <input name="cus_name" className="form-control" value={this.state.values.cus_name} placeholder="Your Name" onChange={(e) => this.inputChangerHandler(e)} />
                    <br />
                    <textarea name="deliveryAddress" value={this.state.values.deliveryAddress} className="form-control" placeholder="Your Address" onChange={(e) => this.inputChangerHandler(e)}></textarea>
                    <br />
                    <input name="phone" className="form-control" value={this.state.values.phone} placeholder="Your Phone Number" onChange={(e) => this.inputChangerHandler(e)} />
                    <br />
                    <select className="form-control" name="paymentType" value={this.state.values.paymentType} onChange={(e) => this.inputChangerHandler(e)}>
                        <option value="Cash On Delivery">Cash On Delivery</option>
                        <option value="Bkash">Bkash</option>
                        <option value="Nagad">Nagad</option>
                        <option value="Rocket">Rocket</option>
                    </select>

                    <br />
                    <Button disabled={!this.props.purchaseAble} style={{ backgroundColor: "#F49C3E", color: "white" }} className="mr-auto" onClick={this.submitHandler}>Place Order</Button>

                    <NavLink activeStyle={{ color: 'red' }} exact to="/" className="NavLink"><Button color='secondary'>Cancel</Button></NavLink>

                </form>
            </div>
        )
        return (
            <div>
                {this.state.isLoading ? <Spinner /> : form}
                <Modal isOpen={this.state.isModalOpen}>
                    <ModalBody>
                        <p>{this.state.modalMsg}</p>
                        <NavLink exact to="/" className="NavLink"><Button outline color='secondary'>Cancel</Button></NavLink>

                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);