import { useEffect, useState } from "react";
import Post from "../content/Post";
import { useSelector, useDispatch } from 'react-redux';
import { setStatePosts } from "../../features/posts/postsSlice";
import Loading from "./Loading";

const PostList = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [userIdAccess, setUserIdAccess] = useState(null);
    const statePosts = useSelector((state) => state.posts.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        async function getPosts() {
            try {
                const data = await fetch("http://127.0.0.1:8000/api/posts", {
                    method: "GET",
                    headers: {
                        "Authorization": "Bearer " + localStorage.getItem('token')
                    }
                });
                if (!data.ok) {
                    throw new Error(`HTTP error! status: ${data.status}`);
                }
                const fetchedPosts = await data.json();
                dispatch(setStatePosts(fetchedPosts));
                setIsLoading(true);
            } catch (error) {
                console.log(error.message);
                setIsLoading(true);
            }
        }

        async function getId() {
            const res = await fetch('http://127.0.0.1:8000/api/user', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": "Bearer " + localStorage.getItem('token')
                },
            });

            const { user } = await res.json();
            setUserIdAccess(user.id)
        }

        if (localStorage.getItem('token') && localStorage.getItem('isLogged')) {
            if (!statePosts) {
                getPosts();
            } else {
                setIsLoading(true)
            }
            getId();
        } else {
            setIsLoading(true)
        }
    }, []);

    useEffect(() => {
        const descriptions = document.querySelectorAll(".card-text");

        // create or update time a card
        if (descriptions) {
            descriptions.forEach((desc) => {
                if (desc.textContent.split(" ").length > 5) {
                    desc.textContent =
                        desc.textContent.split(" ").slice(0, 8).join(" ") +
                        "...";
                }
            });
        }

        function calculateTimeDifference(time) {
            const creationDate = new Date(time);
            const now = new Date();
            const difference = now - creationDate;

            const minutes = Math.floor(difference / (1000 * 60));
            if (minutes > 59) {
                let hours = 0;
                for (let i = 0; i < minutes; i += 60) {
                    hours++;
                }
                const total_minutes = minutes % 60;
                return hours + " ч " + total_minutes;
            }
            return minutes;
        }

        function updateTime(postCreationTime, querySelector, index) {
            const minutesAgo = calculateTimeDifference(postCreationTime);
            const times = document.querySelectorAll(querySelector);

            times[index].textContent = `Опубликовано ${minutesAgo} м назад`;
        }

        // end of updateTime

        if (isLoading) {
            if (statePosts && Array.isArray(statePosts)) {
                statePosts[0].map((post, index) => {
                    updateTime(post.created_at, `.time_stamp`, index);
                });
            }
        }
    });

    useEffect(() => {
        const btn_conts = document.querySelectorAll('.btn-group');

        if (isLoading) {
            if (statePosts && Array.isArray(statePosts)) {
                let count = 0;
                btn_conts.forEach(cont => {
                    if (statePosts[0][count].user_id === userIdAccess) {
                        const link = document.createElement('a');
                        link.href = `/posts/${statePosts[0][count].id}/edit`;
                        link.type = "button";
                        link.className = "btn btn-sm btn-outline-secondary";
                        link.textContent = "Edit";
                        cont.appendChild(link);
                    }
                    count++;
                })

            }
        }

    }, [userIdAccess, setUserIdAccess]);

    return (
        <div className="row post_list row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {isLoading
                ? (statePosts && statePosts[0].length > 0 && Array.isArray(statePosts))
                    ? statePosts[0].map((post) => (
                        <Post
                            key={post.id}
                            desc={post.description}
                            img={post.img_path}
                            id={post.id}
                        />
                    ))
                    : "Нет постов для отображения"
                : <Loading />}
        </div>
    );
};

export default PostList;
