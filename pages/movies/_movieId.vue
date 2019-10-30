<template>
  <div>
    <b-row>
      <b-col cols="4">
        <b-img :src="movie.poster" fluid-grow />
      </b-col>
      <b-col cols="8">
        <h1> {{ movie.title }} </h1>
        <p> {{ movie.description }} </p>
      </b-col>
    </b-row>

    <b-row>
      <b-col
        v-for="(actor, index) in actors.slice(0, 6)"
        :key="`actors-${index}`"
        cols="6"
        md="4"
        lg="2"
        class="mt-1"
      >
        <actor
          :id="actor.id"
          :name="actor.name"
          :character="actor.character"
          :poster="actor.poster"
        />
      </b-col>
    </b-row>
  </div>
</template>
<script>
import Actor from '~/components/Actor'

export default {
  components: {
    Actor
  },
  head () {
    return {
      title: this.movie.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.movie.description
        }
      ]
    }
  },
  async asyncData ({ $axios, params }) {
    const response = await $axios.$get(`/api/tmdb/movie/${params.movieId}`)

    const movie = {
      id: response.id,
      title: response.title,
      poster: `/cdn/tmdb${response.poster_path}`,
      description: response.overview
    }

    const { cast } = await $axios.$get(`/api/tmdb/movie/${params.movieId}/credits`)

    const actors = cast
      .filter(actor => actor.profile_path)
      .map(actor => ({
        id: actor.id,
        name: actor.name,
        character: actor.character,
        poster: `/cdn/tmdb${actor.profile_path}`
      }))
    return {
      movie,
      actors
    }
  }
}
</script>
