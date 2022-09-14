

const Navbar=()=>{
    return(
        <div className="Navbar">
            <div className="navbarWrapper">
                <div className="logo">
                    <div className="image">
                        <img className='save_tweet_image' src='save_tweet-50.png' alt="logo" />
                    </div>
                    <h2>Save Tweets</h2>
                </div>
                <div className="resources">
                    <h3>Resources</h3>
                </div>
                <div className="add">
                    <button>Add to Chrome</button>
                </div>
            </div>

            <style jsx>
                {`
                    .Navbar{
                        padding:10px;
                        padding-left:30px;
                        padding-right:30px;
                    }
                    .navbarWrapper{
                        display:flex;
                        justify-content:space-between;
                    }
                    .logo{
                        display:flex;
                        align-items:center;
                    }
                    .image{
                       margin-right:10px;
                    }

                    .add>button{
                        height:40px;
                        width:160px;
                        color:white;
                        background-color:#536DFE;
                        border:none;
                        border-radius:10px;
                        font-weight:bold;

                    }

                `}
            </style>
        </div>
    )
}


export default Navbar