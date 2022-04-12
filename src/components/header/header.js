import React from 'react'
import './header.css'

const Header = React.memo((props)=> {

    const{ setString,setSortBy,sortBy}=props;

    return (
        <div className="header">
             <input className="form-control inputSearch" type="search" placeholder="Search" aria-label="Search"
            onChange={(e) => setString(e.target.value)} />
            <select className="form-select"
                onChange={((e) => { setSortBy(e.target.value); })}
                value={sortBy}>
                <option value="SortBy">Sort by</option>
                <option value="TitleASC">Title ASC</option>
                <option value="TitleDESC">Title DESC</option>
            </select></div>
    )
}
)
export default Header;