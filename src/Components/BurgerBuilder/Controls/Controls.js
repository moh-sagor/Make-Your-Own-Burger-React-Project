import React from "react";
import { Card, CardBody, CardFooter, CardHeader, Button } from 'reactstrap';
import PriceList from '../PriceList/PriceList';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
]

const BuildControl = props => {
    return (
        <div className="d-flex">
            <div className="mr-auto ml-5" style={{ fontWeight: "bold", fontSize: "1.2rem" }}>{props.label}</div>
            <Button className="btn btn-danger btn-sm m-1" onClick={props.remove}>Less (-) </Button>
            <Button className="btn btn-success btn-sm m-1" onClick={props.added}>More (+) </Button>

        </div>
    )
}
const Controls = props => {
    return (<div className="container ml-md-5" style={{ textAlign: "center" }}>
        <PriceList />
        <Card style={{
            marginTop: "30px",
            marginBottom: "20px",
            textAlign: "center",
            boxShadow: "1px 1px #888888",
            border: "1px solid grey",
            borderRadius: "5px",
            padding: "20px",
        }}>
            <CardHeader style={{
                backgroundColor: "#D70F64",
                color: "white"
            }}>
                <h4>Add Ingredients</h4>
            </CardHeader>
            <CardBody>
                <h5>Add at Least <strong style={{ color: "#D70F64" }}>One</strong> item to purchase and <span style={{ color: '#198754' }}>Checkout</span></h5>
                {
                    controls.map(item => {
                        return <BuildControl
                            label={item.label}
                            type={item.type}
                            key={Math.random()}
                            added={() => props.ingredientAdded(item.type)}
                            remove={() => props.ingredientRemove(item.type)}

                        />
                    })
                }
            </CardBody>
            <CardFooter style={{
                backgroundColor: "##000000",
                color: "black"
            }} >
                <h5>Price: <strong>{props.price}</strong> BDT </h5></CardFooter>
            <Button style={{ backgroundColor: "#D70F64" }} disabled={!props.purchaseAble} onClick={props.toggleModal} >Oreder Now</Button>
        </Card>
    </div>)
}
export default Controls;