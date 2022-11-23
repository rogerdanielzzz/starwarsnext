//Dependencies import
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useDispatch} from "react-redux";
import {loadingSwitcher} from "../redux/actions/index.js";

// Bootstrap Component
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// Style in SCSS format
import Style from '../styles/Searchbar.module.scss'
// Img Import
import Image from "next/image"
import SearchIcon from "../img/search.svg"

//Reusable SearchBar Component, recive a function by props that will called on submmit
const Searchbar = ({ handle , toRoute }) => {
    const dispatch = useDispatch();

    //Hook to redirect 
  //  const navigate = useHistory();
         const router = useRouter()    //Local State to set change on text input
    const [texto, setTexto] = useState("")
    const handleChange = (e) => {
        setTexto(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        handle(texto).then(() => router.push(toRoute))
        dispatch(loadingSwitcher(true))

        e.target.reset()
    }

    return (
        <Form className="d-flex" onSubmit={(e) => handleSubmit(e)}>
            <Form.Control id={Style.sInput}
                onChange={(e) => handleChange(e)}
                type="search"
                placeholder="Search a Character"
                className="rounded-left"
            />
            <Button type='submit' className={Style.sButton}><Image src={SearchIcon} alt="Search Icon" /></Button>
        </Form>

    )
}

export default Searchbar