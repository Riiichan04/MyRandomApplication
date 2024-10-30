import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LoginPage from './page/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './page/Home';
import News from './page/News';
import preloadData from './api/preloadData';
import ErrorBoundary from './page/components/ErrorBoundary';

const listNews = []
await preloadData(null, "/api/loadNews", [["start", "0"], ["amount", "max"]])
    .then(result => result.map(news => {
        const title = news.title.normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[!@%^*()+=<>?\/,.:;'"&#\[\]~$_`\-{}|\\]/g, "")
            .replace(/\s+/g, "-");
        return <Route
            key={news.id}
            path={`/news/${title}`}
            element={<ErrorBoundary>
                < News
                    title={title}
                    uploadTime={news.uploadTime}
                    thumbnail={news.thumbnail}
                    id={news.id} />
            </ErrorBoundary>}
        />
    }
    )).then(data => listNews.push(...data))


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path='/login' element={<LoginPage />}></Route>
            <Route path='/' element={<Home />}></Route>
            {listNews}
        </Routes>
    </BrowserRouter>
);