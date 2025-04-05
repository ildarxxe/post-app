import PostList from "../components/content/PostList";
const Posts = () => {
    return (
        <div className="album py-5 bg-body-tertiary">
            <div className="container">
                <h1 className="title mb-3 text-center">Посты</h1>
                <PostList />
            </div>
        </div>
    );
};

export default Posts;
