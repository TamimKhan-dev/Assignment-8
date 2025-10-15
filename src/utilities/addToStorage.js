const getStoredApps = () => {
    const storedAppStr = localStorage.getItem("applist");

    if (storedAppStr) {
        const storedAppData = JSON.parse(storedAppStr);
        return storedAppData;
    } else {
        return [];
    }
}

const addToStorage = (id) => {
    const storedAppData = getStoredApps();

    if (!storedAppData.includes(id)) {
        storedAppData.push(id);
        const data = JSON.stringify(storedAppData);
        localStorage.setItem("applist", data);
    } 
}

const removeFromStorage = (id) => {
    const data = getStoredApps().filter(strId => strId !== id.toString());
    const updateData = JSON.stringify(data);
    localStorage.setItem("applist", updateData);
}

export { addToStorage, getStoredApps, removeFromStorage };