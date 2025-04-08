import { useEffect, useRef } from "react";

const CreateProfile = () => {
    const requestSent = useRef(false);
    useEffect(() => {
        const form_submit = document.querySelector('.form_submit');


        const handleSubmit = (e) => {
            const form = document.forms[0];
            if (form.checkValidity()) {
                e.preventDefault();
                const bio = document.getElementById('floatingBio').value;
                const address = document.getElementById('floatingInput').value;
                const avatar = document.getElementById('formFile').files[0];

                const formData = new FormData();
                formData.append('bio', bio);
                formData.append('address', address);
                formData.append('avatar', avatar);

                if (!requestSent.current) {
                    fetch('http://127.0.0.1:8000/api/profile', {
                        method: 'POST',
                        headers: {
                            "Authorization": "Bearer " + localStorage.getItem('token')
                        },
                        body: formData
                    })
                        .then(r => r.json())
                        .then(data => {
                            if (data.message === "success") {
                                alert('Профиль успешно создан!');
                                localStorage.removeItem('create_profile')
                                window.location.href = '/profile';
                            }
                            console.log(data);
                        })
                        .catch(e => console.log(e));
                }
            }
        }

        form_submit.addEventListener('click', handleSubmit)

        return () => {
            requestSent.current = false;
            form_submit.removeEventListener('click', handleSubmit);
        }
    }, [])
    return (
        <div className="createProfile justify-content-center d-flex mt-5">
            <div className="wrapper">
                <h1 className="text-center">Дополните свой профиль:</h1>
                <form>
                    <div className="form-floating mb-3">
                        <textarea
                            type="text"
                            className="form-control"
                            id="floatingBio"
                            required
                        ></textarea>
                        <label htmlFor="floatingBio">Ваша биография</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="floatingInput"
                            placeholder="name@example.com"
                            required
                        />
                        <label htmlFor="floatingInput">Ваш адресс</label>
                    </div>

                    <div className="mb-3 select_file">
                        <label
                            htmlFor="formFile"
                            className="form-label label_select_file"
                        >
                            Добавьте фото профиля
                        </label>
                        <input
                            className="form-control post_file"
                            type="file"
                            id="formFile"
                            required
                        />
                    </div>

                    <button
                        className="btn btn-primary w-100 py-2 mb-3 form_submit"
                        type="submit"
                    >
                        Сохранить
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateProfile;