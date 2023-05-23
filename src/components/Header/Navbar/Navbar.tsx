import { useState, useEffect } from 'react';
import { Header } from '../../Data/data';
import {FaAngleDown, FaAngleRight} from "react-icons/fa";
import { Link, Outlet } from 'react-router-dom';

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

    //responsive navbar for smaller screen handling
    const [width, setWidth] = useState<number>(0);

    //toggle handle
    const [toggleClicked, setToggleClicked] = useState<boolean>(false);

    const updateToggling = ()=>{
        setToggleClicked(!toggleClicked);
    };

    useEffect(()=>{
        const updateWindowWidth = ()=>{
            const winWidth = window.innerWidth;
            setWidth(winWidth);

            if(winWidth >= 1024 || (winWidth < 1024 && toggleClicked))
                setToggleClicked(true);
            else if(winWidth < 1024 && !toggleClicked)
            {
                console.log("small")
                setToggleClicked(false);
            }
        };

        window.addEventListener("load", updateWindowWidth);
        window.addEventListener("resize",updateWindowWidth);
    },[]);

    useEffect(()=>{
        console.log(width);
        console.log(toggleClicked)
    }, [width, toggleClicked]);






  return (
    <header id="navbar-wrapper">

        <nav id="navbar">

            {/*nav left part*/}
            <h1 className="logo-font">
                {blog_name}
            </h1>

            {/*nav middle part*/}
            <div className="nav-middle" style={{transform: (toggleClicked)?"translateX(0%)":"translateX(100%)", backgroundColor: toggleClicked?"#f2f2f2":"transparent"}}>
                
                <ul id="nav-links">

                    {nav_menus.map(menu=>{
                        const {id, name} = menu;
                        let linkToValue:string="";

                        switch(name){
                            case "blog":
                                linkToValue = "/";
                                break;
                            case "categories":
                                linkToValue= "/categories";
                                break;
                            case "single post":
                                linkToValue = "/single-post";
                                break;
                            case "about":
                                linkToValue = "/about";
                                break;
                            case "contact":
                                linkToValue = "/contact";
                                break;
                        };

                        return (
                            <li className="link-list-item" onClick={width < 1024?updateToggling:()=>{}} style={{transitionDelay: `${id * 0.1}s`, transform:(toggleClicked)?"translateX(0%)":"translateX(100%)"}} key={id} id={name=="categories"?"dropdown-first":""} onMouseOver={()=>hoveredTrue(name)} onMouseLeave={()=>hoveredFalse(name)}>
                                
                                <Link to={linkToValue} style={{marginBottom: (name=="categories" && hoveredSubmenu && width<1024)?"1rem":"0"}}>
                                    <span className="small-font">
                                        {name}
                                    </span>
                                </Link>

                                {name=="categories" && (
                                    <>
                                    <span className="icon smaller-font">
                                        <FaAngleDown />
                                    </span>

                                    <div id="container-1" style={{height:(hoveredSubmenu)?(width < 1024)?"auto":`${submenus.length * 34}px`:`0`}}>
                                    {/*first dropdown container*/}
                                        <ul id="dropdown-first-list" style={{borderColor: hoveredSubmenu?"rgb(204, 202, 202)":"transparent"}}>

                                            {submenus.map(submenu=>{
                                                const {id, name}= submenu;
                                                let linkToValue:string="";

                                                if(name=="Search Result")
                                                    linkToValue = "/search-result";
                                                
                                                return (
                                                    <li className="link-list-item" key={id} id={name=="Deep Drop Down"?"dropdown-deep":''} onMouseOver={()=>hoveredTrue(name)} onMouseLeave={()=>hoveredFalse(name)}>

                                                    <Link to={linkToValue} style={{marginBottom: (hoveredDeepmenu && name=="Deep Drop Down" && width<1024)?"1rem":0}}>
                                                        <span className="small-font">
                                                            {name}
                                                        </span>    
                                                    </Link>

                                                        {name=="Deep Drop Down" && (

                                                            <>
                                                            <span className="small-font icon">
                                                                <FaAngleRight />
                                                            </span>

                                                            <div id="container-2" style={{height:(hoveredDeepmenu)?(width < 1024)?"auto":`${deep_submenus.length * 34}px`:`0px`}}>
                                                            {/*for animation effect this container is made*/}
                                                                <ul id="deep-dropdown-list" style={{borderColor: hoveredDeepmenu?"rgb(204, 202, 202)":"transparent"}}>

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

                                <Outlet />
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

                <span id="toggle" className='medium-font icon' onClick={updateToggling}>
                    {toggle}
                </span>
            </div>
        </nav>
    </header>
  );
};

export default Navbar
