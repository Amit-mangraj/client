
import React, { useEffect, useState,useContext } from 'react';
import {Usercontext} from '../../App'
const Home = () => {
    const {state ,dispatch}= useContext(Usercontext)
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("/getallpost", {
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem("jwt") },
        }).then(res => res.json()).then(result => {
            setData(result.posts)
        })
    }, [])

    const likePost = (id) => {
        fetch('/like', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("jwt")
            },
            body: JSON.stringify({
                postId: id
            })
        }).then(res => res.json())
        .then(result => {
            const newData = data.map(item => {
                if (item._id === result._id) {
                    return result
                }
                else {
                    return item
                }
            })
             setData(newData)
        }).catch(err=>{console.log(err)})
    }

    const unlikePost = (id) => {
        fetch('/unlike', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("jwt")
            },
            body: JSON.stringify({
                postId: id
            })
        }).then(res => res.json()).then(result => {
            const newData = data.map(item => {
                if (item._id === result._id) {
                    return result
                }
                else {
                    return item
                }
            })
             setData(newData)
        }).catch(err=>{console.log(err)})
    }
    const commentPost =(text,postId)=>{
        fetch('/comment',{
            method:'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("jwt")
            },
            body: JSON.stringify({
                postId,text
            })
        }).then(res=>res.json()).then(result=>{
            const newData = data.map(item => {
                if (item._id === result._id) {
                    return result
                }
                else {
                    return item
                }
            })
            console.log(newData)
             setData(newData)
        }).catch(err=>{
            console.log(err)
        })
    }

    const deletePost = (postId)=>{
fetch(`/deletemypost/${postId}`,{
    method:'DELETE',
    headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("jwt")
    }
}).then(res=>res.json()).then(result=>{
    console.log(result)
    const newData = data.filter(item=>{
        return item._id!== result._id
    })
    setData(newData)
})
    }

    return (
        <div className="home">
            {
                data.map(item => {
                    return (
                        <div className="card card-header" key={item._id}>
                            <h5>{item.postedBy.name} {item.postedBy._id===state._id && <i className="material-icons" style={{float:"right"}} onClick={()=>deletePost(item._id)}>delete</i>} </h5>
                            <div className="card-image">
                                <img alt="" src={item.photo} />
                            </div>

                            <div className="card-content">
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <div>
                                    {item.likes.includes(state._id)?  <i className="material-icons" onClick={() => unlikePost(item._id)}>thumb_down</i>:
                                   <i className="material-icons" onClick={() => { likePost(item._id) }}>thumb_up</i> }      
                                        <i className="material-icons">send</i>
                                        </div>
                                    <div><i className="material-icons">photo_library</i></div>
                                </div>
                                <p>{item.likes.length} Likes</p>
                                <p>{item.title}</p>
                                <p>{item.body}</p>
                                {
                                    item.comments.map(commentData=>{
                                        return(
                                            <h6 key={commentData._id}>
                                                <span style={{fontWeight:"600"}}>{commentData.postedBy.name} </span>{commentData.text}</h6>
                                        )
                                    })
                                }
                                <form onSubmit={(e)=>e.preventDefault(commentPost(e.target[0].value,item._id))}><input type="text" placeholder="comment" key={item._id}></input></form>
                              
                            </div>
                        </div>
                    )
                })
            }

        </div>
    );
};


export default Home;