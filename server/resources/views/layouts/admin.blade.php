<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Laravel | Admin</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <style>
        .form_search {
            width: 30%;
            margin: 0 auto;
        }

        .admin_table {
            width: 70%;
            margin: 0 auto;
        }

        .admin_table_row {
            cursor: pointer;
        }
    </style>
</head>

<body data-bs-theme="dark">
    <div class="searchForAdmin mt-4">
        <form class="d-flex form_search" role="search">
            <input class="form-control me-2 search" type="search" placeholder="Поиск..." aria-label="Search" />
            <button class="btn btn-outline-success" type="submit">Поиск</button>
        </form>
    </div>

    <table class="table admin_table mt-5 table-secondary">
        <thead>
            <tr>
                <th scope="col">№</th>
                <th scope="col">user_id</th>
                <th scope="col">name</th>
                <th scope="col">email</th>
            </tr>
        </thead>
        <tbody>
            @php
                $count = 1;
            @endphp
            @foreach ($data as $user)
                        <tr class="admin_table_row" key={{ $user->id }} data-id={{ $user->id }}>
                            <th scope="row">
                                {{ $count }}
                            </th>
                            <td>{{ $user->id }}</td>
                            <td>{{ $user->name }}</td>
                            <td>{{ $user->email }}</td>
                        </tr>
                        @php
                            $count += 1;
                        @endphp
            @endforeach

        </tbody>
    </table>
</body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
    crossorigin="anonymous"></script>
<script src="{{ asset('js/admin.js') }}"></script>

</html>