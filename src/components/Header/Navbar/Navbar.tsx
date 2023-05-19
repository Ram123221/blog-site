import { useState } from 'react';
import { Header } from '../../Data/data';
import {FaAngleDown, FaAngleRight} from "react-icons/fa";

function Navbar() {
    const {navbar:{blog_name, nav_menus, submenus, deep_submenus ,header_icons,toggle}} = Header;
    const [hoveredSubmenu, setHoveredSubmenu] = useState<boolean>(false);
    const [hoveredDeepmenu, setHoveredDeepmenu] = useState<boolean>(false);

    const hoveredTrue = (name:string)=>{
        if(name== "categories")
            setHoveredSubmenu(true);
        else if(name== "Deep Drop Down")
            setHoveredDeepmenu(true);
    };

    const hoveredFalse = (name: string)=>{
        if(name== "categories")
            setHoveredSubmenu(false);
        else if(name== "Deep Drop Down")
            setHoveredDeepmenu(false);
    };


  return (
    <header id="navbar-wrapper">

        <nav id="navbar">

            {/*nav left part*/}
            <h1 className="logo-font">
                {blog_name}
            </h1>

            {/*nav middle part*/}
            <div className="nav-middle">
                
                <ul id="nav-links">

                    {nav_menus.map(menu=>{
                        const {id, name} = menu;
                        return (
                            <li className="link-list-item" key={id} id={name=="categories"?"dropdown-first":""} onMouseOver={()=>hoveredTrue(name)} onMouseLeave={()=>hoveredFalse(name)}>
                                
                                <span className="small-font">
                                    {name}
                                </span>

                                {name=="categories" && (
                                    <>
                                    <span className="icon smaller-font">
                                        <FaAngleDown />
                                    </span>

                                    <div id="container-1" style={{height:hoveredSubmenu?`${submenus.length * 34}px`:`0`}}>
                                    {/*first dropdown container*/}
                                        <ul id="dropdown-first-list">

                                            {submenus.map(submenu=>{
                                                const {id, name}= submenu;
                                                return (
                                                    <li className="link-list-item" key={id} id={name=="Deep Drop Down"?"dropdown-deep":''} onMouseOver={()=>hoveredTrue(name)} onMouseLeave={()=>hoveredFalse(name)}>

                                                        <span className="small-font">
                                                            {name}
                                                        </span>

                                                        {name=="Deep Drop Down" && (

                                                            <>
                                                            <span className="small-font icon">
                                                                <FaAngleRight />
                                                            </span>

                                                            <div id="container-2" style={{height:hoveredDeepmenu?`${deep_submenus.length * 34}px`:`0px`}}>
                                                            {/*for animation effect this container is made*/}
                                                                <ul id="deep-dropdown-list">

                                                                    {deep_submenus.map(deep_submenu=>{
                                                                        const {id, name} = deep_submenu;

                                                                        return (
                                                                            <li className="link-list-item" key={id}>
                                                                                <span className="small-font">
                                                                                    {name}
                                                                                </span>
                                                                            </li>
                                                                        )
                                                                    })}
                                                                </ul>
                                                            </div>

                                                            </>
                                                            
                                                        )}
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                    
                                    </>
                                )
                                }
                            </li>
                        )
                    })}

                </ul>
            </div>

            {/*nav right part*/}
            <div className="nav-right">

                <div className="icons-container">

                    {header_icons.map((icon, i)=>{

                        return (
                            <span className="icon mid-font" key={i}>
                               {icon} 
                            </span>
                        );
                    })}
                </div>

                <span id="toggle" className='medium-font icon'>
                    {toggle}
                </span>
            </div>
        </nav>
    </header>
  );
};

export default Navbar
