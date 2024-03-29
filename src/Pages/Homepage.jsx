import homepageStyling from './styles/Homepage.module.scss'
import { useFetch } from '../Hooks/useFetch';
import { useEffect, useState } from "react";
import { Title } from '../assets/Components/Title/Title';
import { NewsCard } from '../assets/Components/NewsCard/NewsCard';
import { Link } from 'react-router-dom';

export function Homepage() {

    //   ----------------------------------------------------------------

    const news = useFetch(`http://localhost:4000/destinations`);
    console.log(news, "distinationer");

    const imageList = useFetch(`http://localhost:4000/imagelist`)
    console.log(imageList, "Billedliste");

    //   ----------------------------------------------------------------

    return (
        <section className={homepageStyling.landing}>
            <h1>Velkommen til hotel Overlook online</h1>
            <Title title="Sidste nyt" />
            <section className={homepageStyling.newsCardWrapper}>

                {imageList?.slice(49, 52).map((item) => {
                    return (
                        <Link to='/hotel&destinations'>
                            <NewsCard
                                key={item.id}
                                imgSrc={item.filename}
                            />
                        </Link>
                    );
                })}
            </section>
            <Title title="Se vores udvalg af værelser" />
            <section className={homepageStyling.newsCardWrapper}>
                {imageList?.slice(54, 57).map((item) => {
                    return (
                        <Link to='/rooms'>
                            <NewsCard
                                imgSrc={item.filename}

                            />
                        </Link>
                    );
                })}
            </section>
        </section>
    )
}

