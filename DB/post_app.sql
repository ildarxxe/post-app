-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Хост: localhost
-- Время создания: Апр 05 2025 г., 18:01
-- Версия сервера: 9.2.0
-- Версия PHP: 8.1.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `post_app`
--

-- --------------------------------------------------------

--
-- Структура таблицы `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `migrations`
--

CREATE TABLE `migrations` (
  `id` int UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2025_03_30_085425_create_posts_table', 1),
(6, '2025_03_30_115724_create_timestamp_to_posts_table', 2),
(7, '2025_04_01_114437_create_profile_table', 3),
(8, '2025_04_01_122715_add_column_avatar_to_profile', 4),
(9, '2025_04_01_142601_add_column_user_id_to_profiles', 5),
(10, '2025_04_03_180708_created_table_role', 6),
(11, '2025_04_03_181028_add_column_role_in_users', 7);

-- --------------------------------------------------------

--
-- Структура таблицы `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 19, 'authToken', 'f750dd500fea800d929e7c09fcfffe410028a52aefa599969626271553252115', '[\"*\"]', NULL, NULL, '2025-03-30 13:52:48', '2025-03-30 13:52:48'),
(2, 'App\\Models\\User', 19, 'authToken', '6742ca50f2c1ebc8c3f05cb039fcbe6b9dbf28a15e178e811da3b56241b70ee9', '[\"*\"]', NULL, NULL, '2025-03-30 13:52:48', '2025-03-30 13:52:48'),
(3, 'App\\Models\\User', 19, 'authToken', '42bea4cbc0c9bce2448d78a8548530ff1bc7357c9a8c9591c8661f30a7de2a9c', '[\"*\"]', NULL, NULL, '2025-03-30 13:52:48', '2025-03-30 13:52:48'),
(4, 'App\\Models\\User', 19, 'authToken', '9a0acee2c2b93942edaf8a6a4bcfc8db64ebb1ac22852d6e0af42d1dfd098dc2', '[\"*\"]', NULL, NULL, '2025-03-30 13:52:48', '2025-03-30 13:52:48'),
(5, 'App\\Models\\User', 19, 'authToken', 'e5a9a42739f78528d3929846e2f1a58cbe93e70faec15a660d2b27dac45cbd5f', '[\"*\"]', NULL, NULL, '2025-03-30 13:52:49', '2025-03-30 13:52:49'),
(6, 'App\\Models\\User', 19, 'authToken', '78a325fa0ccd32c65ea9ae3deb037eb1e2818ca31b9dbc2d938b15845f08a555', '[\"*\"]', NULL, NULL, '2025-03-30 13:52:49', '2025-03-30 13:52:49'),
(7, 'App\\Models\\User', 19, 'authToken', 'e18d9db2e2ed235e52184042bf14d1249191f6dbbfb0789289d1353ee644a911', '[\"*\"]', NULL, NULL, '2025-03-30 13:52:49', '2025-03-30 13:52:49'),
(8, 'App\\Models\\User', 19, 'authToken', '5a81a07be16ffc83c41cdda638cbe86c58804546f53e52a4129bdc4b8c193e0f', '[\"*\"]', NULL, NULL, '2025-03-30 13:52:49', '2025-03-30 13:52:49'),
(9, 'App\\Models\\User', 19, 'authToken', '217a0c0c481eabb6057362133a30bff9e307015aae096bd130f72ac69487a49a', '[\"*\"]', NULL, NULL, '2025-03-30 13:52:49', '2025-03-30 13:52:49'),
(10, 'App\\Models\\User', 19, 'authToken', 'cb37087cfc287d254d28471b98293e420bb07f050555f05c3a9464cbec603973', '[\"*\"]', NULL, NULL, '2025-03-30 13:52:50', '2025-03-30 13:52:50'),
(11, 'App\\Models\\User', 19, 'authToken', '94fb919aa7e3d8cd90d6ecaccd51b0c2611da14064027be89b528960703616ad', '[\"*\"]', NULL, NULL, '2025-03-30 13:54:52', '2025-03-30 13:54:52'),
(12, 'App\\Models\\User', 19, 'authToken', '1d74e8174a779c2a175f9c5260ae72f6c72a3b8cc1cc2579bc1d40d5fe000844', '[\"*\"]', NULL, NULL, '2025-03-30 13:54:52', '2025-03-30 13:54:52'),
(13, 'App\\Models\\User', 19, 'authToken', 'd8fd6af26c0bd9b2cc1db3a2d20c54c5984836c21b49a5321ff885bf54595652', '[\"*\"]', NULL, NULL, '2025-03-30 13:54:52', '2025-03-30 13:54:52'),
(14, 'App\\Models\\User', 19, 'authToken', 'eadd9f8f8c3f42023342e7577abf00324fc4317fe7829c8ee2e16407385fbb68', '[\"*\"]', NULL, NULL, '2025-03-30 13:54:53', '2025-03-30 13:54:53'),
(15, 'App\\Models\\User', 19, 'authToken', '09f5a0c9cda0f00362ea9266b8ad2b0647a2178aec6433ebdca4435cf4ca9968', '[\"*\"]', NULL, NULL, '2025-03-30 13:54:53', '2025-03-30 13:54:53'),
(16, 'App\\Models\\User', 19, 'authToken', '99495f60eee3b75388d074e8fcdb3a401366d3ea06f0f9f670cb88f3b303d788', '[\"*\"]', NULL, NULL, '2025-03-30 13:54:53', '2025-03-30 13:54:53'),
(17, 'App\\Models\\User', 19, 'authToken', '68649d181cd1164f42fbb5104008ac8f2b566630944762de198170fa8c1f14db', '[\"*\"]', NULL, NULL, '2025-03-30 13:54:53', '2025-03-30 13:54:53'),
(18, 'App\\Models\\User', 19, 'authToken', '2ac82f5267b99d4936fa7006364835b11ee9864868cb03d3ccdba9c7f661f7bb', '[\"*\"]', NULL, NULL, '2025-03-30 13:54:53', '2025-03-30 13:54:53'),
(19, 'App\\Models\\User', 19, 'authToken', 'e03009ab16ccebbe71c6a90a595866b0e0e1ad4a57138cd3c7402099317444fa', '[\"*\"]', NULL, NULL, '2025-03-30 13:54:54', '2025-03-30 13:54:54'),
(20, 'App\\Models\\User', 19, 'authToken', 'bf4fa4052c179145470e45a5f83eff7b7548c9c382e35f412393c504326125fb', '[\"*\"]', NULL, NULL, '2025-03-30 13:54:54', '2025-03-30 13:54:54'),
(21, 'App\\Models\\User', 19, 'authToken', '7c3ffe0fabceca6b698228981978ae0dc773b53d030f7fc11875ae5b3efae9b6', '[\"*\"]', NULL, NULL, '2025-03-31 08:39:51', '2025-03-31 08:39:51'),
(22, 'App\\Models\\User', 19, 'authToken', '2843185517869afdb4238f1bb2e9797bea40fa97d0a1058d871517c2c3555d74', '[\"*\"]', NULL, NULL, '2025-03-31 08:39:51', '2025-03-31 08:39:51'),
(23, 'App\\Models\\User', 19, 'authToken', '2d12ddbd116876d11868b99707d9ea35f500449d4c344624efb321b420b7b106', '[\"*\"]', NULL, NULL, '2025-03-31 08:39:51', '2025-03-31 08:39:51'),
(24, 'App\\Models\\User', 19, 'authToken', 'f8476a5859dae45dbc57ac3582e507972fda1192db56dc63c8542fe673c57e0b', '[\"*\"]', NULL, NULL, '2025-03-31 08:39:52', '2025-03-31 08:39:52'),
(25, 'App\\Models\\User', 19, 'authToken', '1cebb8cb7105df0f8e8b2dc269188a9e5aa8f6bbc82015dff87009d63f8a49aa', '[\"*\"]', NULL, NULL, '2025-03-31 08:39:52', '2025-03-31 08:39:52'),
(26, 'App\\Models\\User', 19, 'authToken', 'aea15200ba93b619e0657eea23cd48ba7ec690b3d10ba5c96d5c262e6af92b34', '[\"*\"]', NULL, NULL, '2025-03-31 08:39:52', '2025-03-31 08:39:52'),
(27, 'App\\Models\\User', 19, 'authToken', '073cb8fb9edc984ae47cc56674956506421bcd8b72c15cf53d7517555ac5e9b2', '[\"*\"]', NULL, NULL, '2025-03-31 08:39:52', '2025-03-31 08:39:52'),
(28, 'App\\Models\\User', 19, 'authToken', 'b771a83143e6e7561ae3dc390edfe515711217f2a713acbf45502865fe54019f', '[\"*\"]', NULL, NULL, '2025-03-31 08:39:52', '2025-03-31 08:39:52'),
(29, 'App\\Models\\User', 19, 'authToken', '88474b5e225d97198ece6e0d3825093a74a2e9362d28105986c1336f329e8025', '[\"*\"]', '2025-03-31 08:41:04', NULL, '2025-03-31 08:39:53', '2025-03-31 08:41:04'),
(30, 'App\\Models\\User', 19, 'authToken', '1f2508713a77c7b97adbf43cd84c6d2e6d4a821b40cf4f42875789d0a7043b94', '[\"*\"]', '2025-03-31 08:46:03', NULL, '2025-03-31 08:44:55', '2025-03-31 08:46:03'),
(31, 'App\\Models\\User', 19, 'authToken', '0259b454b97bb42f505eb0805e1051c8ca4edb59782bb8701aa0b171d04b9110', '[\"*\"]', NULL, NULL, '2025-03-31 08:47:32', '2025-03-31 08:47:32'),
(32, 'App\\Models\\User', 19, 'authToken', 'cf85be89c72fe2dd7c9e4e64ac19844963dcc1b28a6415a304a60849abcc7aea', '[\"*\"]', NULL, NULL, '2025-03-31 08:48:17', '2025-03-31 08:48:17'),
(33, 'App\\Models\\User', 19, 'authToken', 'db3c006920fb2467362a2bd286ad31d93b63c5e38f5639dd740efaad0e7a1c13', '[\"*\"]', NULL, NULL, '2025-03-31 08:48:33', '2025-03-31 08:48:33'),
(34, 'App\\Models\\User', 19, 'authToken', 'cc2ac6ec6fda48b1938b18fa9931c27fe1d476bdafebe6661515068e7a6fbe65', '[\"*\"]', NULL, NULL, '2025-03-31 08:52:54', '2025-03-31 08:52:54'),
(35, 'App\\Models\\User', 19, 'authToken', '2ebacae5196c832a4f96c0bc15338ac7603d68b8bb9ce761b7122dcb18f04053', '[\"*\"]', NULL, NULL, '2025-03-31 08:53:11', '2025-03-31 08:53:11'),
(36, 'App\\Models\\User', 19, 'authToken', '45bbf9455fdcb6f1f8a0311ca3dc6b64c26ea08286bc6daf44e36124009c425d', '[\"*\"]', NULL, NULL, '2025-03-31 08:53:39', '2025-03-31 08:53:39'),
(37, 'App\\Models\\User', 19, 'authToken', 'd61ce5e88c36aba44c055a0fdbd29941c9d438391e54d5cfc03a71443d517e07', '[\"*\"]', '2025-03-31 08:53:57', NULL, '2025-03-31 08:53:56', '2025-03-31 08:53:57'),
(38, 'App\\Models\\User', 19, 'authToken', '4cf95fe095d3160171761e895c1a7cb3eab1d02fa10f2de9e5ad6d87b0659aec', '[\"*\"]', '2025-03-31 08:54:54', NULL, '2025-03-31 08:54:53', '2025-03-31 08:54:54'),
(39, 'App\\Models\\User', 19, 'authToken', 'c7185a82de3ceffa3ee5fec6419395e9a785e374a9753d650c9559b259c2bc33', '[\"*\"]', '2025-03-31 09:57:50', NULL, '2025-03-31 09:57:49', '2025-03-31 09:57:50'),
(40, 'App\\Models\\User', 19, 'authToken', '4a06b766158c744f85dc758452ac9f38fa9e66043b2f1fce89a42d362093c57c', '[\"*\"]', '2025-03-31 10:47:41', NULL, '2025-03-31 10:47:40', '2025-03-31 10:47:41'),
(41, 'App\\Models\\User', 19, 'authToken', '70278b1480be1df4b99ca5d518201d7afe62249358922f03a2879bfba835eee9', '[\"*\"]', '2025-03-31 10:51:29', NULL, '2025-03-31 10:51:28', '2025-03-31 10:51:29'),
(42, 'App\\Models\\User', 19, 'authToken', '0bf56ff69d4511fddd7981c9111d71ba398bffecc6c26e26b6eff6be8c46efac', '[\"*\"]', '2025-03-31 10:57:16', NULL, '2025-03-31 10:57:15', '2025-03-31 10:57:16'),
(43, 'App\\Models\\User', 19, 'authToken', 'e83c514a06cbae5cebfabb747a5f8bdbc779b692b90f62970b42bba612e5cada', '[\"*\"]', '2025-03-31 12:37:11', NULL, '2025-03-31 10:58:41', '2025-03-31 12:37:11'),
(44, 'App\\Models\\User', 19, 'authToken', '55f96b0ef7053a6a892cc568711f292c82f9dc43334bd396b7b0afb05e552fdc', '[\"*\"]', '2025-04-01 06:51:23', NULL, '2025-03-31 12:38:58', '2025-04-01 06:51:23'),
(45, 'App\\Models\\User', 20, 'authToken', '7ca50aeb230e0979561779ec3b09d46c7fc48e15f864383b9c036570bf7e8589', '[\"*\"]', '2025-04-01 07:47:25', NULL, '2025-04-01 07:14:38', '2025-04-01 07:47:25'),
(46, 'App\\Models\\User', 20, 'authToken', 'ad00d86f07a9d89ee9390060125be474f94df1e15ccb6949b41ad5c10f602025', '[\"*\"]', '2025-04-01 07:47:45', NULL, '2025-04-01 07:47:44', '2025-04-01 07:47:45'),
(47, 'App\\Models\\User', 20, 'authToken', 'c678d3690067a9851a78fe85e950172802400f40d11712b2743831f441c76b8e', '[\"*\"]', NULL, NULL, '2025-04-01 07:58:00', '2025-04-01 07:58:00'),
(48, 'App\\Models\\User', 20, 'authToken', '2cbc8ce339c45e06a6207b833d351a074e7d7cc8a3d4a31f9b1ae6b11c064c74', '[\"*\"]', NULL, NULL, '2025-04-01 07:58:47', '2025-04-01 07:58:47'),
(49, 'App\\Models\\User', 20, 'authToken', 'a9556848a066e837deb8c7fa5a7e241bb43ae21433bec808ab2c854173bb0efb', '[\"*\"]', NULL, NULL, '2025-04-01 07:59:04', '2025-04-01 07:59:04'),
(50, 'App\\Models\\User', 20, 'authToken', '454cbaeabce3f439b6935828f4a09105bd2c31f759674d52e2d2c5d96cf0457c', '[\"*\"]', NULL, NULL, '2025-04-01 08:00:26', '2025-04-01 08:00:26'),
(51, 'App\\Models\\User', 20, 'authToken', 'eb9d2bc02c38ecd272b357f65d770fd5827c9695b46e0eb423e075260942c3b5', '[\"*\"]', '2025-04-01 08:06:06', NULL, '2025-04-01 08:06:04', '2025-04-01 08:06:06'),
(52, 'App\\Models\\User', 20, 'authToken', 'b5855a9358d9be9041c679b66b0ff02d5f70fbb3e2205ef1fbdcfe46965db49b', '[\"*\"]', '2025-04-01 08:06:47', NULL, '2025-04-01 08:06:46', '2025-04-01 08:06:47'),
(53, 'App\\Models\\User', 20, 'authToken', 'b45232472db00459527d3eff58bd1ff04293fbd6e8512715b7b324bc5139c62d', '[\"*\"]', '2025-04-01 08:06:58', NULL, '2025-04-01 08:06:58', '2025-04-01 08:06:58'),
(54, 'App\\Models\\User', 20, 'authToken', 'c39f4528ad3e5d993839fb04b55624cc3e5ec3aa05da9c55bbcf63026604ee18', '[\"*\"]', '2025-04-01 08:07:06', NULL, '2025-04-01 08:07:04', '2025-04-01 08:07:06'),
(55, 'App\\Models\\User', 20, 'authToken', 'bd5a49a8d23eb487673fc69b6bc87a5bb54100c1f36fa33b71f29909d2cf072d', '[\"*\"]', '2025-04-01 08:07:35', NULL, '2025-04-01 08:07:34', '2025-04-01 08:07:35'),
(56, 'App\\Models\\User', 20, 'authToken', '02644d030f98a2324f85f50ff5a78158240b4d971157cfd08c432473cc4f31ec', '[\"*\"]', '2025-04-01 08:07:43', NULL, '2025-04-01 08:07:42', '2025-04-01 08:07:43'),
(57, 'App\\Models\\User', 20, 'authToken', '757ddcb1b63a98656cc037595f6bc0a6e0266ca39ca0da8c048ee8425333eed2', '[\"*\"]', '2025-04-01 08:10:29', NULL, '2025-04-01 08:08:27', '2025-04-01 08:10:29'),
(58, 'App\\Models\\User', 20, 'authToken', 'b4eff5129a7659de112dd5e399a42ec6b843707d9d0eed0c8633e195b17df13d', '[\"*\"]', '2025-04-01 08:31:21', NULL, '2025-04-01 08:10:41', '2025-04-01 08:31:21'),
(59, 'App\\Models\\User', 20, 'authToken', 'a26a8b3cb434324b160e742c328c39d5f586d4d2743dd32a398c43e4b862469f', '[\"*\"]', '2025-04-01 08:31:54', NULL, '2025-04-01 08:31:31', '2025-04-01 08:31:54'),
(60, 'App\\Models\\User', 21, 'authToken', '10e53d4fba1d93b64fb0aedc2115177638beac4fe5ffe12aa6550f5dd8c6f316', '[\"*\"]', '2025-04-01 11:54:53', NULL, '2025-04-01 08:32:22', '2025-04-01 11:54:53'),
(61, 'App\\Models\\User', 22, 'authToken', '12d061a0b43215d3eb7921e674219a7a4dcd6d7b9c3731660573fc64de0c6fc8', '[\"*\"]', '2025-04-01 11:55:57', NULL, '2025-04-01 11:55:20', '2025-04-01 11:55:57'),
(62, 'App\\Models\\User', 20, 'authToken', 'e7a8a9eb2bb26e7e8e9fbe4e726632062b3dc07ce9496c86f6118e780e0614a7', '[\"*\"]', '2025-04-01 11:56:40', NULL, '2025-04-01 11:56:03', '2025-04-01 11:56:40'),
(63, 'App\\Models\\User', 21, 'authToken', '1f91fef992fb5801cec0a5afe79a8373503004d415647764e0bb2121e84b6d99', '[\"*\"]', '2025-04-01 12:11:11', NULL, '2025-04-01 11:56:58', '2025-04-01 12:11:11'),
(64, 'App\\Models\\User', 23, 'authToken', '02c3d4eeca103974fc73f804dade054a36333061091d514b990fe8e5a1660774', '[\"*\"]', '2025-04-02 13:32:18', NULL, '2025-04-02 13:29:39', '2025-04-02 13:32:18'),
(65, 'App\\Models\\User', 23, 'authToken', '2fae198a1b0a21f498594055d5e143c97236e86b5ccf185fc7379f35ab7183ea', '[\"*\"]', '2025-04-02 13:46:28', NULL, '2025-04-02 13:35:48', '2025-04-02 13:46:28'),
(66, 'App\\Models\\User', 23, 'authToken', '04949f2c6929ab48aca2ae0b9e40c50a33ca9e06548896fd04a61359e10e3f98', '[\"*\"]', '2025-04-03 10:49:16', NULL, '2025-04-02 13:46:48', '2025-04-03 10:49:16'),
(67, 'App\\Models\\User', 24, 'authToken', 'f2023a085ea9acd346a1d5c53145a5ddd4f557f91b4f728d1217c31ee95f6447', '[\"*\"]', '2025-04-05 12:43:05', NULL, '2025-04-03 10:54:05', '2025-04-05 12:43:05'),
(68, 'App\\Models\\User', 45, 'authToken', 'b24c5c32ff524815464cf78a1f592ab531b6e554049dad7c47b521cae2e5e9e7', '[\"*\"]', '2025-04-05 12:50:58', NULL, '2025-04-05 10:31:59', '2025-04-05 12:50:58'),
(69, 'App\\Models\\User', 45, 'authToken', '1a53ea09ce17d0bc0bc0ae9954bf3dcf5634fcf44687444c3376f63fc2666a5b', '[\"*\"]', '2025-04-05 12:56:00', NULL, '2025-04-05 12:54:30', '2025-04-05 12:56:00');

