import React from 'react';
import desktopBackgroundImage from '../images/bg-desktop.png';
import mobileBackgroundImage from '../images/bg-mobile.png';
import iconDocument from '../images/icon-document.svg';
import iconFolder from '../images/icon-folder.svg';
import iconUpload from '../images/icon-upload.svg';
import logo from '../images/logo.svg';

const Container = () => (
    <div>
        <div className="background">
            <img src={desktopBackgroundImage} className="background--desktop" alt="Background swerve shape" />
            <img src={mobileBackgroundImage} className="background--mobile" alt="Background swerve shape" />
        </div>

        <div className="container">
            <div className="cta">
                <img src={logo} className="cta__logo" alt="fylo logo" />
                <div className="cta__btns">
                    <div className="cta__btns__container">
                        <img src={iconDocument} alt="fylo document icon" />
                    </div>
                    <div className="cta__btns__container">
                        <img src={iconFolder} alt="fylo folder icon" />
                    </div>
                    <div className="cta__btns__container">
                        <img src={iconUpload} alt="fylo upload icon" />
                    </div>                
                </div>

            </div>

            <div class="storage"> 
                <div class="storage__notification">
                    <span>185</span>  GB left
                </div>
                <p class="storage__statement">
                    You've used <span class="storage-unavailable">815 GB</span> of your storage
                </p>
                <div class="storage__graph">
                    <div class="progress__bar">
                        <div class="total__progress"></div>
                    </div>
                    <small class="capacity">
                        <span class="minimum">0 GB</span>
                        <span class="maximum">1000 GB</span>
                    </small>
                </div>
            </div>
        </div>
    </div>
)

export default Container;