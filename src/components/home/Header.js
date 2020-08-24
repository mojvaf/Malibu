import React from 'react'
import Hero from '../globals/Hero'
import aboutImg from '../../images/aboutBcg.jpeg'
import homeImg from '../../images/homeBcg.jpeg'
import Banner from '../globals/Banner'
import { PrimaryBtn } from '../globals/Buttons'

const Header = () => {
    return (
        <div>
            <Hero img={homeImg} >
                <Banner
                    greeting='Welcome to '
                    title='Malibu beach '
                    text='Malibu is a city west of Los Angeles,California.Its known for its celebrity homes and beaches. ' >

                    <PrimaryBtn t='1rem'>View Details</PrimaryBtn>
                </Banner>
            </Hero>
        </div>
    )
}
export default Header