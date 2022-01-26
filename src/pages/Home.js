import React from 'react'
import './Home.css';
import {Link} from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import {Avatar} from "@material-ui/core"
import Search from "./Search";

const Home = () => {
    return (
        <div className="home">
            <div className="home__header">
                <div className="home__headerLeft">
                    <Link to="/about">About</Link>
                    <Link to="/store">Store</Link>

                </div>
                <div className="home__headerRight">
                   <Link to="/gmail">Gmail</Link>
                   <Link to="/images">Images</Link>
                   <AppsIcon/>
                   <Avatar/>

                </div>
            </div>
            <div className="home__body">
                <img src="https://logos-world.net/wp-content/uploads/2021/04/Google-Search-Logo.png" alt="logo"/>
                <div className="home__inputContainer">
                    <Search />
                </div>
            </div>
        </div>
    )
}

export default Home
