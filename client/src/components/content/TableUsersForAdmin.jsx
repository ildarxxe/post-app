const TableUsersForAdmin = ({ users }) => {
    return (
        <table className="table admin_table mt-5 table-secondary">
            <thead>
                <tr>
                    <th scope="col">№</th>
                    <th scope="col">user_id</th>
                    <th scope="col">name</th>
                    <th scope="col">email</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, id) =>
                    <tr className="admin_table_row" key={user.id} data-id={user.id}>
                        <th scope="row">{id + 1}</th>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

export default TableUsersForAdmin;