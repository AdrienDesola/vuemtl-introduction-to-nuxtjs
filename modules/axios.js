export default function ({ $axios, redirect }) {
  $axios.onRequest((config) => {
    config.headers.Authorization = `Bearer ${process.env.TMDB_API_SECRET}`
  })
}
