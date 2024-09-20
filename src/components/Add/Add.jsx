import { useContext } from 'react';
import { Link } from "react-router-dom";
import { NamePlayer } from '../../context';
import { IoChevronBack } from "react-icons/io5";

import styled from './Add.module.scss'

const Add = () => {
    const context = useContext(NamePlayer);
    const {player, setPlayer, addPlayer } = context;
    return (
        <div className={styled.container}>
            <button>
                <IoChevronBack className={styled.backItem}/>
                <Link className={styled.back} to='/'>
                    На главную
                </Link>
            </button> 
            <form onSubmit={addPlayer}>
                <h2>Добавьте игрока</h2>
                <input placeholder='Введите имя игрока' value={player} onChange={(e) => setPlayer(e.target.value)} type="text" />
                <button>Добавить</button>
            </form>
        </div>
    );
};

export default Add;