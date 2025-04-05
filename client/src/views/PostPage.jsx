import { useParams } from 'react-router';
import { useEffect, useState } from 'react';

const PostPage = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function getPost(id) {
            try {
                const data = await fetch(`http://127.0.0.1:8000/api/posts/${id}`, {
                    method: "GET",
                    headers: {
                        "Authorization": "Bearer " + localStorage.getItem('token')
                    }
                });
                const fetchedPost = await data.json();
                setPost(fetchedPost);
                setIsLoading(true);
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
                setIsLoading(true);
            }
        }

        getPost(id);
    }, [id]);

    return (
        <div className="postPage">
            {isLoading ? (
                post ? (
                    <div className='post text-center mt-5 mb-2'>
                        <h1 className='title text-center mb-5'>Пост</h1>
                        <img src={post[0].img_path} alt="" />
                        <h1 className='mt-4'>{post[0].description}</h1>
                    </div>
                ) : (
                    'Нет поста'
                )
            ) : (
                'Loading'
            )}
        </div>
    );
};

export default PostPage;