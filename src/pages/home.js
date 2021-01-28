import React from 'react';
import Banner from '../components/Banner';
import TopBar from '../components/TopBar';
import AnnounceTop from '../components/AnnounceTop';
import InputSearch from '../components/InputSearch';
import DateInput from '../components/DateInput';
import MainCarousel from '../components/MainCarousel';
import CardsCarousel from '../components/CardsCarousel';
import EventsCards from '../components/EventsCards';
import FooterPage from '../components/FooterPage';
import { SliderData } from '../assets/images/sliderData';

const Home = (props) =>{
    return(
        <div>
            <div className="container ac">
                <Banner/>
            </div>

            <header>
                <TopBar/>
            </header>


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