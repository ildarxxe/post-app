<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>User | {{ $data['name'] }}</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="{{ asset('css/userPage.css') }}">
</head>

<body data-bs-theme="dark">
    <div class="profile">
        <h1 class="text-center">Профиль</h1>
        <div class="profile_info">
            <div class="avatar_box text-center m-3">
                <img class='span avatar' src="{{ $data['avatar'] }}" alt="Avatar" />
            </div>
            <h3>Имя: <span class="name span">{{ $data['name'] }}</span></h3>
            <h3>Email: <span class="email span">{{ $data['email'] }}</span></h3>
            <h3>Биография: <span class="bio span">{{ $data['bio'] }}</span></h3>
            <h3>Адресс: <span class="address span">{{ $data['address'] }}</span></h3>
        </div>
    </div>
</body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
    crossorigin="anonymous"></script>

</html>