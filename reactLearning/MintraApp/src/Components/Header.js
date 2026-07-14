function Header(){
    return (
    <>
        
        <div className="heading">
            <img src="https://www.freelogovectors.net/wp-content/uploads/2023/01/myntra-logo-freelogovectors.net_-1536x864.png" className="logo"/>

            <div className="actionBtn">
                <button>MEN</button>
                <button>WOMEN</button>
                <button>KIDS</button>
                <button>HOME</button>
                <button>BEAUTY</button>
                <button>GENZ</button>
                <button>STUDIO</button>
            </div>

            <input placeholder="Search for products,brands and more" className="search"></input>

            <div className="login">
                <button>PROFILE</button>
                <button>WISHLIST</button>
                <button>BAG</button>
            </div>
        </div>

        
    </>
    )
}

export default Header;