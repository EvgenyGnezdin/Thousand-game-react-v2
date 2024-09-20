import { useContext } from "react";
import { Link } from "react-router-dom";
import { ListPlayer } from "../../context";
import { IoPersonAddOutline } from "react-icons/io5";
import { IoPlayOutline } from "react-icons/io5";
import Player from "../Player/Player";

import styled from './Home.module.scss'

const Home = () => {
    const context = useContext(ListPlayer)
    const { data, removePlayer } = context;
    return (
        <div className={styled.home}>
            <div className={styled.buttonBlock}>
                <button>
                    <IoPersonAddOutline className={styled.addIcons}/>
                    <Link className={styled.addLink} to='/addPlayer'>
                        Добавить игрока
                    </Link>
                </button> 
                <button>
                    <IoPlayOutline className={styled.addIcons}/>
                    <Link className={styled.addLink} to='/countePlayer'>
                        Начать игру
                    </Link>
                </button>
            </div>
            <h3>Список игроков.</h3>
            <ul className={styled.listPlayer}>
                {data.map((item, i) => (
                    <Player key={i} item={item} i={i} removePlayer={removePlayer}/>
                ))}
            </ul>
        </div>
    );
};

export default Home;