import React from 'react';
import Banner from '../components/Banner';
import TopBar from '../components/TopBar';
import InputSearch from '../components/InputSearch';
import DateInput from '../components/DateInput';
import CardCaroulsel from '../components/CardCaroulsel';
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

                <section>
                    <CardCaroulsel slides={SliderData}/>
                </section>

            </main>


        </div>
    )
}

export default Home;