import { useEffect, useState } from "react";
import { Link } from 'react-router';
import Modal from "../components/content/Modal";

import { useSelector, useDispatch } from 'react-redux';
import { setProfile } from '../features/profile/profileSlice.js';
import { setUserInfo } from '../features/user/userSlice.js';
import Loading from "../components/content/Loading.jsx";

import headers from '../utils/headersForRequests.js';
import profileService from "../api/services/ProfileService.js";
import userService from '../api/services/UserService.js';
function Profile() {
    const [profileInfo, setProfileInfo] = useState(null);

    const profile = useSelector((state) => state.profile.profile)
    const userInfo = useSelector((state) => state.user.userInfo)
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        async function getUser() {
            const user = await userService.getMe(headers());
            dispatch(setUserInfo([user]));
        }

        async function getProfile() {
            const fetchedProfile = await profileService.get(headers());
            if (fetchedProfile.error) {
                alert(fetchedProfile.error)
                localStorage.setItem('create_profile', true);
                window.location.href = '/profile/create'
            }
            dispatch(setProfile([fetchedProfile]));
        }
        if (profile === null && userInfo === null) {
            getUser();
            getProfile();
        } else {
            setIsLoading(true);
        }
    }, [])

    useEffect(() => {
        if (userInfo && profile) {
            setProfileInfo([userInfo, profile]);
            setIsLoading(true);
        }
    }, [profile, setProfile, userInfo, setUserInfo])

    const [showModalLogout, setShowModalLogout] = useState(false);
    const [showModalDelete, setShowModalDelete] = useState(false);
    const [showModalChange, setShowModalChange] = useState(false);

    const handleLogout = () => {
        setShowModalLogout(true);
    };
    useEffect(() => {
        const handleConfirmDelete = () => {
            localStorage.clear();
            setShowModalLogout(false);
            window.location.reload();
        };

        const handleCancelDelete = () => {
            setShowModalLogout(false);
        };

        const btn_confirm = document.querySelector('.btn_confirm');
        if (btn_confirm) {
            btn_confirm.addEventListener('click', handleConfirmDelete);
        }

        const btn_cancel = document.querySelectorAll('.btn_cancel');
        btn_cancel.forEach(btn => {
            btn.addEventListener('click', handleCancelDelete);
        });
    }, [showModalLogout, setShowModalLogout])

    const handleDelete = () => {
        setShowModalDelete(true);
    }
    useEffect(() => {
        async function deleteUser() {
            const data = await userService.deleteUser(headers());
            if (data.message === "success") {
                localStorage.clear();
                setShowModalLogout(false);
                window.location.reload();
            }
        }
        const btn_confirm = document.querySelector('.btn_confirm');
        if (btn_confirm) {
            btn_confirm.addEventListener('click', function () {
                deleteUser();
            })
        }

        const btn_cancel = document.querySelectorAll('.btn_cancel');
        if (btn_cancel) {
            btn_cancel.forEach(btn => {
                btn.addEventListener('click', function () {
                    setShowModalDelete(false);
                });
            });
        }
    }, [showModalDelete, setShowModalDelete])

    const handleChange = () => {
        showModalChange ? setShowModalChange(false) : setShowModalChange(true)
    }

    function closeModalChange() {
        setShowModalChange(false)
    }

    useEffect(() => {
        if (showModalChange && profileInfo && Array.isArray(profileInfo)) {
            const name = document.querySelector('.name').textContent;
            const email = document.querySelector('.email').textContent;
            const bio = document.querySelector('.bio').textContent;
            const address = document.querySelector('.address').textContent;
            const data = [name, email, bio, address];

            const inputs = document.querySelectorAll('.form-control');
            let count = 1;
            data.forEach(input => {
                inputs[count].value = input;
                count++;
            })
        }
    }, [showModalChange, setShowModalChange, profileInfo, setProfileInfo])

    async function updateProfile(formData) {
        const data = await profileService.update(formData, headers());
        if (data.message === "success") {
            window.location.reload();
        }
    }

    const submitForm = (e) => {
        e.preventDefault();
        const form = e.target;
        if (form.checkValidity()) {
            const formData = new FormData(form);
            updateProfile(formData)
        }
    }

    return (
        <>
            <div className="profile">
                <h1 className="text-center">Профиль</h1>
                {isLoading ? (profileInfo && Array.isArray(profileInfo)) ? (
                    profileInfo[0] && profileInfo[0][0] && profileInfo[1] && profileInfo[1][0] ? (
                        <div>
                            {profileInfo[1][0].profile && (
                                <div className="text-center">
                                    <img className="avatar" src={profileInfo[1][0].profile.avatar} alt="avatar" />
                                </div>
                            )}
                            {profileInfo[0][0].user && (
                                <div>
                                    <h2>Имя: <span className="name">{profileInfo[0][0].user.name}</span></h2>
                                    <h2>Email: <span className="email">{profileInfo[0][0].user.email}</span></h2>
                                </div>
                            )}
                            {profileInfo[1][0].profile && (
                                <div>
                                    <h2>Биография: <span className="bio">{profileInfo[1][0].profile.bio}</span></h2>
                                    <h2>Адресс: <span className="address">{profileInfo[1][0].profile.address}</span></h2>
                                </div>
                            )}
                        </div>
                    ) : (
                        <p>Данные не найдены</p>
                    )
                ) : <Loading /> : <Loading />}
                <div className="links_profile">
                    <Link to="#" onClick={handleChange}>Изменить</Link>
                    <Link to="#" onClick={handleLogout}>Выйти из аккаунта</Link>
                    <Link to="#" onClick={handleDelete}>Удалить аккаунт</Link>
                </div>
            </div >
            {showModalLogout ? <Modal warn={'Вы уверены, что хотите выйти из аккаунта?'} /> : ""}
            {showModalDelete ? <Modal warn={'Вы уверены, что хотите <strong style="color: #ff4040">удалить аккаунт</strong>? Удалив аккаунт, вы удалите свои посты и профиль!'} /> : ""}
            {showModalChange ?
                <form onSubmit={submitForm} className="form_change_profile">
                    <div className="modal-header border-bottom-0 change_profile_close">
                        <h1 className="modal-title">Измените профиль</h1>
                        <button type="button" className="btn-close btn_cancel" onClick={closeModalChange} aria-label="Close"></button>
                    </div>
                    <div className="mb-3 select_file">
                        <label
                            htmlFor="formFile"
                            className="form-label label_select_file"
                        >
                            Обновите фото профиля
                        </label>
                        <input
                            className="form-control post_file"
                            type="file"
                            id="formFile"
                            name="avatar"
                        />
                    </div>

                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="name"
                            id="floatingName"
                            name="name"
                            required
                        />
                        <label htmlFor="floatingName">Имя</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input
                            type="email"
                            className="form-control"
                            id="floatingInput"
                            placeholder="name@example.com"
                            name="email"
                            required
                        />
                        <label htmlFor="floatingInput">Email</label>
                    </div>

                    <div className="form-floating mb-3">
                        <textarea
                            type="text"
                            className="form-control"
                            id="floatingBio"
                            name="bio"
                            required
                        ></textarea>
                        <label htmlFor="floatingBio">Ваша биография</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="address"
                            id="floatingAddress"
                            name="address"
                            required
                        />
                        <label htmlFor="floatingAddress">Адресс</label>
                    </div>

                    <button
                        className="btn btn-primary w-100 py-2 form_submit"
                        type="submit"
                    >
                        Сохранить
                    </button>
                </form>
                : ""}

        </>
    );
}

export default Profile;