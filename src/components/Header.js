import React from 'react'

const Header = (props) => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <div className="navbar-brand">{props.title}</div>
            </div>
        </nav>
    )
}

export default Header