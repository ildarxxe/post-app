import { useEffect, useState } from 'react';
import SearchForAdmin from '../components/content/SearchForAdmin';
import TableUsersForAdmin from '../components/content/TableUsersForAdmin'
import Loading from '../components/content/Loading';

import { useSelector, useDispatch } from 'react-redux';
import { setUsers } from '../features/user/userSlice.js';
const GetUsers = () => {
    const users = useSelector((state) => state.user.users)
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        async function getUsers() {
            const data = await fetch('http://127.0.0.1:8000/api/users', {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            }).catch(e => console.log(e))
            const fetchedUsers = await data.json();
            dispatch(setUsers(fetchedUsers));
            setIsLoading(true);
        }
        if (users === null) {
            setIsLoading(false);
            getUsers();
        } else {
            setIsLoading(true);
        }

        async function getUsersBySearch(text) {
            const data = await fetch(`${process.env.REACT_APP_API_URL}get/user?search=${text}`, {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            }).catch(e => console.log(e))
            const fetchedUsers = await data.json();
            dispatch(setUsers(fetchedUsers.users));
            setIsLoading(true);
        }

        const searchInput = document.querySelector('.search');
        const form = document.forms[0];
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            if (searchInput.value.length > 0) {
                getUsersBySearch(searchInput.value)
            } else {
                getUsers();
            }
        })
    }, [])
    return (
        <div className="users">
            <SearchForAdmin />
            {isLoading ? <TableUsersForAdmin users={users} /> : <Loading />}
        </div>
    );
};

export default GetUsers;