export const fetcher = (endpoint: string) => fetch(`${process.env.REACT_APP_ENDPOINT}${endpoint}`).then(r => r.json())
