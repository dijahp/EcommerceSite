import React from 'react';
import './CelebrationMoment.css';
import  confetti  from '../Assets/confetti.jpg'


const NoToken = () => {
    return(
        <div className="CelebrationMoment-container">
            <div className="NoToken-container">
            <div className="notoken">
            <h2>There are no orders!</h2>
        </div>
        <div className="return-to-shopBtn">
            <a href="/products">Continue Shopping</a>
        </div>
            </div>
    </div>
    )
}
 

function CelebrationMoment(props) {
    const token = new URLSearchParams(window.location.search).get('token');
    
    if(!token){
        return <NoToken/>
    }
  return (
    <div className="CelebrationMoment-container">
        <div className="CelebrationMoment-modal">
        <img src={confetti} alt="" />
        <div className="order-completion">
            <h2>Your Order is complete!</h2>
            <p>You will be receiving a confirmation email with order details.</p>
        </div>
        <div className="return-to-shopBtn">
            <a href="/products">Return to Products</a>
        </div>
        </div>
    </div>
  );
}

export default CelebrationMoment;
