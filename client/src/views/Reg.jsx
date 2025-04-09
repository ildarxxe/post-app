import { Link } from "react-router";
import { useEffect, useState } from "react";
import userService from "../api/services/UserService";
import headers from '../utils/headersForRequests.js';
const Reg = () => {
    const [passwordVisibility, setPasswordVisibility] = useState(false);
    const checkPasswordClick = () => {
        setPasswordVisibility(!passwordVisibility);
    };

    useEffect(() => {
        const form_submit = document.querySelector(".form_submit");
        const form = document.querySelector("form");

        async function create(values) {
            const data = JSON.stringify({
                name: values[0],
                email: values[1],
                password: values[2],
            });
            const headers = headers();
            const res = userService.createUser(data, headers);
            if (res.message === "success") {
                alert("Успешная регистрация");
                window.location.href = "/auth";
            }
        }

        form_submit.addEventListener("click", (e) => {
            if (!form.checkValidity()) {
                e.preventDefault();
                form.reportValidity();
                return;
            }

            e.preventDefault();
            const inputs = document.querySelectorAll("input");
            const values = [];
            inputs.forEach((input) => {
                values.push(input.value);
            });
            create();
        });
    });
    return (
        <div className="form-signin w-100 m-auto">
            <form>
                <h1 className="h3 mb-3 fw-normal">Регистрация</h1>

                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="floatingName"
                        placeholder="name@example.com"
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
                        required
                    />
                    <label htmlFor="floatingInput">Email</label>
                </div>

                <div className="form-floating mb-3">
                    <input
                        type={passwordVisibility ? "text" : "password"}
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                        required
                        name="password"
                    />
                    <label htmlFor="floatingPassword">Пароль</label>
                </div>

                <div className="form-floating mb-3">
                    <input
                        type={passwordVisibility ? "text" : "password"}
                        className="form-control"
                        id="floatingConfirmPassword"
                        placeholder="Password"
                        required
                        name="password_confirmation"
                    />
                    <label htmlFor="floatingConfirmPassword">
                        Подтвердите пароль
                    </label>
                </div>

                <div className="checkPassBox mb-3">
                    <span
                        className="checkPassword"
                        onClick={checkPasswordClick}
                    >
                        {passwordVisibility
                            ? "Скрыть пароль"
                            : "Показать пароль"}
                    </span>
                </div>

                <button
                    className="btn btn-primary w-100 py-2 mb-3 form_submit"
                    type="submit"
                >
                    Создать
                </button>
                <span className="or mb-3">уже есть аккаунт? </span>
                <Link to="/auth">Войти</Link>
            </form>
        </div>
    );
};

export default Reg;
