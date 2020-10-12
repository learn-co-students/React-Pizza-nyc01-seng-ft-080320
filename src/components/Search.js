import React from 'react'

const Search = (props) => {
    return(
        <form>
            <input value={props.searchTerm} onChange={props.changeHandler}placeholder="Search pizzas..."/>
        </form>
    )
}
export default Search