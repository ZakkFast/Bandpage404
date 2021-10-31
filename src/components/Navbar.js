import React from 'react'

export const Navbar = () => {
    return (
        <header>
            <nav className="cf">
                <ul className="cf">
                    <li className="hide-on-small">
                        <a href="/#" className="bold">Under Alliance</a>
                    </li>
                    <li>
                        <a href="/#">Shows</a>
                    </li>
                    <li>
                        <a href="/#">Social</a>
                    </li>
                </ul>
                <a href="/#" id="openup">Under the Alliance</a>
            </nav>
        </header>
    )
}


