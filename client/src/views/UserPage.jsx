import { useEffect, useState } from 'react';
import { useParams } from 'react-router'
import userService from '../api/services/UserService.js';
import adminService from '../api/services/AdminService.js';
import headers from '../utils/headersForRequests.js';
const UserPage = () => {
    const [userInfo, setUserInfo] = useState(null);
    const [profile, setProfile] = useState(null);
    const [profileInfo, setProfileInfo] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const { id } = useParams();
    useEffect(() => {
        async function getUser() {
            const user = await userService.getUserById(id, headers());
            setUserInfo(user);
        }
        getUser();

        async function getProfile() {
            const fetchedProfile = await adminService.getProfileById(id, headers());
            setProfile(fetchedProfile);
        }
        getProfile();
    }, [])

    useEffect(() => {
        if (userInfo && profile) {
            setProfileInfo([userInfo, profile])
        }
    }, [userInfo, setUserInfo, profile, setProfile])


    useEffect(() => {

        if (profileInfo) {
            setIsLoading(true);
        }
        if (isLoading) {
            const spans = document.querySelectorAll('.span')
            if (spans.length > 0) {
                profileInfo.map((info) => {
                    if (info.name) {
                        spans[1].textContent = `Имя: ${info.name}`;
                        spans[2].textContent = `Email: ${info.email}`;
                    } else {
                        spans[0].src = info.avatar !== '' ? info.avatar : process.env.REACT_APP_STATIC_IMAGE;
                        spans[3].textContent = `Биография: ${info.bio}`;
                        spans[4].textContent = `Адресс: ${info.address}`;
                    }
                })
            }
            document.querySelector('.loading').style.display = "none";
        }
    }, [profileInfo, setProfileInfo, isLoading, setIsLoading])

    return (
        <div className="profile">
            <h1 className="text-center">Профиль</h1>
            <div className="profile_info">
                <span className='loading'>Loading</span>
                <div className="avatar_box text-center m-3">
                    <img className='span avatar' alt="Avatar" />
                </div>
                <h3><span className="name span"></span></h3>
                <h3><span className="email span"></span></h3>
                <h3><span className="bio span"></span></h3>
                <h3><span className="address span"></span></h3>
            </div>
        </div>
    );
};

export default UserPage;