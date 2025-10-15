import React, { Fragment } from "react";
import HomeHero from "./HomeHero";
import HomeApps from "./HomeApps";
import useApps from "../hooks/useApps";
import LoadingSpinner from "../Components/LoadingSpinner";

const Home = () => {
  const { loading } = useApps();
  return (
    <div>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="flex flex-col items-center justify-center py-20">
          <HomeHero />
          <HomeApps />
        </div>
      )}
    </div>
  );
};

export default Home;
