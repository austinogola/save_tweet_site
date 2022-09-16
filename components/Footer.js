// import { BiHome,BiMailSend } from "react-icons/bi";
import Image from "next/image"
import Link from "next/link"

const Footer=()=>{
    return(
        <div className="Footer">
            <div className="footerWrapper">
                <div className="first">
                    <div className="logo">
                        <Image width={50} height={50} className='save_tweet_image' src='/save_tweet-50.png' alt="logo" />
                    </div>
                    <div className="take">
                        <p>Archive your favourite tweets. Repost , share</p>
                    </div>
                    <div>
                        {/* <BiHome/>
                        <BiMailSend/> */}
                    </div>
                </div>
                <div className="second">
                    <div className="policies">
                        <h4>Policies</h4>
                        <Link className='link' href="/tos"><a>Terms of Use</a></Link><br />
                        <Link className='link' href="/privacy"><a>Privacy Policy</a></Link>
                    </div>
                    <div className="resources">
                        <h4>Resources</h4>
                        <Link className='link' href="/support"><a>Support</a></Link><br />
                        <Link className='link' href="/contact"><a>Contact Us</a></Link><br />
                        <Link className='link' href="/support"><a>Chrome Web Store</a></Link><br />
                        <Link className='link' href="/privacy"><a>Telegram</a></Link>
                    </div>
                    <div>
                        
                    </div>
                    
                </div>
                
            </div>
                
            <p className="austo">&copy; Austin Ogola</p>


            <style jsx>
                {`
                    .Footer{
                        padding:20px;
                        padding-top:60px;
                        height:400px;
                    }
                    .footerWrapper{
                        display:grid;
                        grid-template-columns:50% 50%;
                        border-bottom:#E0E0E0 1px solid;
                        height:300px;
                    }

                    .second{
                        display:flex;
                        justify-content:space-between;
                    }

                    .take{
                        width:60%;
                        color:#B79E9E;
                    }
                    .policies a{
                        display:block;
                    }
                    .resources a{
                        display:block;

                    }
                    .austo{
                        color:#A4A6A4;
                        font-size:13px;
                    }
                `}
            </style>
        </div>
    )
}


export default Footer