import React, {lazy, Suspense } from "react";
import ErrorBoundary from "../ErrorBoundary";
const Home = lazy(() => import("../Home"));
export default function SuspensePage() {
  return (
    <Suspense fallback={<div>加载中。。。</div>}>
      <ErrorBoundary>
        <Home />
      </ErrorBoundary>
    </Suspense>
  );
}
