import ReactStars from 'react-stars'
import React, { useEffect, useState } from 'react'



export const Filter = (props) => {
   
    
    return (
        <div className = "filter">
            <ReactStars className="stars"
                count={5}
                onChange={props.ratingChanged}
                value = {props.rate/2}
                size={50}
                half = {true}
                color2={'#ffd700'} />
            <form>
                <label htmlFor="search">Search</label>
                <input name="search" type="text" placeholder="Enter movie name"  onChange={props.handleChange} value={props.title}  onKeyDown={props.handleClick} />
            </form>
        </div>

    )
}
