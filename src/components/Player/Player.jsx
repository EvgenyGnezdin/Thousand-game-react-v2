import { IoPersonRemoveOutline } from "react-icons/io5";
import PropTypes from 'prop-types'
import styled from './Player.module.scss'


const Player = ({item, removePlayer, i}) => {
    return (
        <li className={styled.player}>
            <div className={styled.name}>
                <h4>
                    {i+1}.
                </h4>
                <h4>
                    {item.name}
                </h4>
            </div>
            <div className={styled.count}>
                <h4>
                    {item.count}
                </h4>
                <IoPersonRemoveOutline className={styled.delete} onClick={() => removePlayer(item.id)}/>
            </div>
        </li>
    );
};
Player.propTypes = {
    item: PropTypes.object,
    removePlayer: PropTypes.func,
    i: PropTypes.number
}

export default Player;