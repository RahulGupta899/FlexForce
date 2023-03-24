import React from 'react'

const Footer = ()=>{
    return(
        <div
            style={{
                background: 'black',
                color: 'whitesmoke',
                textAlign: 'center',
                padding: '10px'
            }}
        >
        <section id="footer">
            <div style={{display:'flex', justifyContent:'space-evenly', width:'150px',marginLeft:'550px'}}>
                <i className="fab fa-twitter  footer-icon"></i>
                <i className="fab fa-facebook-f footer-icon"></i>
                <i className="fab fa-instagram footer-icon"></i>
                <i className="fas fa-envelope footer-icon"></i>
            </div>
            <p style={{marginTop:'5px'}}>© Copyright 2023 FlexForce</p>
            <p style={{marginTop:'10px'}}>Made with passion by Rahul Gupta</p>
        </section>
        </div>
    )
}
export default Footer