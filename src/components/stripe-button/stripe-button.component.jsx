import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({price}) => {
    const priceForStripe = price*100;
    const publishableKey = 'pk_test_wYe4eQodW5RSqM6TAvkmyKxv00nhXNLClX';

    const onToken = (token) => {
        console.log(token);
        alert("Pagamento Efetuado com Sucesso!");
    }
    return (
        <StripeCheckout
            label='Pay Now'
            name="Bruno E-Commerce"
            billingAddress
            shippingAddress
            image='http://svgshare.com/i/CUz.svg'
            description={`Seu total é $${price}`}
            amount={priceForStripe}
            panelLabel='Pague Agora'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeButton;