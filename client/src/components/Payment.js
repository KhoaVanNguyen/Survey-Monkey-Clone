import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { handleToken } from '../actions/index'
import { connect } from 'react-redux'
class Payment extends Component {
  render() {
     console.log(process.env.REACT_APP_STRIPE_KEY);
    return (
      <StripeCheckout
        amount={69}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
        token={token => this.props.handleToken(token)}
      >
        <button className="btn" > Add Credit </button>
      </StripeCheckout>
    );
  }
}
export default connect(null,{ handleToken  })(Payment);
