<template>
  <v-container fluid>
    <v-row justify="start" align="start">
      <v-col md="6" lg="4" xl="4" sm="12" xs="12" cols="12" v-for="(data, index) in prelinkTemplates" :key="index">
        <v-card class="mx-auto" max-width="350" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="text-overline mb-4">{{ data.type }}</div>
              <v-list-item-title class="text-h6 mb-1">
                {{ data.name }}
              </v-list-item-title>
              <v-list-item-subtitle
                >{{ data.platform }}</v-list-item-subtitle
              >
            </v-list-item-content>

            <v-list-item-avatar
              tile
              size="80"
              color="grey"
              class="white--text"
            >
            {{ data.ratio }}
            </v-list-item-avatar>
          </v-list-item>

          <v-card-actions>
            <v-btn outlined text> Create </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { getPrelinkTemplates } from '~/services/prelink-template'

export default {
  middleware: 'auth',
  name: 'PrelinkGenerator',
  data() {
    return {
      prelinkTemplates: [],
    }
  },

  methods: {
    async _getPrelinkTemplates() {
      const result = await getPrelinkTemplates()
      console.log({ result })
      this.prelinkTemplates = result
    },
  },

  mounted() {
    this._getPrelinkTemplates()
  },
}
</script>
