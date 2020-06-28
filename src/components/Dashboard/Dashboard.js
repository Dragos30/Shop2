import React, { Component } from 'react';
import { Link, Router } from '@reach/router';
import './Dashboard.css';
import Products from '../Dashboard/components/Products';

class Dashboard extends Component{
    render(){
        return (
            <div className="dashboard">
                <div className="dashboardMenu">
                    <nav >
                        <h4>Dashboard</h4>
                        <ul>
                            <li>
                                <Link to={"/products"}>
                                   View Products
                                </Link>                               
                            </li>
                            <li>
                                <Link to={"/"}>
                                  View Stats
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <Router>
                    <Products path="/products" exact component={Products} />
                </Router>
            </div>
        )
    }
}

export default Dashboard;