-- --------------------------------------------------------

--
-- Структура таблицы `posts`
--

CREATE TABLE `posts` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `img_path` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `profiles`
--

CREATE TABLE `profiles` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `bio` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `avatar` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `profiles`
--

INSERT INTO `profiles` (`id`, `user_id`, `bio`, `address`, `created_at`, `updated_at`, `avatar`) VALUES
(6, 24, 'Био', 'Адресс', '2025-04-03 10:54:23', '2025-04-03 10:54:23', ''),
(7, 25, 'fesefsefsef', 'sefsefsef', NULL, NULL, ''),
(8, 26, 'sefesawdawd', 'wfdadfawdawdawdawd', NULL, NULL, ''),
(9, 27, 'dawdawdawdawdwa', 'awawdawdawdawdawd', NULL, NULL, ''),
(10, 28, 'awdawdawdawdawdwad', 'awdawdawdadawdawdwad', NULL, NULL, ''),
(11, 29, 'awdawdawdawdadsegetrh6j', 'yjtyjrrhthrjtjr6jr6', NULL, NULL, ''),
(12, 30, 'welmfbwegbKCNWJI W WOECNWOEFNAKEL NWF ', 'awdawfsrgwahw4w q  er r', NULL, NULL, ''),
(13, 45, 'моя биография', 'мой адресс', '2025-04-05 10:32:46', '2025-04-05 10:32:46', 'avatars/sXGOJRWylhvv25fr1YHNXmObDUtS0NTssftBZ647.png');

