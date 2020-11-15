import React from 'react'
import ReactStars from 'react-stars'


export const MovieCard = (props) => {

    return (
        <div className="m">
            <div className="b">
                <img src={props.src} alt="Poster" />
                <div className="titre-rate">
                    <div>
                        {props.title}
                    </div>
                    <div>
                        {props.rate}
                        <ReactStars 
                            count={5}
                            value = {props.rate/2}
                            size={15}
                            edit = {false}
                            color2={'#ffd700'} />
                    </div>
                </div>
            </div>


        </div>
    )
}
