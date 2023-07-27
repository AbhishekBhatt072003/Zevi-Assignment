import React, { useState } from 'react'
import ZeviLogo from '../../assets/logo-zevi.png'
import SearchIcon from '../../assets/search.svg'
import Dropdown from '../../components/Dropdown/Dropdown'
import './style.scss'
const Home = () => {

    const [search, setSearch] = useState('')
    const [showDropdown, setShowDropdown] = useState(false)
    return (
        <div className="HomePage">
            <div className="zevilogo">
                <img src={ZeviLogo} alt="zevi" />
            </div>

            <div className="searchbar">
                <input
                    className='searchbar_input'
                    type="text"
                    placeholder="Search"
                    value={search}
                    onFocus={(e) => setShowDropdown(true)}
                    onBlur={(e) => setShowDropdown(false)}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <img className='searchIcon' src={SearchIcon} alt="search icon" />

            </div>

            {showDropdown && (
                <Dropdown />
            )}

        </div>
    )
}

export default Home