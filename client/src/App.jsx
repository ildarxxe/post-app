import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

import Home from "./views/Home";
import Auth from "./views/Auth";
import Reg from "./views/Reg";
import Posts from "./views/Posts";
import CreatePost from "./views/CreatePost";
import Profile from "./views/Profile";
import PostPage from "./views/PostPage";
import PostEdit from "./views/PostEdit";
import CreateProfile from "./views/CreateProfile";
import Admin from "./views/Admin";
import UserPage from "./views/UserPage";
import GetUsers from "./views/GetUsers";

import "./styles/global.css";

import { BrowserRouter, Route, Routes, Navigate } from "react-router";

function App() {
    const isLogged = localStorage.getItem('isLogged');
    const isCreateProfile = localStorage.getItem('create_profile');
    const role = localStorage.getItem('role');

    return (
        <BrowserRouter>
            <Header />
            <main>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route
                        exact
                        path="/auth"
                        element={!isLogged ? <Auth /> : <Navigate to="/" />}
                    />
                    <Route
                        exact
                        path="/reg"
                        element={!isLogged ? <Reg /> : <Navigate to="/" />}
                    />

                    {isCreateProfile !== "true" ? (
                        <>
                            <Route
                                exact
                                path="/posts"
                                element={isLogged ? <Posts /> : <Navigate to="/auth" />}
                            />
                            <Route
                                exact
                                path="/posts/create"
                                element={isLogged ? <CreatePost /> : <Navigate to="/auth" />}
                            />
                            <Route
                                exact
                                path="/profile"
                                element={isLogged ? <Profile /> : <Navigate to="/auth" />}
                            />
                            <Route
                                exact
                                path="/posts/:id"
                                element={isLogged ? <PostPage /> : <Navigate to="/auth" />}
                            />
                            <Route
                                exact
                                path="/posts/:id/edit"
                                element={isLogged ? <PostEdit /> : <Navigate to="/auth" />}
                            />
                            <Route
                                exact
                                path="/users/:id"
                                element={isLogged ? <UserPage /> : <Navigate to="/auth" />}
                            />
                            <Route
                                exact
                                path="/admin"
                                element={isLogged ? (role == '2' ? <Admin /> : <Navigate to="/" />) : <Navigate to="/auth" />}
                            />
                            <Route
                                exact
                                path="/users"
                                element={isLogged ? <GetUsers /> : <Navigate to="/auth" />}
                            />
                            <Route path="*" element={<Navigate to="/" />} />
                        </>
                    ) : (
                        <Route path="*" element={<Navigate to="/profile/create" />} />
                    )}

                    <Route
                        exact
                        path="/profile/create"
                        element={isCreateProfile === "true" ? <CreateProfile /> : <Navigate to="/profile" />}
                    />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    );
}

export default App;