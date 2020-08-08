import React from 'react';

// Styles
import './SplashScreen.css';

function SplashScreen() {
    return (
        <div className="fullSize">
            <div className="centered">
                <div className="center-align">
                    <div className="preloader-wrapper big active">
                        <div className="spinner-layer spinner-blue">
                            <div className="circle-clipper left">
                            <div className="circle"></div>
                            </div><div className="gap-patch">
                            <div className="circle"></div>
                            </div><div className="circle-clipper right">
                            <div className="circle"></div>
                            </div>
                        </div>
                    </div>
                    <h3>Loading...</h3>
                </div>
            </div>
        </div>
    )
};

export default SplashScreen;
