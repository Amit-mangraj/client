
import * as React from 'react';

 const createpost = () => {
    return (
        <div className="card input-filed" style={{margin:"10px auto", maxWidth:"500px",padding:"20px", textAlign: "center"}}>
            <input type="text" placeholder="title"></input>
            <input type="text" placeholder="body"></input>
            <div className="file-field input-field">
                <div className="btn #26c6da cyan darkenen-1">
                    <span>Upload Image </span>
                    <input type="file" />
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate" type="text" />
                </div>
            </div>
            <button className="waves-effect waves-light btn-large #26c6da cyan darkenen-1">
           Add post
            </button>
        </div>
    );
};

export default createpost;