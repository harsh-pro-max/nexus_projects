
function Footer(){
    return (
        <div className="footer">
            
            <div className="footContent">

                {/* COLUMN 1 */}
                <div className="column">
                    <h4>ONLINE SHOPPING</h4>
                    <p>Men</p>
                    <p>Women</p>
                    <p>Kids</p>
                    <p>Home</p>
                    <p>Beauty</p>
                    <p>Genz</p>
                    <p>Gift Cards</p>
                    <p>Myntra Insider</p>

                    <h4 className="mt">USEFUL LINKS</h4>
                    <p>Blog</p>
                    <p>Careers</p>
                    <p>Site Map</p>
                    <p>Corporate Information</p>
                    <p>Whitehat</p>
                    <p>Cleartrip</p>
                </div>

                {/* COLUMN 2 */}
                <div className="column">
                    <h4>CUSTOMER POLICIES</h4>
                    <p>Contact Us</p>
                    <p>FAQ</p>
                    <p>T&C</p>
                    <p>Terms Of Use</p>
                    <p>Track Orders</p>
                    <p>Shipping</p>
                    <p>Cancellation</p>
                    <p>Privacy Policy</p>
                    <p>Grievance Redressal</p>
                </div>

                {/* COLUMN 3 */}
                <div className="column">
                    <h4>EXPERIENCE MYNTRA APP</h4>
                    <div className="appLinks">
                        <img src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png"/>
                        <img src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png"/>
                    </div>

                    <h4 className="mt">KEEP IN TOUCH</h4>
                    <div className="social">
                        <span>Facebook</span>
                        <span>Twitter</span>
                        <span>Youtube</span>
                        <span>Instagram</span>
                    </div>
                </div>

                {/* COLUMN 4 */}
                <div className="column guarantee">
                    <div className="gItem">
                        <h4>100% ORIGINAL</h4>
                        <p>guarantee for all products at myntra.com</p>
                    </div>

                    <div className="gItem">
                        <h4>Return within 14 days</h4>
                        <p>of receiving your order</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer ;