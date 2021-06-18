import React, { useState, useEffect } from 'react'
import axios from "axios"
import Comment from './Comment'

const Comments = ({ match }) => {
    const [comments, setComments] = useState([])

    const fetchComments = async () => {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${match.params.id}`)
            setComments(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchComments()
    }, [match])


    return (
        <div>
            {comments.map((com, i) => <Comment com={com} key={i} />)}
        </div>
    )
}

export default Comments
