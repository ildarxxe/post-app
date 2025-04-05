import SearchForAdmin from "../components/content/SearchForAdmin";
import TableUsersForAdmin from "../components/content/TableUsersForAdmin";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUsers, setUserById } from "../features/admin/adminSlice";
import Loading from "../components/content/Loading";

const Admin = () => {
    // const [users, setUsers] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [userIsLoading, setUserIsLoading] = useState(false);

    const dispatch = useDispatch();
    const users = useSelector((state) => state.admin.users);
    const userById = useSelector((state) => state.admin.userById);
    useEffect(() => {
        async function getUsers() {
            try {
                const data = await fetch("http://127.0.0.1:8000/api/users", {
                    method: "GET",
                    headers: {
                        "Authorization": "Bearer " + localStorage.getItem("token")
                    }
                });
                const fetchedUsers = await data.json();
                dispatch(setUsers(fetchedUsers));
                setIsLoading(true);
                setUserIsLoading(false)
            } catch (error) {
                console.error(error);
                setIsLoading(true);
            }
        }

        if (users === null) {
            getUsers();
        } else {
            setIsLoading(true);
        }

        const form = document.forms[0];
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const searchInput = document.querySelector('.search').value;
            if (searchInput.length > 0) {
                getUser(searchInput);
            } else {
                setIsLoading(true);
                setUserIsLoading(false);
            }

        })

        async function getUser(user_id) {
            const user = await fetch(`http://127.0.0.1:8000/api/users/${user_id}`, {
                method: "GET",
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("token")
                }
            })
            const fetchedUser = await user.json();
            dispatch(setUserById([fetchedUser]));
            setUserIsLoading(true);
            setIsLoading(false);
        }
    }, [])

    useEffect(() => {
        const rows = document.querySelectorAll('.admin_table_row');
        if (rows) {
            rows.forEach((row) => {
                row.addEventListener('click', () => {
                    window.location.href = `/users/${row.dataset.id}`;
                })
            })
        }
    }, [users, setUsers])
    return (
        <div className="admin">
            <SearchForAdmin />
            {userIsLoading ? (userById && Array.isArray(userById) && Object.keys(userById[0]).length > 0) ? <><TableUsersForAdmin users={userById} /></> : "Нет пользователя" : (isLoading ? (users && Array.isArray(users) && Object.keys(users[0]).length > 0) ? <><TableUsersForAdmin users={users} /></> : "Нет пользователей" : <Loading />)}
        </div>
    );
};

export default Admin;