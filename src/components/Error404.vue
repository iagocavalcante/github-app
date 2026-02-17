<template>
  <q-page class="flex flex-center">
    <div class="text-center">
      <div class="text-h1 text-grey-3">404</div>
      <p class="text-grey-7">Oops. Nothing here...</p>
      <div class="q-gutter-md">
        <q-btn
          v-if="canGoBack"
          color="primary"
          label="Go back"
          icon="arrow_back"
          @click="goBack"
        />
        <q-btn
          color="primary"
          label="Go home"
          icon="home"
          @click="$router.replace('/')"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Error404',
  data () {
    return {
      canGoBack: window.history.length > 1
    }
  },
  methods: {
    goBack () {
      window.history.go(-1)
    }
  }
}
</script>
