import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from '../lazy.js'

const Main = lazy(() => import('../pages/Main'));
const NotFound = lazy(() => import("../pages/NotFound"));
const Watchlist = lazy(() => import('../components/watchlist/watchlist'));
const Moviedetails = lazy(() => import('../components/moviedetails/moviedetails'));

export default function Router() {
  return (
    <Suspense fallback={<Loading/>}>
        
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/watched-list/" element={<Watchlist />} />
        <Route path="/moviedetails/:id" element={<Moviedetails />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
