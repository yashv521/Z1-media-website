import React from 'react';
import Navbar from './Navbar.css';

const Sidebar = () => {
    return (  
        <body>
    <nav class="navbar">
        <a class="navbar-brand" href="#">
            <div class="icon-container">
                <img class="icon hexagon" />
            </div>
            <span class="name">Financial CRM</span>
        </a>
        <ul class="navbar-nav">
            <li>
                <a class="active"><img class="icon home" /><span>Home</span></a>
            </li>
            <li>
                <a><img class="icon statistics" /><span>Statistics</span></a>
            </li>
            <li>
                <a><img class="icon mail" /><span>Messages</span></a>
            </li>
            <li>
                <a><img class="icon user" /><span>Profile</span></a>
            </li>
            <li>
                <a><img class="icon file" /><span>Documents</span></a>
            </li>
        </ul>
        
            
    </nav>
    <main>
        <header>
            <section role="search">
                <form action="#" method="get">
                    <div class="form-inline">
                        <img class="icon search" />
                        <input type="search" placeholder="Search" />
                    </div>
                </form>
            </section>

            <section role="application">
                <button class="change-view">
                    <img class="icon layout" />Change view
                </button>
                <button class="notification">
                    <img class="icon notification" />
                </button>
                <button class="menu">
                    <img class="icon menu" />
                </button>
            </section>
        </header>
        
        </main>
        </body>
    );
}
 
export default Sidebar;
<h1>SIdebar</h1>