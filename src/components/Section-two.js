import React from 'react';
import '../App.css';
import fifa from '../img/fifa.png'
import Fifaa from '../img/Fifaa.jpg'
import Temoji from '../img/Temoji.jpg'
import img from '../img/img.png'
import smile from '../img/smile.png'


function SectionTwo(){
    return(
        <div className="sectionTwo">
            <div className="sectionTwo__header">
                <div className="header__icon">
                    <div className="icon__img">
                        <img src={fifa} alt="" width="50"/>
                    </div>
                    <div className="icon__text">
                        <h2>FIFA</h2>
                        <span>3 ژوئن، ساعت 01:16</span>
                    </div>
                </div>
                <div className="header__threePoint"></div>
            </div>
            {/* describe */}
            <div className="sectionTwo__description">
                <p>FIFA fully understands the depth of sentiment and concerns expressed by many footballers in light of the tragic circumstances of the George Floyd case, and has issued the following statement</p>
                <div className="description__hashtak">
                    <span><a href="#">#stopracism </a></span>
                    <span><a href="#">#stopdiscrimination </a></span>
                    <span><a href="#">#stopviolence </a></span>
                </div>
                <div className="description__img">
                    <img src={Fifaa} alt=""/>
                    <div className="img__des">
                        <h4>FIFA.COM</h4>
                        <p>Who We Are - News - Stop racism. Stop violence</p>
                        <strong>FIFA.com</strong>
                    </div>
                </div>             
            </div>
            {/* emoji */}
            <div className="sectionTwo__emoji">
                <a href="" className="emoji__button">
                    <img src={Temoji} alt="" width="60"/>
                    <div className="emoji__box">
                        <div className="box__icon">
                            <img src={smile} width="50"/>
                        </div>
                        <div className="box__icon">
                            <img src={smile} width="50"/>
                        </div>
                        <div className="box__icon">
                            <img src={smile} width="50"/>
                        </div>
                        <div className="box__icon">
                            <img src={smile} width="50"/>
                        </div>
                        <div className="box__icon">
                            <img src={smile} width="50"/>
                        </div>
                    </div>
                </a>
                <span>1,3 هزار</span>
            </div>   
            {/* idea */}
            <div className="sectionTwo__idea">
                <p>پسند</p>
                <p>نظر</p>
                <p>اشتراک گذاری</p>
            </div>
        </div>
    )
}
export default SectionTwo;