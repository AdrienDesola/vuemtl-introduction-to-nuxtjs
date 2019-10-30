<template>
  <div>
    <!--
      Where page templates get rendered
      similar to <router-view />
    -->
    <NavBar />
    <hr>
    <b-container>
      <nuxt />
    </b-container>
  </div>
</template>

<script>
import NavBar from '~/components/NavBar'
export default {
  head () {
    return {
      titleTemplate: '🦄 - %s page',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Candy canes oat cake gummi bears pie tart chocolate. Cheesecake halvah chocolate lemon drops powder. Jelly-o sweet roll oat cake. Pudding ice cream danish topping jelly beans. Jelly sweet roll pie powder gingerbread gummi bears pie sesame snaps. Chocolate donut cookie. Cake sweet roll toffee marzipan donut sweet roll macaroon biscuit. Candy canes chocolate bar jelly beans. Powder toffee caramels pudding candy pastry gingerbread. Dessert dessert bear claw lollipop. Jelly gummies gummies gummi bears sweet bear claw gingerbread danish co'
        }
      ]
    }
  },
  components: {
    NavBar
  }
}
</script>
