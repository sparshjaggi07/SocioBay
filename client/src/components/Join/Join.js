import React from 'react'

import { useState } from 'react';
import { Link } from 'react-router-dom';

import './Join.css'
import bg from '../../icons/bg.png';


const Join = () => {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');



    return (
            <div className="form">
                <img className="joinBg" src={bg}></img>
                <form action="" className="form__content">
                    <h1 style={{textAlign: 'center'}}>Join Room</h1>
                    <div className="form__box">
                        <input type="text" className="form__input" placeholder="Enter Name" onChange={(event) => {setName(event.target.value)}}/>
                        <label for="" className="form__label">ENTER NAME</label>
                        <div className="form__shadow"></div>
                    </div>
                    <div className="form__box">
                        <input type="text" className="form__input" placeholder="Enter Room" onChange={(event) => {setRoom(event.target.value)}}/>
                        <label for="" className="form__label">ENTER ROOM</label>
                        <div className="form__shadow"></div>
                    </div>
                        <div className="form__button">
                            <Link onClick={ (event) => (!name || !room) ? event.preventDefault():null} to={`/chat?name=${name}&room=${room}`}>
                                    <input type="Submit" className="form__submit" value="Sign In"/>
                            </Link>
                        </div>
                </form>
            </div>
            
    )
}

export default Join