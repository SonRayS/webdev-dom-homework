export function saveUserToLocalStorage(user) {
    window.localStorage.setItem("user", JSON.stringify(user));
    console.log(localStorage);
}

export function getUserLocalStorage() {
    try {
        console.log(JSON.parse(window.localStorage.getItem("user")));
        return JSON.parse(window.localStorage.getItem("user"));
    } catch (error) {
        return null;
    }
}

export function removeUserStorage(user) {
    window.localStorage.removeItem("user");
}
