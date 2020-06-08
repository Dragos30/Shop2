import React from 'react';
import "../Style/Footer.css";


function Footer() {
    return (
        <footer className="footer" id="footer">
        <div className="ui grid">          
                <div className="stackable four column grid">
                    <p id="company"> Copyright &copy; 2020 Finit LTD.<br></br> All rights reserved. <br></br>Website by: FinIT LTD<br></br></p>
                </div>
                <div className="stackable four column grid">
                    <img id="footer-image" src="f13.jpg" alt="" width="100px" height="auto"></img>
        </div>
            </div>
        </footer>
    )
}

export default Footer;