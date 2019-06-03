import React from 'react';


const Header = (props) => {
    return (
        <div>
            <nav>
                <div className="nav-wrapper light-blue darken-3">
                    <a href="true" className="brand-logo center">{props.title}</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;