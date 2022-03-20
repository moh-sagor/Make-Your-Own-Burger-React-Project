import React from 'react'

const Order = props => {
    const ingredientSummary = props.order.ingredients.map(item => {
        return (
            <span style={{
                border: "1px solid grey",
                borderRadius: "5px",
                padding: "20px",
                marginRight: '10px',
                marginBottom: '20px',
                backgroundColor: "white",
                color: "#D70F64",
            }}
                key={item.type} >{item.amount} x <span style={{ textTransform: 'capitalize' }}> {item.type}</span></span>)
    })
    return (
        <div style={{
            border: "1px solid grey",
            boxShadow: "1px 1px #888888",
            borderRadius: "5px",
            padding: "20px",
            marginBottom: '10px',
            backgroundColor: "#D70F64",
            color: "white",
        }}>
            <p>Order Number: <span style={{ color: "navy" }}>{props.order.id}</span></p>
            <p>Customer Name : <b style={{ textTransform: 'capitalize' }}>{props.order.customer.cus_name}</b></p>
            <p>Delivery Address : <b style={{ textTransform: 'capitalize' }}>{props.order.customer.deliveryAddress}</b></p>
            <p>Payment Type : <b style={{ textTransform: 'capitalize' }}>{props.order.customer.paymentType}</b></p>
            <br />
            {ingredientSummary}
            <br />
            <br />
            <hr />
            <h5>Total : {props.order.price} BDT</h5>
        </div>
    )
}
export default Order;