import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import { useSelector } from "react-redux";
import { selectPostById } from "./postsSlice";
import { Link } from 'react-router-dom';

type PostsExcerptProps = {
    postId: string;
}

const PostsExcerpt = ({ postId }: PostsExcerptProps) => {
    const post = useSelector(state => selectPostById(state, postId))
    return (
        <article>
            <h4>{post.title}</h4>
            <p className="excerpt">{post.body.substring(0, 75)}...</p>
            <p className="postCredit">
                <Link to={`post/${post.id}`}>View Post</Link>
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date} />
            </p>
            <ReactionButtons post={post} />
        </article>
    )
}
export default PostsExcerpt