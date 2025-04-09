import { useEffect, useState } from 'react';
import SearchForAdmin from '../components/content/SearchForAdmin';
import TableUsersForAdmin from '../components/content/TableUsersForAdmin'
import Loading from '../components/content/Loading';

import { useSelector, useDispatch } from 'react-redux';
import { setUsers } from '../features/user/userSlice.js';

import userService from '../api/services/UserService.js';
import headers from '../utils/headersForRequests.js';
const GetUsers = () => {
    const users = useSelector((state) => state.user.users)
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        async function getUsers() {
            const fetchedUsers = await userService.getAll(headers());
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
            const fetchedUsers = await userService.getUserBySearch(text, headers());
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