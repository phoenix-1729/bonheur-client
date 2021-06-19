import React from 'react'
// import { NavLink } from 'react-router-dom';
import creator1 from '../images/creator2.jpg';

export const Home = () => {
    return (
        <>
            <div class="wrapHome">
                <div class="welcome">
                    <div class="title">
                        <h2> Welcome to Happiness </h2>
                        {/* <NavLink to='/signin'>

                            <button type="button" class="btn btn-outline-secondary" data-toggle="button" aria-pressed="false" autocomplete="off">Sign In</button>
                        </NavLink> */}
                    </div>
                    <div className="creator">
                        <h4>Creators are :</h4>
                        <div class="cards1 cards--two">
                            <img src={creator1} class="img-responsive" alt="Cards Image" />
                            <span class="cards--two__rect"></span>
                            <span class="cards--two__tri"></span>
                            <p>Chandan Ahire</p>
                            <ul class="cards__list">
                                <li><a href="https://www.facebook.com/chandan.ahire.3/"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="https://twitter.com/ChandanAhire"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="https://www.instagram.com/chandan_1729/"><i class="fab fa-instagram"></i></a></li>
                                <li><a href="https://www.linkedin.com/in/chandan-ahire-7807331b6/"><i class="fab fa-linkedin-in"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Home