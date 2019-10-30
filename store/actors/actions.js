export default {
  async getActorById ({ commit }, personId) {
    const response = await this.$axios.$get(`/api/tmdb/person/${personId}`)
    const actor = {
      id: response.id,
      name: response.name,
      character: response.character,
      poster: `/cdn/tmdb${response.profile_path}`
    }
    commit('setActor', actor)
  },
  async getCastByActorId ({ commit }, personId) {
    const { cast } = await this.$axios.$get(`/api/tmdb/person/${personId}/movie_credits`)
    const movies = cast
      .filter(r => r.poster_path)
      .map(r => ({
        id: r.id,
        title: r.title,
        poster: `/cdn/tmdb${r.poster_path}`,
        description: r.overview
      }))

    commit('setCast', movies)
  }
}
