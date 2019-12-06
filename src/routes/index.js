// @flow
import React from "react";
import { Router } from "@reach/router";

const MainContainer = React.lazy(() => import("../containers/MainContainer"));
const DetailContainer = React.lazy(() =>
  import("../containers/DetailContainer")
);
const NotFoundContainer = React.lazy(() =>
  import("../containers/NotFoundContainer")
);

const Loading = () => {
  return <div>Loading</div>;
};

const Routes = () => (
  <React.Suspense fallback={<Loading />}>
    <Router>
      <MainContainer path="/" />
      <DetailContainer path="/detail/:pokeId" />
      <NotFoundContainer default />
    </Router>
  </React.Suspense>
);

export default Routes;
