<template>
  <div>
    <h1> Movies </h1>
    <b-row align-h="around">
      <b-col v-for="(movie, index) in movies" :key="`movies-${index}`" cols="6" xl="4">
        <Movie
          :id="movie.id"
          :title="movie.title"
          :description="movie.description"
          :poster="movie.poster"
        />
      </b-col>
    </b-row>
  </div>
</template>
<script>
import Movie from '~/components/Movie'
export default {
  components: {
    Movie
  },
  head () {
    return {
      title: 'Movies'
    }
  },
  async asyncData ({ $axios }) {
    const response = await $axios.$get('/api/tmdb/discover/movie')
    const movies = response.results.map(r => ({
      id: r.id,
      title: r.title,
      poster: `/cdn/tmdb${r.poster_path}`,
      description: r.overview
    }))
    return {
      movies
    }
  }
}
</script>
