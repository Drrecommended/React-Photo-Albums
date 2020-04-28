import React, { useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import pictures from '../../../pictures.json'

function MyAlbums() {
    const [photos] = useState(pictures)
    return (
        <div>
            <div className="title">My Albums</div>
            <div className="body">
                {photos.map(item => {
                    return <div>
                    <Link className="linkBox">
                        <img src="" alt="picture"/>
                        <div>Album</div>
                    </Link>
                    </div>
                })}
                
            </div>
        </div>
        
    )
}


export default MyAlbums