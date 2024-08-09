export const getState = (key: string) => {
    const state = localStorage.getItem(key)
    if (!state) {
        return undefined;
    } else {
        return JSON.parse(state)
    }
}

export const saveState = (key: string, data: unknown) => {
    if (key && data || data === null) {
        const state = JSON.stringify(data);
        localStorage.setItem(key, state)
    }
}