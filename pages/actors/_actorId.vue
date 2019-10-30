<template>
  <div>
    <b-row>
      <b-col cols="6" md="4">
        <Actor
          :id="actor.id"
          :name="actor.name"
          :character="actor.character"
          :poster="actor.poster"
        />
      </b-col>
    </b-row>
    <b-row align-h="around">
      <b-col v-for="(movie, index) in cast" :key="`movies-${index}`" cols="6">
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
import { mapGetters } from 'vuex'
import Actor from '~/components/Actor'
import Movie from '~/components/Movie'

export default {
  components: {
    Actor,
    Movie
  },
  computed: {
    ...mapGetters({
      actor: 'actors/actor',
      cast: 'actors/cast'
    })
  },
  async fetch ({ store, params }) {
    await store.dispatch('actors/getActorById', params.actorId)
    await store.dispatch('actors/getCastByActorId', params.actorId)
    // ✨ PRO TIPS
    /**
      await Promise.all([
        store.dispatch('actors/getActorById', params.actorId),
        store.dispatch('actors/getCastByActorId', params.actorId)
      ])
    */
  }
}
</script>
