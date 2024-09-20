import PropTypes from 'prop-types'
import { useContext, useState } from 'react';
import { CountePlayer } from '../../context';
import styled from './CounterPlayer.module.scss'

const CounterPlayer = ({ player }) => {
    const [number, setNumber] = useState('')
    const { setData, data } = useContext(CountePlayer)

    //Функция записи инпута в state.
    const inputCounte = (e) => {
        setNumber(e.target.value)
    }
    //Функция убирает объект в котором изменяем счет и добавляем этот массив в новый, после чего добавляем объект с изменениями.
    const addCounte = () => {
        // Условия для бочки и для старта в игре. 
        if(player.count == 0 && player.count < 50 && +number < 50) {
            console.log('Мало очков для старта')
            return    
        } else if (player.count >= 300 && player.count <= 400 && player.count + +number <= 399) {
            console.log(`Бочка мало очков нужно еще ${400 - (player.count + +number)}`)
            return
        } else if (player.count >= 700 && player.count <= 800 && player.count + +number <= 799) {
            console.log(`Бочка мало очков нужно еще ${800 - (player.count + +number)}`)
            return
        } else if (player.count >= 1000) {
            console.log('Поздравляем вы победили')
            return
        }
        //Логика обгона другого игрока и изменения текущего счета игрока.
        else {
            //Убираем из массива данных изменяемый обьект.
            let newData = data.filter(item => item.id != player.id)
            //Изменяем этот массив.
            newData.map(item => {
                //Если счет у другого игрока больше чем счет изменяемого, но если счет другого игрока меньше чем счет изменяемого игрока и счет добавленый из инпута, то мы от текущего счета друго игрока отнимаем 50 очков.
                if(item.count >= player.count && item.count < player.count + +number) {
                    item.count = +item.count - 50
                    //Но если счет другого игрока равен или меньше нуля, счет автоматом становится равен нулю.
                    if(item.count <= 0) {
                        item.count = 0
                    }
                }
            })
            //После чего измененный массив со всем счетами переносим в функцию изменения в массив с объектами игроков и их счетами.
            setData([
                ...newData,
                {
                name: player.name,
                count: player.count += +number,
                id: player.id
            }])
        }
        //И обнуляем инпут с вводимым числом.
        setNumber('')
        
    }

    
    return (
        <div className={styled.container}>
            <h1>{player.name}</h1>
            <h2>Счет: {player.count}.</h2>
            <div className={styled.counteBlock}>
                <input type="number" value={number} onChange={inputCounte}/>
                <button onClick={addCounte}>Добавить</button>
            </div>
        </div>
        
    );
};

CounterPlayer.propTypes = {
    player: PropTypes.object,
}

export default CounterPlayer;