import React from 'react';
import Banner from '../components/Banner';
import TopBar from '../components/TopBar';
import InputSearch from '../components/InputSearch';
import DateInput from '../components/DateInput';
import MainCarousel from '../components/MainCarousel';
import CardsCarousel from '../components/CardsCarousel';
import FooterPage from '../components/FooterPage';
import { SliderData } from '../assets/images/sliderData';

const Home = (props) =>{
    return(
        <div>
            <div className="container">
                <Banner/>
            </div>

            <header>
                <TopBar/>
            </header>


            <main>
                <div>here should have the announce-top</div>
                <div className="search-container">
                    <InputSearch/>

                    <DateInput/>
                </div>

                <section className="full-width">
                    <MainCarousel slides={SliderData}/>
                    <CardsCarousel slides={SliderData}/>
                </section>

            </main>

            <footer className="mt-5">
                <FooterPage/>
            </footer>


        </div>
    )
}

export default Home;