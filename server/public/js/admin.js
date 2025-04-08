document.addEventListener('DOMContentLoaded', () => {
    const rows = document.querySelectorAll('.admin_table_row');
    rows.forEach(row => {
        row.addEventListener('click', () => {
            const id = row.dataset.id;
            window.location.href = `/users/${id}`
        })
    })
})