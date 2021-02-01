import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import TopBar from '../components/TopBar';
import AnnounceTop from '../components/AnnounceTop';
import InputSearch from '../components/InputSearch';
import DateInput from '../components/DateInput';
import MainCarousel from '../components/MainCarousel';
import CardsCarousel from '../components/CardsCarousel';
import EventsCards from '../components/EventsCards';
import FooterPage from '../components/FooterPage';
import MobileMenu from '../components/MobileMenu';
import { SliderData } from '../assets/images/sliderData';

const Home = (props) =>{
    const [visibleMenu, setVisibleMenu] = useState (false)

    //FUNCTION TO SET STATE VARIALBEL AND CLOSE MENU
    function controlMenuBar(params) {
        if(!visibleMenu) setVisibleMenu(true)
        else setVisibleMenu(false)
    }

    return(
        <div>
            <div className="container ac">
                <Banner/>
            </div>


            {/* className="fixed-header-scrool" */}
            <header className="fixed-header-scrool mb-2">
                <TopBar triggerCloseNavBar={controlMenuBar}/>
            </header>

            {/* <nav className="mobile-menu-open"> */}
            <nav className={visibleMenu ? 'mobile-menu-open show-menu"' : 'hide-menu'}>
                <MobileMenu triggerCloseNavBar={controlMenuBar}/>
            </nav>

            <main>
                <div>
                    <AnnounceTop />
                </div>
                <div className="search-container">
                    <InputSearch/>

                    <DateInput/>
                </div>

                <section className="full-width">
                    <MainCarousel slides={SliderData}/>
                    <CardsCarousel slides={SliderData}/>
                </section>


                <div className="container ac mt-7">
                    <EventsCards slides={SliderData}/>
                </div>
            </main>

            <footer className="mt-5">
                <FooterPage />
            </footer>


        </div>
    )
}

export default Home;