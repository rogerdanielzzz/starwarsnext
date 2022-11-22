import Head from 'next/head'
import Image from 'next/image'
import Style from '../styles/Home.module.scss'
import CardContainer from '../comps/CardContainer'


export default function Home() {
  return (
    <div className={Style.Container}>
    <CardContainer/>
    </div>
  )
}

