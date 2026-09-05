export const getOpenInSonolusUrl = (fullPath: string) => {
    const targetHost =
        (import.meta.env.VITE_SONOLUS_SERVER_HOST as string | undefined) ||
        `${window.location.host}${import.meta.env.BASE_URL}`
    return `https://open.sonolus.com/${targetHost.replace(/\/$/, '')}/${fullPath.replace(/^\//, '')}`
}
