import { useEffect, useRef } from "react";

const CreatePost = () => {
    const requestSent = useRef(false);
    useEffect(() => {
        const submit = document.querySelector(".post_submit");
        submit.addEventListener("click", () => {
            if (!requestSent.current) {
                const file = document.querySelector(".post_file").files[0];
                const description =
                    document.querySelector(".description").value;

                const formData = new FormData();
                formData.append("file", file);
                formData.append("description", description);
                fetch("http://127.0.0.1:8000/api/posts/create", {
                    method: "POST",
                    headers: {
                        "Authorization": "Bearer " + localStorage.getItem('token')
                    },
                    body: formData,
                })
                    .then((r) => r.json())
                    .then((data) => {
                        if (data.message === "success") {
                            alert("Пост успешно создан!");
                            window.location.href = "/posts";
                        }
                    })
                    .catch((e) => console.log(e));
            }
        });
        return () => {
            requestSent.current = false;
        };
    });
    return (
        <div className="form-posts w-100 m-auto">
            <form>
                <h1 className="h3 mb-3 fw-normal">Создать пост</h1>

                <div className="mb-3 select_file">
                    <label
                        htmlFor="formFile"
                        className="form-label label_select_file"
                    >
                        Добавьте изображение поста
                    </label>
                    <input
                        className="form-control post_file"
                        type="file"
                        id="formFile"
                    />
                </div>
                <div className="form-floating mb-3">
                    <textarea
                        className="form-control description"
                        id="description"
                        placeholder="Description"
                        required
                    ></textarea>
                    <label htmlFor="description">Описание</label>
                </div>

                <button
                    className="btn btn-primary w-100 py-2 post_submit"
                    type="button"
                >
                    Отправить
                </button>
            </form>
        </div>
    );
};

export default CreatePost;
