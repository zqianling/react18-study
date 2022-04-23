import React, { lazy, Suspense, useState, useTransition } from "react";
import ErrorBoundary from "../ErrorBoundary";
const Home = lazy(() => import("../Home"));
const DetailPage = lazy(() => import("../DetailPage"));
export default function UseTransitionPage() {
  const [currentHome, setCurrentHome] = useState(true);
  const [isPending, startTransition] = useTransition();
  function handleChangePage() {
    startTransition(() => {
      setCurrentHome(!currentHome);
    });
  }
  return (
    <Suspense fallback={<div>加载中。。。</div>}>
      <ErrorBoundary>{currentHome ? <Home key="home"/> : <DetailPage key="detail" />}</ErrorBoundary>
      <button onClick={handleChangePage}>切换</button>
      {isPending?'切换中。。。':'已经切换'}
    </Suspense>
  );
}
