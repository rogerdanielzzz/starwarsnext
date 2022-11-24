//Dependencies import
"use client"
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { loadingSwitcher, cleanDetail, getDetail, pageSwitcher,cleanerShowAll } from "../../../redux/actions/index";
import Error from 'next/error';
// Components made with React
import Loader from '../../components/Loader.jsx';
// Style in SCSS format
import Style from '../../../styles/[id].module.scss'
import Msg from '../../components/Msg';
import { useRouter } from 'next/navigation'


//This is a component where all the info about the characters will rendered in a bootstrap card





const Detail = ({ params }) => {
    //Hook to get de params of the route
    const { id } = params
    const router = useRouter()    //Local State to set change on text input

    const dispatch = useDispatch();
    let cleaner = () => {
        dispatch(cleanerShowAll())
        router.push("/")
    }

    // Global States called with Redux useDispatch Hook
    const detail = useSelector((state) => state.charDetail);
    const char = useSelector((state) => state.charFinded)
    const arrId = useSelector((state) => state.idArr)
    const isLoading = useSelector((state) => state.isLoading)


    // This is a conditional to fix an api error , the endpoint 17 doesnt exist so we use an auxiliar variable 
    let idFix = id
    if (id >= 17) idFix = ((id * 1) + 1)
    let name = arrId[id - 1]?.name
    let imgSource = `https://starwars-visualguide.com/assets/img/characters/${idFix}.jpg`



    useEffect(() => {

        document.title = `${name} | Star Wars`;
        dispatch(loadingSwitcher(true))
        dispatch(getDetail(idFix)).then(() => {
            dispatch(loadingSwitcher(false))
        })

        //a cleaner state function when the component is unmount
        return () => {
            dispatch(pageSwitcher(1))
            dispatch(cleanDetail())

        }

    }, [dispatch]);


    //Render the bootstrap card with the information that bring the getDetail Function
    return (


        <div className={Style.Container}>
            {isLoading ?
                <Loader />
                : char.error? <Msg cleaner={cleaner}/>:
                <div className={`card ${Style.Father}`} style={{ width: '80vw' }}>
                        <div className={Style.Left}>
                            <img className='card-img-top' src={imgSource} />
                        </div>
                        <div className={Style.Right}>
                            <div className="card-body">
                                <div className={`card-title h5 ${Style.Title}`}>{detail.name}</div>
                                <p className={`card-text ${Style.text}`}>
                                    Appears: {detail.films}
                                </p>
                            </div>
                            <div className="list-group-flush list-group">
                                <div className={`list-group-item ${Style.List}`}>Height: {detail.height}Cm</div>
                                <div className={`list-group-item ${Style.List}`}>Mass : {detail.mass}Kg</div>
                                <div className={`list-group-item ${Style.List}`}>Hair color: {detail.hair_color} </div>
                                <div className={`list-group-item ${Style.List}`}>Skin color: {detail.skin_color}</div>
                                <div className={`list-group-item ${Style.List}`}>Eyes color: {detail.eye_color}</div>
                                <div className={`list-group-item ${Style.List}`}>Birth year: {detail.birth_year}</div>
                                <div className={`list-group-item ${Style.List}`}>Gender : {detail.gender}</div>
                                <div className={`list-group-item ${Style.List}`}>Homeworld: {detail.homeworld}</div>
                            </div>
                        </div>

                    </div>
                    
            }
        </div>
    )
}

export default Detail