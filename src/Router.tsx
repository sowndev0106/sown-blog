import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage";
import NotFoundPage from "./page/NotFoundPage";
import Layout from "./layout/Layout";
import ResumePage from "./page/ResumePage";
import PostPage from "./page/PostPage";


export default function Router() {
    return (
        <BrowserRouter >
            <Routes >
                <Route path="/" element={<Layout />} >
                    <Route index element={<HomePage />} />
                    <Route path="/resume" element={<ResumePage />} />
                    <Route path="/post/*" element={<PostPage />} />
                    <Route path="*" element={< NotFoundPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}