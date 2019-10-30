<template>
  <b-card
    :title="name"
    :img-src="poster"
    img-top
    img-width="100"
    tag="article"
  >
    <b-card-text>
      {{ character }}
    </b-card-text>
    <nuxt-link :to="{ name: 'actors-actorId', params: { actorId: id } }">
      voir la fiche
    </nuxt-link>
  </b-card>
</template>
<script>
export default {
  props: {
    id: { type: Number, required: true },
    poster: { type: String, required: true },
    name: { type: String, required: true },
    character: { type: String, required: false, default: '' }
  }
}
</script>
