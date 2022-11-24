//Dependencies import
'use client'
import Link  from "next/link";
import { searchCharacter } from "../../redux/actions";
import { useDispatch ,useSelector} from "react-redux";


// Bootstrap Component
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// Components made with React
import Searchbar from "./Searchbar";
// Style in SCSS format
import Style from "../../styles/NavBar.module.scss"

//Img import

import Image from 'next/image'
import logo from "../../img/logo.png"
import { usePathname } from 'next/navigation'




//This is a navbar component that will be rendered in all sections
const NavBar = () => {
    const dispatch = useDispatch();

    let route = usePathname();
    // Hook to know in which route we are 

   console.log(useSelector((state)=>state.charFinded.error))

   

    // Search Bar is a reusable component so we need to provide a function by props
    let handle = (el) => dispatch(searchCharacter(el, 1));


    return (
        // navbar with condition navlink style class if we already are in the route
        <Navbar className={Style.NavContainer} expand="lg" >
            <Container fluid>
                <Link href={`/`}>
                    <Navbar.Brand className={Style.con}><Image className={Style.logo} src={logo} alt="Star War Logo"  /></Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Link className={route === "/" ? Style.active : Style.NavText} href={`/`}>
                            Characters
                        </Link>
                    </Nav>
                    <Searchbar handle={handle} toRoute= "/" />

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
