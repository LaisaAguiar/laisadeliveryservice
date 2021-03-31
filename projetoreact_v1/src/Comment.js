const Comment = (comment) => {
    return (<div key={comment.id}> 
    <h3>{comment.name}</h3> 
    <h4>{comment.email}</h4> 
    <p>{comment.body}</p>
    </div>);
};

export default Comment;