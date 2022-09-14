
const Homepage=()=>{
    return(
        <div className="Homepage">
            <div className="homepageWrapper">
                <div className="intro">
                    <h1 className="start">Save Twitter PC screenshots directly to your phone</h1>
                    <p className="smaller">One click.Receive it on your Google Photos app or Telegram</p>
                    <button>Add to Chrome</button>
                    <div className="available">
                        <p>Available via</p>
                        <div className="platform-img">
                            <img src="icons/chrome-24.png" alt="chrome" />
                            <img src="icons/microsoft-edge-24.png" alt="edge" />
                            <img src="icons/firefox-24.png" alt="firefox" />
                            <img src="icons/telegram-app-24.png" alt="telegram" />
                        </div>
                    </div>
                </div>
                <div className="images">Images </div>
            </div>
            <style jsx>{`
                .Homepage{
                    padding:20px;
                }
                .homepageWrapper{
                    display:grid;
                    grid-template-columns:60% 40%;
                }
                .intro{


                }
                .start{
                    font-size:3.2em;
                }
                .smaller{
                    font-size:1.5em;
                    color:#515151;
                    margin-bottom:50px;
                }
                button{
                    height:40px;
                    width:160px;
                    color:white;
                    background-color:#536DFE;
                    border:none;
                    border-radius:10px;
                    font-weight:bold;
                    margin-bottom:20px;

                }
                .available{
                    color:#515151;
                    margin-left:10px;
                }
                .available>p{
                    font-size:14px;
                }
                .platform-img>img{
                    margin:10px;
                }

            `}</style>
        </div>
    )
}


export default Homepage