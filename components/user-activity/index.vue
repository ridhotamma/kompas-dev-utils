<template>
  <v-col cols="12">
    <v-card class="pa-8 mb-4" color="white">
      <h3>User Login Activity</h3>
      <apexchart width="100%" height="400" type="bar" :options="options" :series="series"></apexchart>
    </v-card>
    <v-card class="pa-8 mb-4" color="white">
      <h3 class="mb-4">User Login Failed</h3>
      <apexchart width="100%" height="400" type="bar" :options="options" :series="series"></apexchart>
    </v-card>
    <v-card class="pa-8" color="white">
      <h3 class="mb-4">Error And Crash Report</h3>
      <apexchart width="100%" height="400" type="bar" :options="options" :series="series"></apexchart>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: 'UserActivity',
  data: () => ({
    options: {
      chart: {
        id: 'vuechart-example',
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
      },
    },
    series: [
      {
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  }),
}
</script>
