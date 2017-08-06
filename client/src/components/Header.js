import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payment from "./Payment";
class Header extends Component {
  componentWillReceiveProps(nextProps) {
    console.log("will receive props" + JSON.stringify(nextProps));
  }
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            {" "}<a href="/auth/google"> Login with Google </a>{" "}
          </li>
        );
      default:
        return [
          <li key="1">
            <Payment />
          </li>,
          <li key="2" style={{ margin:'0 10px' }} >
            Credits: {this.props.auth.credits}
          </li>,
          <li key="3">
            <a href="/api/logout"> Logout </a>
          </li>
        ];
    }
  }
  render() {
    ///* login roi thi khong thay Landing page nua   */
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? "/surveys" : "/"}
            className="brand-logo left"
          >
            Emaily
          </Link>

          <ul className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}
const mapStateToProps = ({ auth }) => {
  console.log("mapStateToProps " + JSON.stringify(auth));
  return { auth: auth };
};
export default connect(mapStateToProps, null)(Header);



