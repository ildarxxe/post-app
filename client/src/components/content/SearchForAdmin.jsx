const SearchForAdmin = () => {
    return (
        <div className="searchForAdmin mt-4">
            <form className="d-flex form_search" role="search">
                <input className="form-control me-2 search" type="search" placeholder="Введите id пользователя" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Посик</button>
            </form>
        </div>
    );
};

export default SearchForAdmin;