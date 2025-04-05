import { Link } from 'react-router';
const Post = ({ desc, img, id }) => {
    return (
        <div className="card shadow-sm">
            <img
                src={img}
                className="card_img"
                alt="img"
            />
            <div className="card-body">
                <p className="card-text">{desc}</p>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                        <Link
                            to={`/posts/${id}`}
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                        >
                            View
                        </Link>
                    </div>
                    <small className="text-body-secondary time_stamp">

                    </small>
                </div>
            </div>
        </div>
    );
};

export default Post;
