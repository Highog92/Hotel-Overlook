import homepageStyling from './styles/Homepage.module.scss'
import { useFetch } from '../Hooks/useFetch';
import { useEffect, useState } from "react";
import { Modal } from '../assets/Components/Modal/Modal';
import { Title } from '../assets/Components/Title/Title';
import { NewsCard } from '../assets/Components/NewsCard/NewsCard';

export function Homepage() {

    //   ----------------------------------------------------------------

    // Modal state (open/closed)
    const [isModalOpen, setIsModalOpen] = useState(false);

    // State for selecting ID on news article
    const [selectedID, setSelectedID] = useState(1);

    // Handler func to set selected ID and open/close modal
    const handleModal = (id) => {
        if (id) {
            setSelectedID(id);
        }
        setIsModalOpen(!isModalOpen);
    };

    //   ----------------------------------------------------------------

    const news = useFetch(`http://localhost:4000/destinations`);
    console.log(news);
    const newsDetails = useFetch(
        `http://localhost:4000/destinations/${selectedID}`
    );

    const imageList = useFetch(`http://localhost:4000/imagelist`)

    //   ----------------------------------------------------------------

    return (
        <section className={homepageStyling.landing}>
            <h1>Forside</h1>
            <Title title="Sidste nyt" />
            <section className={homepageStyling.newsCardWrapper}>
                imageList?.map((image)) => {
                    return(
                <NewsCard
                    imgSrc={item.CountryImage.country_image_filename}
                />
                )
                }

                {news?.map((item) => {
                    return (
                        <NewsCard
                            key={item.id}
                            title={item.name}
                            text={item.description}
                            imgSrc={item.CountryImage.country_image_filename}
                            handleModal={() => handleModal()}
                        />
                    );
                })}
            </section>
            {/* "http://localhost:4000/images/nyhed-island.jpeg" */}
            <Title title="Se vores udvalg af værelser" />
            <section>
                <p>alsdkfnsdlfkm</p>
            </section>
        </section>
    )
}
