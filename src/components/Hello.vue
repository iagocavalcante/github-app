<template>
  <div class="q-pa-md">
    <div class="text-center q-pt-xl">
      <q-icon name="code" size="80px" color="primary" />
      <h1 class="text-h4 q-mt-md">GitHub App</h1>
      <p class="text-grey-6">Browse your repositories</p>
      <q-btn
        color="primary"
        label="Ver Repositórios"
        icon="folder"
        to="/repos"
        class="q-mt-lg"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hello'
}
</script>
