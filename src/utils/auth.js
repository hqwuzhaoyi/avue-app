export function getCurrentAuthoriry() {
    return ["admin"];
}

export function check(authority) {
    const current = getCurrentAuthoriry;
    return current.some(item => authority.includes(item));
}

export function isLogin() {
    const current = getCurrentAuthoriry;
    return current && current[0] !== 'guest';
}