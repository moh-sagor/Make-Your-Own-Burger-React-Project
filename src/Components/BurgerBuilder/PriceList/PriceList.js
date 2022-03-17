import React from "react";
import { Table } from "reactstrap";

const PriceList = () => {
    return (
        <div style={{
            border: "1px solid grey",
            boxShadow: "1px 1px #888888",
            borderRadius: "5px",
            padding: "20px",
            backgroundColor: "#198754",
            color: "white",
        }}>
            <h3>Price List</h3>
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
                        <td>Salad</td>
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
        </div>
    )
}

export default PriceList;