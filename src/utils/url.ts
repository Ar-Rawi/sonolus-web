export const resolveAssetUrl = (url?: string): string => {
    if (!url) return ''
    if (!url.startsWith('/')) return url

    const serverOrigin = (import.meta.env.VITE_SERVER_ORIGIN as string | undefined) || ''
    if (serverOrigin) {
        return `${serverOrigin.replace(/\/$/, '')}${url}`
    }

    return `${import.meta.env.BASE_URL}${url.slice(1)}`
}
