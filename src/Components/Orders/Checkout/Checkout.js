import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        totalPrice: state.totalPrice,
        purchaseAble: state.purchaseAble,
    }
}

class Checkout extends Component {
    state = {
        values: {
            deliveryAddress: "",
            phone: "",
            paymentType: "Cash On Delivery",
        }
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
        const order = {
            ingredients: this.props.ingredients,
            customer: this.state.values,
            price: this.props.totalPrice,
            orderTime: new Date(),
        }
        axios.post("https://burger-builder-2a9c5-default-rtdb.firebaseio.com/orders.json", order)
            .then(response => console.log(response))
            .catch(err => console.log(err))
        // console.log(order);
    }

    render() {
        return (
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
                    <textarea name="deliveryAddress" value={this.state.values.deliveryAddress} className="form-control" placeholder="Your Address" onChange={(e) => this.inputChangerHandler(e)}></textarea>
                    <br />
                    <input name="phone" className="form-control" value={this.state.values.phone} placeholder="Your Phone Number" onChange={(e) => this.inputChangerHandler(e)} />
                    <br />
                    <select className="form-control" name="paymentType" value={this.state.values.paymentType} onChange={(e) => this.inputChangerHandler(e)}>
                        <option value="Cash On Delivery">Cash On Delivery</option>
                        <option value="Bkash">Bkash</option>
                    </select>


                    <br />
                    <Button style={{ backgroundColor: "#F49C3E", color: "white" }} className="mr-auto" onClick={this.submitHandler}>Place Order</Button>

                    <NavLink activeStyle={{ color: 'red' }} exact to="/" className="NavLink"><Button color='secondary'>Cancel</Button></NavLink>

                </form>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Checkout);