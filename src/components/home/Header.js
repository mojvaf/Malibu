import React from 'react'
import Hero from '../globals/Hero'
import aboutImg from '../../images/aboutBcg.jpeg'
import homeImg from '../../images/homeBcg.jpeg'
import Banner from '../globals/Banner'
const Header = () => {
    return (
        <div>
            <Hero img={homeImg} >
                <Banner
                    greeting='Welcome to '
                    title='Malibu beach walk'
                    text='Malibu is a city west of Los Angeles,California.Its known for its celebrity homes and beaches. ' />
            </Hero>
        </div>
    )
}
export default Header