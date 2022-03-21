import React from 'react';

export default function Contribution() {
    return (
        <div>
             <div className="header">
                <img src="/images/logoAutonoma%20copy.png" />
            </div>
        <div className="app">
            <div className="contributionInfo">
                <h1 className='reserve'>Reserve your spot</h1>
                <ol className='ol'>
                <a className='inline' target="_blank" href='https://www.paypal.me/autonomatiket'><li className='contributionInfo'>Click here</li></a>
                    <li className='contributionInfo'>Select "Friends and family" payment option</li>
                    <li className='contributionInfo'>Send your contibution of 10 euro (per person)</li>
                    <li className='contributionInfo'>Attach a message with the following info (for every participant):</li>
                    <ul className='ul'>
                        <li>Full Name</li>
                        <li>Email Address</li>
                    </ul>
                    <li className='contributionInfo'>Address and Timetable will be sent out the day before the event to the email addresses attached to the payment</li>
                </ol>
                <p className='contributionInfo underline'>Remember to bring your ID and a valid covid test not older than 24h (self tests won't be accepted)</p>
            </div>
        </div>
        </div>
    );
}