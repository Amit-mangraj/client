
import React, { useEffect, useState } from 'react';
const Home = () => {
    const [data, setData] = useState("")
    useEffect(() => {
        fetch("/getallpost", {
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem("jwt") },
        }).then(res => res.json()).then(result => {
            console.log(data)
            // setData(result.post)
        })
    }, [])
    return (
        <div className="home">
            {
                data.map(item => {
                    return (
                        <div className="card card-header">
                            <h5>Amit</h5>
                            <div className="card-image">
                                <img alt="" src="https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbHBhcGVyfGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                            </div>

                            <div className="card-content">
                                <i className="material-icons">favorite</i>
                                <p> this is amazing Post</p>
                                <input type="text" placeholder="comment"></input>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    );
};


export default Home;