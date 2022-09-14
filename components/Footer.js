// import { BiHome,BiMailSend } from "react-icons/bi";

const Footer=()=>{
    return(
        <div className="Footer">
            <div className="footerWrapper">
                <div className="first">
                    <div className="logo">
                        <img className='save_tweet_image' src='save_tweet-50.png' alt="logo" />
                    </div>
                    <div className="take">
                        <p>Take control of your time. Block distracting apps and sites. Make productivity your priority</p>
                    </div>
                    <div>
                        {/* <BiHome/>
                        <BiMailSend/> */}
                    </div>
                </div>
                <div className="second">
                    <div>Policies</div>
                    <div>Resources</div>
                    <div></div>
                </div>
            </div>



            <style jsx>
                {`
                    .Footer{
                        padding:20px;
                        height:400px;
                    }
                    .footerWrapper{
                        display:grid;
                        grid-template-columns:50% 50%;
                        border-bottom:#E0E0E0 1px solid;
                    }

                    .second{
                        display:flex;
                        justify-content:space-between;
                    }

                    .take{
                        width:60%;
                    }
                `}
            </style>
        </div>
    )
}


export default Footer