import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Dashboard extends Component{
    render(){
        return <div>
            <h1> WELCOME TO DASHBOARD </h1>
            <div>
              
            </div>
            <div style={{ position: "absolute", bottom: "10px", right: "10px" }}>
              <Link to="/surveys/new" className="btn-floating btn-large waves-effect waves-light red">
                <i className="material-icons">add</i>
              </Link>
            </div>
          </div>;
    }
}

export default Dashboard