
import React, { useEffect, useState,useContext } from 'react';
import {Usercontext} from '../../App'
const Profile = () => {
    const [mypics, setMypic] = useState([])
    const {state,dispatch}=useContext(Usercontext)
    useEffect(() => {
        fetch('/mypost', {
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem("jwt") }
        }).then(res => res.json())
        .then(result => { setMypic(result.myposts) 
        })
    },[])
    return (
        <div style={{ maxWidth: "550px", margin: "0px auto" }}>
            <div style={{ display: "flex", justifyContent: "space-around", margin: "20px 0px", borderBottom: "2px solid grey" }}>
                <div>
                    <div className="container">
                        <div className="d-flex justify-content-center h-100">
                            <div className="image_outer_container">
                                <div className="green_icon"></div>
                                <div className="image_inner_container">
                                    <img alt="" src="https://images.unsplash.com/photo-1584307833174-a3bbb76ab367?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzl8fHBlcnNvbnxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                     <h4>{state?state.name:"Loding"}</h4>
                    <div style={{ display: "flex", justifyContent: "space-between", width: "110%" }}>
                        <p>30 Post</p>
                        <p>400 Followers</p>
                        <p>300 Followings</p>
                    </div>
                </div>
            </div>
            <div className="galary">
              {
                  mypics.map(item=>{
                      return(
                          <img className="item" alt="" src={item.photo} key={item._id}/>
                      )
                  })
              }

            </div>
        </div>

    );
};

export default Profile;