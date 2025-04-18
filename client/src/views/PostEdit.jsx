import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import Modal from '../components/content/Modal';
import userService from '../api/services/UserService.js';
import headers from '../utils/headersForRequests.js';
import postService from '../api/services/PostService.js';
import Alert from '../components/content/Alert.jsx';

const PostPage = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [value, setValue] = useState();
    const [userIdAccess, setUserIdAccess] = useState(null);
    const [showAlert, setShowAlert] = useState(false);

    // get user_id
    useEffect(() => {
        async function getId() {
            const { user } = await userService.getMe(headers());
            setUserIdAccess(user.id)
        }
        getId();
    }, [])

    //get post
    useEffect(() => {
        async function getPost(id) {
            try {
                const fetchedPost = await postService.getPostById(id, headers());
                setPost(fetchedPost);
                setIsLoading(true);
                setValue(fetchedPost[0].description)
                if (fetchedPost[0].user_id !== userIdAccess) {
                    alert('Это не ваш пост!')
                    window.location.href = '/posts';
                }
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
                setIsLoading(true);
            }
        }

        if (id && userIdAccess) {
            getPost(id);
        }
    }, [id, userIdAccess, setUserIdAccess]);


    //update post
    async function update(forma) {
        const data = await postService.update(id, forma, headers())
        if (data.message === "success") {
            setShowAlert(true);
        }
    }
    const handleSubmit = () => {
        const file = document.querySelector('.post_file').files[0] ?? null;
        const desc = document.querySelector('#description').value;
        const forma = new FormData();
        forma.append("file", file);
        forma.append("description", desc);

        update(forma);
    };

    const [showModal, setShowModal] = useState(false);

    //delete post
    useEffect(() => {
        async function deletePost() {
            const data = await postService.deletePost(id, headers());
            if (data.message == "success") {
                window.location.href = '/posts'
            }
        }
        const handleConfirmDelete = () => {
            deletePost()
        };

        const handleCancelDelete = () => {
            setShowModal(false);
        };

        const btn_confirm = document.querySelector('.btn_confirm');
        if (btn_confirm) {
            btn_confirm.addEventListener('click', handleConfirmDelete);
        }

        const btn_cancel = document.querySelectorAll('.btn_cancel');
        if (btn_cancel) {
            btn_cancel.forEach((btn) => {
                btn.addEventListener('click', handleCancelDelete);
            });
        }
    }, [showModal, setShowModal])

    const handleDelete = () => {
        setShowModal(true);
    }

    return (
        <div className="postPage">
            {showAlert ? <Alert text={'Пост успешно изменен!'} /> : ""}
            {isLoading ? (
                post ? (
                    <div className="form-posts w-100 m-auto">
                        <form>
                            <h1 className="h3 mb-3 fw-normal">Изменить пост</h1>

                            <div className="mb-3 select_file">
                                <label
                                    htmlFor="formFile"
                                    className="form-label label_select_file"
                                >
                                    Измените изображение поста {'(не обязательно)'}
                                </label>
                                <input
                                    className="form-control post_file"
                                    type="file"
                                    id="formFile"
                                />
                            </div>
                            <div className="form-floating mb-3">
                                <textarea
                                    className="form-control description"
                                    id="description"
                                    value={value}
                                    onChange={(e) => setValue(e.target.value)}
                                    required
                                ></textarea>
                                <label htmlFor="description">Измените описание {'(не обязательно)'}</label>
                            </div>

                            <button
                                className="btn btn-primary w-100 mb-2 py-2" id="post_submit"
                                type="button"
                                onClick={handleSubmit}
                            >
                                Отправить
                            </button>
                            <span className="or">или</span>
                            <button
                                className="btn mt-2 btn-danger w-100 py-2" id="post_submit"
                                type="button"
                                onClick={handleDelete}
                            >
                                Удалить
                            </button>
                        </form>
                    </div>
                ) : (
                    'Нет поста'
                )
            ) : (
                'Loading'
            )}
            {showModal ? <Modal warn={'Вы уверены, что хотите удалить пост?'} /> : ""}
        </div>
    );
};

export default PostPage;