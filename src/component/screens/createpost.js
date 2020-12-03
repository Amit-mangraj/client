
import React, { useState,useEffect } from 'react';
import {useHistory } from 'react-router-dom';
import M from 'materialize-css';

const Createpost = () => {
    const history = useHistory()
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [image, setImage] = useState("")
    const [url, setUrl] = useState("")

    const postDetails = () => {
        const data = new FormData()
        data.append("file", image)
        data.append("upload_preset", "Insta-Clone")
        data.append("cloud_name", "doxjtka1z")
        fetch("https://api.cloudinary.com/v1_1/doxjtka1z/image/upload", {
            method: 'POST',
            body: data
        }).then(res => res.json())
            .then(data => {
                setUrl(data.url)
            })
            .catch(err => {
                console.log(err)
            })
    }
    
    useEffect(()=>{
        if(url){
            fetch("/createpost", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 
                            'Authorization': 'Bearer '+localStorage.getItem("jwt") },
                body: JSON.stringify({ title, body, pic: url })
            }).then(res => res.json()).
                then(data => {
                    if (data.error) {
                        M.toast({ html: data.error, classes: '#f44336 red darken-6' })
                    }
                    else {
                        M.toast({ html: "Post Created succussesfully", classes: '#4caf50 green darken-6' })
                        history.push('/')
                    }
                }).catch((err => {
                    console.log(err)
                }))
        }
        
    },[url])

    return (
        <div className="card input-filed" style={{ margin: "10px auto", maxWidth: "500px", padding: "20px", textAlign: "center" }}>
            <input type="text" placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)}></input>
            <input type="text" placeholder="body" value={body} onChange={(e) => setBody(e.target.value)}></input>
            <div className="file-field input-field">
                <div className="btn #26c6da cyan darkenen-1">
                    <span>Upload Image </span>
                    <input type="file" onChange={(e) => setImage(e.target.files[0])} />
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate" type="text" />
                </div>
            </div>
            <button className="waves-effect waves-light btn-large #26c6da cyan darkenen-1" onClick={() => postDetails()}>
                Add post
            </button>
        </div>
    );
};

export default Createpost;