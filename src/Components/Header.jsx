import React from 'react';
import { Link } from 'react-router-dom';

function Header() {

    return (
      // (ToggleSearchBar === false) ?
      <div className='headerComponent'>
        <div className='logo'>
          <Link to="/">
            <i className="fas fa-car-side fa-2x" />
          </Link>
        </div>      
        <h1>El SEMENTAL BLANCO</h1>
        <div className='navIcons'>
          <Link to="/add-service">
            <i className="fas fa-plus fa-2x" />
          </Link>
          {/* <i className="fas fa-search fa-2x"
          onClick= {() => {toggleSearch()}}
          ></i> */}
        </div>
      </div>
    ) 
}

export default Header;

  // Toggles the search bar off and on all pages

  // const toggleSearch = () => {
  //   this.setState({
  //     ToggleSearchBar: !this.state.ToggleSearchBar
  //   })
  // }

// WORK IN PROGRESS!!! Grabs the searchbar input to filter service log

  // const search = (searchInput) => {
  //   console.log(searchInput)
  //   this.setState({
  //     searchValue: searchInput.target.value
  //   })
  // }

// Header with Search bar showing

      // <div className='headerComponent'>
      //   <div className='logo'>
      //     <Link to="/">
      //       <i className="fas fa-car-side fa-2x" />
      //     </Link>
      //   </div>
      //   <h1>El SEMENTAL BLANCO</h1>
      //   <div className='navPlusSearchBar'>
      //     <div className='navIcons'>
      //       <i 
      //       className="fas fa-plus fa-2x"
      //       onClick= {() => {toggleAdd()}}
      //       ></i>
      //       <i className="fas fa-search fa-2x"
      //       onClick= {() => {toggleSearch()}}
      //       ></i>
      //     </div>
      //     <input type="text" 
      //     className='searchInput'
      //     onChange = { search }/>    
      //   </div>
      // </div>
