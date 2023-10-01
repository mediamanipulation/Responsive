import React from 'react';
import './AsideContent.css';

const AsideContent = () => {
    return (
        <div className="aside-container">
            <div className="card">
                <div className="icon-section">
                    <i className="icon fas fa-city"></i>  {/* Placeholder icon, you'll need Font Awesome or similar to make this work */}
                </div>
                <h2>What?</h2>
                <p>Chania is a city on the island of Crete.</p>
            </div>
            <div className="card">
                <div className="icon-section">
                    <i className="icon fas fa-map-marked-alt"></i>  {/* Placeholder icon */}
                </div>
                <h2>Where?</h2>
                <p>Crete is a Greek island in the Mediterranean Sea.</p>
            </div>
            <div className="card">
                <div className="icon-section">
                    <i className="icon fas fa-plane"></i>  {/* Placeholder icon */}
                </div>
                <h2>How?</h2>
                <p>You can reach Chania airport from all over Europe.</p>
            </div>
        </div>
    );
}

export default AsideContent;
