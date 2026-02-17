<template>
  <div class="q-pa-md">
    <div class="row items-center q-mb-md">
      <q-btn flat round icon="arrow_back" @click="$router.push('/')" />
      <div class="text-h5">Meus Repositórios</div>
    </div>

    <div v-if="loading" class="text-center q-pa-xl">
      <q-spinner-dots color="primary" size="40px" />
    </div>

    <div v-else-if="error" class="text-center q-pa-xl">
      <q-icon name="error" size="48px" color="negative" />
      <p class="text-negative q-mt-md">{{ error }}</p>
      <q-btn color="primary" label="Tentar novamente" @click="loadRepos" />
    </div>

    <div v-else>
      <div v-if="list.length === 0" class="text-center text-grey">
        Nenhum repo found
      </div>
      <q-card v-for="repo in list" :key="repo.id" class="q-mb-sm" flat bordered>
        <q-card-section>
          <div class="text-subtitle1 text-weight-bold">{{ repo.name }}</div>
          <div class="text-caption text-grey-6">{{ repo.description || 'Sem descrição' }}</div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Repos',
  data () {
    return {
      list: [],
      loading: true,
      error: null
    }
  },
  mounted () {
    this.loadRepos()
  },
  methods: {
    loadRepos () {
      this.loading = true
      this.error = null
      
      // Using corsproxy.io to bypass CORS
      fetch('https://api.github.com/users/iagocavalcante/repos?per_page=30', {
        headers: {
          'Accept': 'application/vnd.github.v3+json'
        }
      })
        .then(response => {
          console.log('Response status:', response.status)
          if (!response.ok) {
            throw new Error('HTTP ' + response.status)
          }
          return response.json()
        })
        .then(data => {
          console.log('Data received:', data.length)
          this.list = data
          this.loading = false
        })
        .catch(error => {
          console.error('Fetch error:', error)
          this.error = 'Erro: ' + error.message
          this.loading = false
        })
    }
  }
}
</script>
