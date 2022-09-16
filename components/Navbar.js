import { useRouter } from "next/router"

const Navbar=()=>{
    const router=useRouter()

    const goHome=(e)=>{
        
        router.push('/')
    }
    return(
        <div className="Navbar">
            <div className="navbarWrapper">
                <div className="logo" onClick={goHome}>
                    <div className="image">
                        <img className='save_tweet_image' src='save_tweet-50.png' alt="logo" />
                    </div>
                    <h2>Save Tweets</h2>
                </div>
                <div className="resources">
                    <div className="dropdown">
                        <h3 className="dropbtn">Resources</h3>
                        <div className="dropdown-content">
                           <div>
                                <a href="/telegram">Telegram</a>
                                <a href="/firefox">Firefox</a>
                                <a href="/edge">Edge</a>
                           </div>
                           <div>
                                <a href="/support">Support</a>
                                <a href="/contact">Contact</a>
                           </div>
                        </div>
                    </div>
                </div>
                <div className="add">
                    <button>
                        <img className='save_tweet_image' src='icons/chrome-24.png' alt="logo" />
                        <p>Add to Chrome</p>
                    </button>
                </div>
            </div>

            <style jsx>
                {`
                    .Navbar{
                        padding:10px;
                        padding-left:30px;
                        padding-right:30px;
                        box-shadow:0px 3px 10px 0px rgba(0,0,0,0.2);
                        position:sticky;
                        width:100%;
                        z-index: 1;
                        background-color:#FDFBFF;
                    }
                    .navbarWrapper{
                        display:flex;
                        justify-content:space-between;
                    }
                    .logo{
                        display:flex;
                        align-items:center;
                        cursor:pointer;

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
                        display:flex;
                        align-items:center;
                        justify-content:space-around;

                    }
                    .dropbtn {
                        background-color: white;
                        color: black;
                        font-size: 16px;
                        font-weight:bolder;
                        border: none;
                    }
                    .dropdown {
                        position: relative;
                        display: inline-block;
                    }
                    .dropdown-content {
                        display: none;
                        position: absolute;
                        background-color: #f1f1f1;
                        width: 400px;
                        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
                        z-index: 1;
                        padding:20px;
                        justify-content:space-around;
                    }
                    .dropdown-content a {
                        color: black;
                        padding: 10px 12px;
                        text-decoration: none;
                        display: block;
                        font-size:16px;
                        font-weight:bold;

                    }


                    /* Change color of dropdown links on hover */
                    .dropdown-content a:hover {background-color: #ddd;}

                    /* Show the dropdown menu on hover */
                    .dropdown:hover .dropdown-content {
                        display: flex;
                    }

                    /* Change the background color of the dropdown button when the dropdown content is shown */
                    .dropdown:hover .dropbtn {
                        color: #595959;
                    }


                `}
            </style>
        </div>
    )
}


export default Navbar