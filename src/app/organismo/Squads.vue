<template>
  <div id="squads">
    <v-layout row wrap pt-3 justify-center align-content-center>
      <v-flex
        v-for="(squad, i) in listaSquads"
        :key="i"
        xs12 md6
      >
        <!-- Card da Squad -->
        <v-card dark>
            <v-card-title primary-title>
              <v-flex md5 xs12>
                <v-img
                  justify-center
                  :src="img"
                  height="125px"
                  contain
                ></v-img>
              </v-flex>
              <v-spacer></v-spacer>
              <div class="squad-text">
                <div class="headline">{{ squad.nome }}</div>
                <!-- <div>Time: {{ listaPessoas.nome }}</div> -->
              </div>
            </v-card-title>
          <v-divider light></v-divider>
          <v-card-actions class="pa-3">
            Tribo: {{ squad.nomeTribo }}
            <v-spacer></v-spacer>
            <!-- Mentor: {{ listaMentores.nome }} -->
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs12 pb-5></v-flex>
    </v-layout>
  </div>
</template>

<script>
import SquadsAPI from '../../domain/services/SquadsAPI'
import MentoresAPI from '../../domain/services/MentoresAPI'
import PessoasAPI from '../../domain/services/PessoasAPI'

export default {
  name: 'Squads',
  data () {
    return {
      img: require('../../../static/icones/team.png'),
      listaSquads: [],
      listaPessoas: [],
      listaMentores: []
    }
  },
  mounted () {
    SquadsAPI.obterSquadPorIdTribo(this.$route.params.id).then(resposta => {
      this.listaSquads = resposta.data
    })
    MentoresAPI.obterMentores(this.$route.params.id).then(resposta => {
      this.listaMentores = resposta.data
    })
    PessoasAPI.obterPessoaPorIdSquad(this.listaSquads.id_Squads).then(resposta => {
      this.listaPessoas = resposta.data
    })
  }
}
</script>
