import Navbar from "../components/Navbar"
import { useState } from "react"

const Support=()=>{
    const [message,setMessage]=useState({
        name:'',
        email:'',
        subject:'',
        content:""
    })

    const handleChange = (event) => {
        event.preventDefault()
        const value=event.target.value
        setMessage({...message,[event.target.name]:value});
      }

    const handleSubmit=(event)=>{
        event.preventDefault()
        console.log(message);
    }

    return(
        <div className="Support">
            <Navbar/>

            <div className="supportWrapper">
                <div>
                    <p className="title">SUPPORT</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam facilis tempora nostrum aut at natus, est iure deserunt culpa voluptatibus fugiat vitae totam dolor laborum quam provident necessitatibus odit recusandae.</p>
                    <form action="" onSubmit={handleSubmit}>
                        <div className="top">

                        </div>

                        <div className="main">
                            <div className="name-email">
                                <div className="form-control">
                                    <label htmlFor="name">Name</label><br />
                                    <input type="text" name="name" onChange={handleChange}/>
                                </div>
                                <div className="form-control">
                                    <label htmlFor="email">Email</label><br />
                                    <input type="email" name="email" onChange={handleChange}/>
                                </div>
                            </div>

                            <div className="sub-cont">
                                <div className="form-control">
                                    <label htmlFor="subject">Title</label><br />
                                    <input type="text" name="subject" onChange={handleChange}/>
                                </div>
                                <div className="form-control">
                                    <label htmlFor="content">Content</label><br />
                                    <textarea onChange={handleChange} name="content" id="" cols="30" rows="10"></textarea>
                                </div>
                            </div>

                            <button>Submit</button>
                        </div>
                        
                    </form>
                </div>
                <div></div>
            </div>
            <style jsx>
                {`
                    .supportWrapper{
                        padding:50px;
                        padding-top:30px;
                        display:grid;
                        grid-template-columns:55% 45%;

                    }

                    .title{
                        font-size:2.4em;
                        letter-spacing:7px;
                        font-weight:400;
                    }

                    form{
                        border:1px solid purple;
                        height:500px;
                        border-radius:10px;
                        border-top:none;
                    }
                    .form-control{
                        margin-bottom:20px;
                    }
                    label{
                        font-size:14px;
                        font-weight:500;
                    }
                    .top{
                        background-color:purple;
                        height:40px;
                        border-radius:10px 10px 0px 0px;
                    }
                    .main{
                        padding:20px;
                    }
                    .name-email{
                        display:grid;
                        grid-template-columns:50% 50%;
                        grid-gap:20px;
                    }
                    input{
                        padding:5px;
                        border:none;
                        background-color:#F2E5F2;
                        border-radius:5px 5px 0 0;
                        outline:none;
                        transition:.3s;
                    }
                    input:focus{
                        border-bottom:1px solid #800080;
                    }
                    textarea{
                        padding:5px;
                        border:none;
                        background-color:#F2E5F2;
                        border-radius:5px 5px 0 0;
                        outline:none;
                        transition:.3s;
                    }
                    textarea:focus{
                        border-bottom:1px solid #800080;
                    }
                    .name-email input{
                        width:90%;
                        height:40px
                    }
                    .sub-cont input{
                        width:99%;
                        
                        height:40px;
                    }
                    .sub-cont textarea{
                        width:99%;
                        resize:none;
                        
                    }
                    button{
                        height:40px;
                        width:150px;
                        color:white;
                        border-radius:3px;
                        background-color:#800080;
                        border:1px solid #800080;
                        
                        transition:.3s;
                        cursor:pointer;
                    }






                    @media (max-width:1100px){
                        .supportWrapper{
                            
                            display:grid;
                            grid-template-columns:60% 40%;

                        }
                    }

                    @media (max-width:900px){
                        .supportWrapper{
                            
                            display:grid;
                            grid-template-columns:70% 30%;

                        }
                    }
                    @media (max-width:760px){
                        .supportWrapper{
                            
                            display:grid;
                            grid-template-columns:90% 10%;

                        }
                    }
                    @media (max-width:650px){
                        .supportWrapper{
                            
                            display:flex;
                            justify-content:center;

                        }
                    }


                `}
            </style>
        </div>
    )
}


export default Support