import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import { logout } from '../../redux/authActionCreator';


const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout()),
    }
}
class Logout extends Component {
    componentDidMount() {
        this.props.logout();
    }
    render() {
        return (
            <Routes>
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        )
    }
}
export default connect(null, mapDispatchToProps)(Logout);