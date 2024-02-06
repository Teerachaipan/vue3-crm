const BASE_API_URL: string = import.meta.env.VITE_APP_BASE_API_URL
const HTTP_REQUEST_TIMEOUT: number = Number(import.meta.env.VITE_APP_HTTP_REQUEST_TIMEOUT)

export {
  BASE_API_URL,
  HTTP_REQUEST_TIMEOUT,
}
