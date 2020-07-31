import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckOutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKEY =  'pk_test_51HAoKfAme8pLIFa57VkXY6WFQJgWUfzVg344SamAWiFQClM2Dj7s5q8Tsyt8xmtIVZbIu2de2vmhDT1AHaJFHLNR00kKONAR1e';

    const onToken = (token) => {
        console.log(token);
        alert('Payment Successfully');
    }

    return (
        <StripeCheckout 
            label="Pay Now"
            name="King Clothing"
            billingAddress
            shippingAddress
            image="https://sendeyo.com/up/d/f3eb2117da"
            description={`Your Total is : $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKEY}
        />
    )
}

export default StripeCheckOutButton;