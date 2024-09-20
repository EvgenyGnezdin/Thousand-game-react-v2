import { Link } from "react-router-dom";
import { useContext } from "react";
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoChevronBack } from "react-icons/io5"

import CounterPlayer from "../CounterPlayer/CounterPlayer";
import { CountePlayer } from "../../context";
import styled from './Counte.module.scss'


const Counte = () => {
    const { data } = useContext(CountePlayer)
    //Параметры Slider.
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <div className={styled.container}>
            <button>
                <IoChevronBack className={styled.backItem}/>
                <Link className={styled.back} to='/'>
                    На главную
                </Link>
            </button> 
            <div>
                {data.length <= 1 ? "Слишком мало игроков!" :
                <Slider className={styled.slider} {...settings}>
                    {data.map((item, i) => (
                        <CounterPlayer player={item} key={i}/>
                    ))}
                </Slider>
                } 
            </div>
        </div>
    );
};

export default Counte;