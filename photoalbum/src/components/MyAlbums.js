import React, { useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import albumsData from '../db.json'

function MyAlbums() {
    const [albums] = useState(albumsData.albums)
    return (
        <div>
            <div className="title">My Albums</div>
                <div className="body">{albums.map(item => {
                    return <Link className="linkBox" to={`/albums/${item.id}`}>
                            <img className="picture" src={item.thumb} alt=""></img>
                            <div className="titleBox">{item.AlbumTitle}</div>
                        </Link> 
                      
            })}</div>
        </div>
          

    )
}


export default MyAlbums