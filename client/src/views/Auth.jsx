import { useEffect, useState } from "react";
import { Link } from "react-router";
const Auth = () => {
    const [passwordVisibility, setPasswordVisibility] = useState(false);
    const [passwordValue, setPasswordValue] = useState("");

    const checkPasswordClick = () => {
        setPasswordVisibility(!passwordVisibility);
    };

    useEffect(() => {
        const form_submit = document.querySelector(".form_submit");
        const form = document.querySelector("form");

        const handleClick = (e) => {
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
            fetch("http://127.0.0.1:8000/api/user/auth", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: values[0],
                    password: values[1],
                }),
            })
                .then((r) => r.json())
                .then((data) => {
                    if (data.message === "success") {
                        alert("Успешная авторизация");
                        localStorage.setItem("token", data.token);
                        localStorage.setItem("role", data.role);
                        fetch("http://127.0.0.1:8000/api/user", {
                            headers: {
                                "Authorization": "Bearer " + localStorage.getItem("token"),
                                "Accept": "application/json"
                            },
                        })
                            .then(response => response.json())
                            .then(data => {
                                console.log(data)
                                if (data.user.id) {
                                    if (!data.isProfile) {
                                        localStorage.setItem("create_profile", true);
                                    }
                                    localStorage.setItem('isLogged', true);
                                    window.location.href = "/profile/create";
                                }
                            })
                            .catch((error) => {
                                console.error("Ошибка:", error);
                            });
                    }
                })
                .catch((error) => console.error("Error:", error));
        };

        form_submit.addEventListener("click", handleClick);

        return () => {
            form_submit.removeEventListener("click", handleClick);
        };
    });
    return (
        <div className="form-signin w-100 m-auto">
            <form>
                <h1 className="h3 mb-3 fw-normal">Вход</h1>

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
                        value={passwordValue}
                        onChange={(e) => setPasswordValue(e.target.value)}
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                        required
                    />
                    <label htmlFor="floatingPassword">Пароль</label>
                </div>

                <div className="checkPassBox">
                    <span
                        className="checkPassword"
                        onClick={checkPasswordClick}
                    >
                        {passwordVisibility
                            ? "Скрыть пароль"
                            : "Показать пароль"}
                    </span>
                </div>

                <div className="form-check text-start my-3">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        value="remember-me"
                        id="flexCheckDefault"
                    />
                    <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                    >
                        Запомнить меня
                    </label>
                </div>
                <button
                    className="btn btn-primary w-100 py-2 form_submit"
                    type="submit"
                >
                    Войти
                </button>
                <br />
                <span className="or">или</span>
                <br />
                <Link to="/reg">Зарегистрироваться</Link>
            </form>
        </div>
    );
};

export default Auth;
