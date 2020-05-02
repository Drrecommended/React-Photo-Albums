import React, { useState, useEffect } from 'react';
import '../App.css';
import albumsData from '../db.json';
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'


export default function AlbumDetail(props) {
    const [album, setAlbum] = useState(null)
    const [albums] = useState(albumsData.albums)
    useEffect(() => {
        const id = Number(props.match.params.id)
        const album = albumsData.albums.find(item => id === item.id)
        setAlbum(album)
    }, [props.match.params.id])
    function goBack(e) {
        e.preventDefault()
        props.history.push("/")
    }
    
    return (
        <div>
        { album ? 
            <div>  
                <div className="title">
                <button onClick={goBack}><FaArrowLeft></FaArrowLeft></button>
                    Album View</div> 
            <div className="container">
                <div className="sidebar">
                    <ul>{albums.map(item => {
                        return <Link to={`/albums/${item.id}`}>
                            <li className="sideLink">{item.AlbumTitle}</li>
                        </Link>})}
                        
                    </ul>
                </div>
                <div className="body2">{album.pictures.map(item => {
                        return <div className="linkBox">
                                <img className="picture" src={item.src} alt=""></img>
                                <div className="titleBox">{item.title}</div>
                            </div> 
                        
                })}</div>
            </div>
        </div> 
        : null
        }
        </div>
    )
}