-- --------------------------------------------------------

--
-- Структура таблицы `roles`
--

CREATE TABLE `roles` (
  `id` int UNSIGNED NOT NULL,
  `role` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `roles`
--

INSERT INTO `roles` (`id`, `role`) VALUES
(1, 'user'),
(2, 'admin');

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` bigint UNSIGNED NOT NULL,
  `role_id` int UNSIGNED NOT NULL DEFAULT '1',
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `role_id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(24, 2, 'User', 'user@email.com', NULL, '$2y$10$g8dheW9DnmOXP02TB.bMBODXygN9/HeYoPfCjYfTCuZcIiD/UrUeS', NULL, '2025-04-03 10:54:00', '2025-04-03 10:54:00'),
(25, 1, 'Lorna Bogisich', 'jerome.batz@example.com', '2025-04-03 11:37:31', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'KljFfEXykg', '2025-04-03 11:37:31', '2025-04-03 11:37:31'),
(26, 1, 'Wilma Langworth III', 'lowe.dulce@example.net', '2025-04-03 11:37:31', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', '6aMot4oB1F', '2025-04-03 11:37:31', '2025-04-03 11:37:31'),
(27, 1, 'Rodrigo Hettinger III', 'rwelch@example.org', '2025-04-03 11:37:31', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'n92uqVRjfz', '2025-04-03 11:37:31', '2025-04-03 11:37:31'),
(28, 1, 'Okey Padberg I', 'kreinger@example.net', '2025-04-03 11:37:31', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Yof6OEb0Bn', '2025-04-03 11:37:31', '2025-04-03 11:37:31'),
(29, 1, 'Aimee Hammes', 'hermiston.kendrick@example.net', '2025-04-03 11:37:31', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'luo4IPJpXe', '2025-04-03 11:37:31', '2025-04-03 11:37:31'),
(30, 1, 'Torrey Jacobi Sr.', 'qmiller@example.org', '2025-04-03 11:37:31', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'g1vKdPhEt7', '2025-04-03 11:37:31', '2025-04-03 11:37:31'),
(31, 1, 'Mr. Raymundo Conroy Jr.', 'goldner.rhiannon@example.net', '2025-04-03 11:37:31', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'T6Be9cEA7s', '2025-04-03 11:37:31', '2025-04-03 11:37:31'),
(32, 1, 'Chauncey Davis', 'alfonso58@example.com', '2025-04-03 11:37:31', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', '1KKywfaD2C', '2025-04-03 11:37:31', '2025-04-03 11:37:31'),
(33, 1, 'Malika Lynch', 'stella83@example.org', '2025-04-03 11:37:31', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', '8uUGTlrb1N', '2025-04-03 11:37:31', '2025-04-03 11:37:31'),
(34, 1, 'Elva Kuhn', 'darrick73@example.net', '2025-04-03 11:37:31', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'AXzCNHTkzo', '2025-04-03 11:37:31', '2025-04-03 11:37:31'),
(35, 1, 'Miss Michaela Marquardt', 'kariane.daniel@example.com', '2025-04-03 11:37:31', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'F7SKHOsiJz', '2025-04-03 11:37:31', '2025-04-03 11:37:31'),
(36, 1, 'Dr. Birdie Williamson', 'nora.hoppe@example.com', '2025-04-03 11:37:31', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', '0DnktNn49W', '2025-04-03 11:37:31', '2025-04-03 11:37:31'),
(37, 1, 'Diego Moen', 'polly.conroy@example.com', '2025-04-03 11:37:31', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'GrLkAxo9Bc', '2025-04-03 11:37:31', '2025-04-03 11:37:31'),
(38, 1, 'Ricardo Raynor', 'shaylee57@example.net', '2025-04-03 11:37:31', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', '6qED2tiQri', '2025-04-03 11:37:31', '2025-04-03 11:37:31'),
(39, 1, 'Asia Mante', 'erempel@example.net', '2025-04-03 11:37:31', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'eGrpcuam65', '2025-04-03 11:37:31', '2025-04-03 11:37:31'),
(40, 1, 'Julian Baumbach', 'hickle.emie@example.com', '2025-04-03 11:37:31', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', '9TNjxrW2IG', '2025-04-03 11:37:31', '2025-04-03 11:37:31'),
(41, 1, 'Mrs. Eveline Schuster', 'america.prohaska@example.net', '2025-04-03 11:37:31', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'SWGfWBlBzK', '2025-04-03 11:37:31', '2025-04-03 11:37:31'),
(42, 1, 'Turner Kunde', 'swift.twila@example.net', '2025-04-03 11:37:31', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'ZuPO4MN3Fx', '2025-04-03 11:37:31', '2025-04-03 11:37:31'),
(43, 1, 'Prof. Flavie Lowe I', 'skovacek@example.org', '2025-04-03 11:37:31', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'svK1dVIkJF', '2025-04-03 11:37:31', '2025-04-03 11:37:31'),
(44, 1, 'Angie Bailey', 'patricia88@example.com', '2025-04-03 11:37:31', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'keoUbSXbfl', '2025-04-03 11:37:31', '2025-04-03 11:37:31'),
(45, 1, 'username', 'email@email.com', NULL, '$2y$10$EuUMqCzkisHc3f.0BCpNGe36iuUYBzkbn2aHLcERT2KNC9584Aahu', NULL, '2025-04-05 10:31:48', '2025-04-05 10:31:48');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Индексы таблицы `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Индексы таблицы `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Индексы таблицы `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `posts_user_id_foreign` (`user_id`);

--
-- Индексы таблицы `profiles`
--
ALTER TABLE `profiles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `profile_user_id_unique` (`user_id`);

--
-- Индексы таблицы `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD KEY `users_role_id_foreign` (`role_id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT для таблицы `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=70;

--
-- AUTO_INCREMENT для таблицы `posts`
--
ALTER TABLE `posts`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT для таблицы `profiles`
--
ALTER TABLE `profiles`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT для таблицы `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Ограничения внешнего ключа таблицы `profiles`
--
ALTER TABLE `profiles`
  ADD CONSTRAINT `profile_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Ограничения внешнего ключа таблицы `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
