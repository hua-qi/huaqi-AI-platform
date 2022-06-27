const proBaseUrl = 'http:xxx//xxxx.xx.com'

export const BASE_URL =
    process.env.NODE_ENV === 'development'
        ? process.env.DEV_BASE_URL
        : proBaseUrl
export const TIMEOUT = 5000
