export const getUsers = () => {
    return JSON.parse(localStorage.getItem('users')) || [];
};

export const saveUser = (user) => {
    const users = getUsers();
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
};

export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('currentUser'));
};

export const setCurrentUser = (user) => {
    localStorage.setItem('currentUser', JSON.stringify(user));
    localStorage.setItem('isLoggedIn', 'true');
};

export const clearCurrentUser = () => {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('isLoggedIn');
};