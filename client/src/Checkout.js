import React from 'react'
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

import STRIPE_PUBLISHABLE from './constants/stripe';
import PAYMENT_SERVER_URL from './constants/server';

import { download } from './download';
const CURRENCY = 'GBP';
const fromEuroToCent = amount => amount * 100;

const buttons = document.getElementsByClassName('StripeCheckout');



const successPayment = (data, event) => {
  const message = document.getElementById('message-successful-payment');
  message.style.display='block';
};

const errorPayment = data => {
  const message = document.getElementById('message-unsuccessful-payment');
  message.style.display='block';
};

const onToken = (amount, description) => token =>
  axios.post(PAYMENT_SERVER_URL,
    {
      description,
      source: token.id,
      currency: CURRENCY,
      amount: fromEuroToCent(amount)
    })
    .then(successPayment)
    .catch(errorPayment);

const Checkout = ({ name, description, songSrc, amount, handleClick }) =>
  <StripeCheckout
    name={name}
    amount={fromEuroToCent(amount)}
    songSrc={songSrc}
    token={onToken(amount, description)}
    currency={CURRENCY}
    stripeKey={STRIPE_PUBLISHABLE}
    onClick={this.handleClick}
  />

export default Checkout;
