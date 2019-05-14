import React from 'react'
import Layout from '../components/layout/layout'
import Slider from '../components/homepageSlider/homepageSlider'
import HomeLoader from '../components/homeLoader/homeLoader'

console.log(document.referrer);

export default () => (
    <Layout hasScroll isHome>
        <HomeLoader />
        <Slider />
    </Layout>
)