import React, { useState } from "react";
import useApps from "../hooks/useApps";
import AppCards from "./AppCards";
import LoadingSpinner from "../Components/LoadingSpinner";
import AppNotFound1 from "./AppNotFound1";

const Apps = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState("");
  const { apps, loading } = useApps();
  const userInput = value.toLocaleLowerCase().trim();
  const filteredApps = userInput
    ? apps.filter((app) => app.title.toLowerCase().includes(userInput))
    : apps;

  const handleChange = (e) => {
    setValue(e.target.value);
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 400);
  };

  return (
    <div className="w-10/12 mx-auto my-16">
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="flex flex-col items-center gap-10">
          <div>
            <h2 className="text-5xl text-center font-semibold">
              Our All Applications
            </h2>
            <p className="text-[#627382] mt-4">
              Explore All Apps on the Market developed by us. We code for
              Millions
            </p>
          </div>

          <div className="flex justify-between items-center w-full">
            <h4 className="text-2xl font-semibold">
              ({filteredApps.length})Apps Found
            </h4>
            <label className="input">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                value={value}
                type="search"
                required
                placeholder="Search Apps"
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="relative grid grid-cols-4 gap-8 w-full">
            {!!isLoading === true ? (
              <LoadingSpinner />
            ) : (
              filteredApps.length !== 0 ? filteredApps.map((apps) => <AppCards key={apps.id} apps={apps} />) : <AppNotFound1 value={setValue}/>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Apps;
