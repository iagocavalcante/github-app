<template>
  <q-layout>
    <q-toolbar slot="header">
      <q-toolbar-title :padding="0">
        Repositórios
      </q-toolbar-title>
    </q-toolbar>

    <q-btn color="primary" @click="voltar()">
      Voltar
    </q-btn>

    <h4>Últimos 30 repositórios publicados</h4>
    <q-list>
      <q-item v-for="repo in list">
        <q-item-side :avatar="repo.owner.avatar_url" />
        <q-item-main>
          <q-item-tile label>{{repo.name}}</q-item-tile>
        </q-item-main>
        <q-item-side right>
          <a :href="repo.html_url">
            <q-item-tile icon="open_in_browser" color="blue"/>
          </a>
        </q-item-side>
      </q-item>
    </q-list>
  </q-layout>
</template>

<script>
import {
  QLayout,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QList,
  QListHeader,
  QItem,
  QItemSide,
  QItemMain,
  QItemTile
} from 'quasar'
import axios from 'axios'
let user = 'iagocavalcante'
export default {
  components: {
    QLayout,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QListHeader,
    QItem,
    QItemSide,
    QItemMain,
    QItemTile
  },
  data () {
    return {
      list: []
    }
  },
  mounted () {
    axios.get(`https://api.github.com/users/${user}/repos?direction=asc`)
      .then((res) => {
        this.list = res.data
        console.log(this.list)
      })
  },
  methods: {
    voltar () {
      this.$router.push('/')
    }
  }
}
</script>

<style>
</style>
