export function selectUser(state) {
    return state?.user;
}

export function selectUserParams(state) {
    const user = selectUser(state);

    return user?.params;
}
