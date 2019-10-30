<template>
  <div>
    <b-card no-body class="overflow-hidden" style="max-width: 540px;">
      <b-row no-gutters>
        <b-col cols="12">
          <b-card-img :src="poster" class="rounded-0" />
        </b-col>
        <b-col cols="12">
          <b-card-body :title="title">
            <b-card-text v-text="description" />
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>
<script>
export default {
  props: {
    id: { type: Number, required: true },
    poster: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true }
  }
}
</script>
