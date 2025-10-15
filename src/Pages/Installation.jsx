import React, { useEffect, useState } from "react";
import { getStoredApps, removeFromStorage } from "../utilities/addToStorage";
import useApps from "../hooks/useApps";
import InstalledAppData from "./installedAppData";
import { toast } from "react-toastify";
import LoadingSpinner from "../Components/LoadingSpinner";

const Installation = () => {
  const [installedData, setInstalledData] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");
  const { apps, loading } = useApps();

  useEffect(() => {
    setInstalledData(getStoredApps());
  }, []);

  const filteredData = apps.filter((app) =>
    installedData.includes(app.id.toString())
  );

  const handleUninstall = (id, title) => {
    removeFromStorage(id);
    setInstalledData((prev) => prev.filter((appId) => appId !== id.toString()));
    toast(title + " has been uninstalled");
  };

  const sortItem = () => {
    if (sortOrder === "size-asc") {
      return [...filteredData.sort((a, b) => a.size - b.size)];
    } else if (sortOrder === "size-desc") {
      return [...filteredData.sort((a, b) => b.size - a.size)];
    } else {
      return filteredData;
    }
  };

  return (
    <div className="w-11/12 mx-auto flex flex-col justify-center items-center py-20">
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="w-full flex flex-col justify-center items-center">
          <div className="text-center space-y-6 mb-8">
            <h1 className="text-5xl font-bold">Your Installed Apps</h1>
            <p className="text-xl text-[#627382]">
              Explore All Trending Apps on the Market developed by us
            </p>
          </div>

          <div className="w-full">
            <div className="flex justify-between mb-7">
              <p className="text-xl font-semibold">
                {filteredData.length} Apps Found
              </p>
              <label className="form-control w-full max-w-xs">
                <select
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  className="select select-bordered"
                >
                  <option value="none">Sort By Size</option>
                  <option value="size-asc">Low to High</option>
                  <option value="size-desc">High to Low</option>
                </select>
              </label>
            </div>

            <div className="w-full">
              {sortItem().map((app) => (
                <InstalledAppData
                  key={app.id}
                  app={app}
                  handleUninstall={handleUninstall}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Installation;
