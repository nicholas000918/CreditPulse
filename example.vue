<template lang="pug">
TableComp
</template>

<script>
import { mapGetters } from "vuex";
import StartupTableVue from "~/components/dashboard/startupTable.vue";
import TrendListVue from "~/components/dashboard/trendList.vue";
import UpperTitleVue from "~/components/UpperTitle.vue";
import TableComp from "~/components/TableComp.vue";

export default {
  name: "ExamplePage",
  components: {
    UpperTitleVue,
    TrendListVue,
    StartupTableVue,
    TableComp,
  },
  layout: "dashboardLayout",
  data() {
    return {
      // search: null
    };
  },
  computed: {
    ...mapGetters({}),
  },
  methods: {},
};
</script>

<style scoped></style>
