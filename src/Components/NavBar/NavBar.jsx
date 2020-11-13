import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import iconNav from '../../assets/iconNav.png'
import './NavBar.css'

export default function NavBar(){
    return(
        <>
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo">
                        <img src={iconNav} alt=""/>
                    </a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                    </ul>
                </div>
            </nav>
        </>
    );
}

