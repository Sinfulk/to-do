export const host = () => 'https://todyaroslav.herokuapp.com';

export const signIn = () => `${host()}/auth/signin`;
export const signOut = () => `${host()}/auth/signout`;
export const checkAuth = () => `${host()}/auth/check`;

export const allTasks = () => `${host()}/tasks`;
export const newTask = () => `${host()}/tasks`;
export const editTask = () => `${host()}/tasks/edit`;
export const editStatusTask = (id) => `${host()}/tasks/${id}`;
export const taskDelete = (id) => `${host()}/tasks/${id}`;
