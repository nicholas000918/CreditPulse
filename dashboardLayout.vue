<template lang="pug">
div
  div(:class="[sidebarOpen ? 'w-64 fixed dflex min-h-screen' : 'hidden',' lg:inset-y-0 z-50   lg:flex-col']")
    // Sidebar component, swap this element with another sidebar if you like
    .dflex.grow.shadow-lg.flex-col.gap-y-5.overflow-y-auto.border-r.border-gray-200.bg-white.px-6.pb-4.rounded-tr-3xl.rounded-br-3xl
      p(class="mt-4 text-primary cursor-pointer lg:hidden block" @click="setSidebar") close
      .dflex.h-16.shrink-0.items-center.justify-center
        LogoIcon
      nav.dflex.flex-1.flex-col
        ul.dflex.flex-1.flex-col.gap-y-7(role="list")
          li
            div
            .mt-2.dflex.rounded-xl.shadow-sm
                .relative.dflex.flex-grow.items-stretch(class="focus-within:z-10 ")
                  .pointer-events-none.absolute.inset-y-0.left-0.dflex.items-center.pl-3
                    magnifying.h-5.w-5.text-gray-400(aria-hidden="true")
                  input#email.block.w-full.rounded-xl.border-0.pl-10.text-gray-900.ring-1.ring-inset.ring-gray-300(type="email" name="email" class="py-3 bg-secondary placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Search")
          li
            ul.-mx-2.space-y-1(role="list")
              li(v-for="item in navigation" :key="item.name")
                a(:href="item.href" :class="[item.current ? 'bg-primary text-white' : 'text-gray-700 cardHover hover:bg-primary hover:text-white', 'group dflex gap-x-3 rounded-md px-2 py-4 items-center text-sm leading-6 font-semibold']")
                  component(:is="item.icon" :class="[item.current ? 'text-white' : 'text-gray-400 group-hover:text-white', ' shrink-0 dflex items-center justify-center']" aria-hidden="true")
                  p {{ item.name }}
          
          li.mt-auto
            a.group.-mx-2.dflex.items-center.gap-x-3.rounded-md.cardHover.whitespace-nowrap.px-2.py-4.text-sm.font-semibold.leading-6.text-gray-700(href="#" class=" hover:text-white")
              UserIcon.shrink-0.items-center.justify-center.text-gray-400(class="group-hover:text-white" aria-hidden="true")
              p My Profile              
  .max-w-full(:class="[sidebarOpen ? 'pl-64' : '' ,' min-h-screen  bg-main']")
    .top-0.z-40.dflex.h-16.shrink-0.items-center.justify-between.gap-x-4.px-4(class="sm:gap-x-6 sm:px-6 lg:px-8")
      div.dflex.items-center.gap-4
        span(@click="setSidebar" class="cursor-pointer")
          Bars
        h1.text-lg.font-semibold Dashboard
      div.dflex.items-center.gap-x-6
        Notification
        a.border-2.px-5.dflex.items-center.gap-2.border-primary.font-semibold.rounded-full(href="#" class="py-1 border-[#002147] text-[#002147]")
          UserIcon
          span(class="lg:block hidden") Muh Syazrul
    Nuxt
</template>

<script>
import { mapGetters } from "vuex";
import StartupTableVue from "~/components/dashboard/startupTable.vue";
import TrendListVue from "~/components/dashboard/trendList.vue";
import UpperTitleVue from "~/components/UpperTitle.vue";
import HomeIcon from "../icons/HomeIcon.vue";
import InsightsIcon from "../icons/InsightsIcon.vue";
import Reportsicon from "../icons/ReportsIcon.vue";
import UserIcon from "../icons/UserIcon.vue";
import LogoIcon from "../icons/LogoIcon.vue";
import Magnifying from "../icons/MagnifyingIcon.vue";
import Bars from "../icons/BarsIcon.vue";
import Notification from "../icons/NotificationIcon.vue";
import DummyUser from "../icons/DummyUser.vue";
import TableComp from "~/components/TableComp.vue";

export default {
  name: "DashboardPage",
  components: {
    UpperTitleVue,
    TrendListVue,
    StartupTableVue,
    LogoIcon,
    Magnifying,
    Bars,
    Notification,
    HomeIcon,
    DummyUser,
    UserIcon,
    TableComp,
  },
  layout: "default",
  data() {
    return {
      // search: null
      navigation: [
        { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
        { name: "Customers", href: "#", icon: InsightsIcon, current: false },
        { name: "Insights", href: "#", icon: Reportsicon, current: false },
      ],
      teams: [
        { id: 1, name: "Heroicons", href: "#", initial: "H", current: false },
        {
          id: 2,
          name: "Tailwind Labs",
          href: "#",
          initial: "T",
          current: false,
        },
        { id: 3, name: "Workcation", href: "#", initial: "W", current: false },
      ],
      userNavigation: [
        { name: "Your profile", href: "#" },
        { name: "Sign out", href: "#" },
      ],
      sidebarOpen: true,
    };
  },
  computed: {
    ...mapGetters({}),
  },
  methods: {
    setSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    },
  },
};
</script>

<style scoped>
.dflex {
  display: flex !important;
}
.bg-primary {
  background-color: #112346 !important;
}
.cardHover:hover {
  background-color: #112346 !important;
}
.bg-secondary {
  background-color: rgb(0 33 71 / 0.05) !important;
}
.bg-main {
  background-color: #f2f4f6 !important;
}
</style>
