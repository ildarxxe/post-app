import { Link } from "react-router";
const Header = () => {
    const isLogged = localStorage.getItem('isLogged');
    const role = localStorage.getItem('role');
    return (
        <header data-bs-theme="dark">
            <div className="collapse text-bg-dark" id="navbarHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8 col-md-7 py-4">
                            <h4>Про нас</h4>
                            <p className="text-body-secondary">
                                Добро пожаловать в PostApp! Здесь вы можете
                                делиться своими мыслями, идеями и новостями в
                                формате коротких постов и участвовать в
                                обсуждениях. Никаких лишних функций — только
                                посты, комментарии и общение.
                            </p>
                        </div>
                        <div className="col-sm-4 offset-md-1 py-4">
                            <h4>Навигация</h4>
                            <ul className="list-unstyled">
                                <li>
                                    <Link to="/" className="text-white">
                                        Главная
                                    </Link>
                                </li>
                                {isLogged === "true" ? <><li>
                                    <Link to="/posts" className="text-white">
                                        Посты
                                    </Link>
                                </li>
                                    <li>
                                        <Link
                                            to="/posts/create"
                                            className="text-white"
                                        >
                                            Создать пост
                                        </Link>
                                    </li><li>
                                        <Link
                                            to="/profile"
                                            className="text-white"
                                        >
                                            Профиль
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/users"
                                            className="text-white"
                                        >
                                            Пользователи
                                        </Link>
                                    </li>
                                    {role == "2" ? <li>
                                        <Link
                                            to="/admin"
                                            className="text-white"
                                        >
                                            Админ панель
                                        </Link>
                                    </li> : ""}
                                </> : <li>
                                    <Link to="/auth" className="text-white">
                                        Войти или создать аккаунт
                                    </Link>
                                </li>}

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="navbar navbar-dark bg-dark shadow-sm">
                <div className="container">
                    <a
                        href="/"
                        className="navbar-brand d-flex align-items-center"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="none"
                            stroke="currentColor"
                            aria-hidden="true"
                            className="me-2"
                            viewBox="0 0 24 24"
                        >
                            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                            <circle cx="12" cy="13" r="4" />
                        </svg>
                        <strong>PostApp</strong>
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarHeader"
                        aria-controls="navbarHeader"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
