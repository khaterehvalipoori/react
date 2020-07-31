import React from 'react';
import '../App.css';
import SmileGray from '../img/SmileGray.png'
import img from '../img/img.png'
import person from '../img/person.png'


function SectionOne(){
    return (
        <div className="sectionOne">
            <div className="sectionOne__header">
                <h3>ایجاد پست</h3>
            </div>
            <div className="sectionOne__body">
                <div className="body__main">
                    <img src={SmileGray} alt=""/>
                    <p>در ذهنت چه می گذرد؟</p>
                </div>
            </div>
            <div className="sectionOne__footer">
                <div className="footer__media">
                    <img src={img} alt="" width="22" height="22"/>
                    <small>عکس/ویدئو</small>
                </div>
                <div className="footer__mark">
                    <img src={person} alt="" width="22" height="22"/>
                    <small>برچسب گذاری...</small>
                </div>
            </div>
        </div>
    )
}
export default SectionOne;