import React from "react";
import { Card, CardBody, CardFooter, CardHeader, Button, Table } from 'reactstrap';

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

        <Table bordered style={{
            border: "1px solid grey",
            boxShadow: "1px 1px #888888",
            borderRadius: "5px",
            padding: "20px",
            backgroundColor: "#D70F64",
            color: "white",
        }}
        >
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Unit</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td >Salad</td>
                    <td>20</td>
                    <td>1</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Cheese</td>
                    <td>45</td>
                    <td>1</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Meat</td>
                    <td>90</td>
                    <td>1</td>
                </tr>
            </tbody>
        </Table>



        <Card style={{
            marginTop: "30px",
            marginBottom: "20px",
            textAlign: "center",
            boxShadow: "1px 1px #888888",
            border: "1px solid grey",
            boxShadow: "1px 1px #888888",
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