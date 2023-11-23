<template lang="pug">
.flex(class="sm:flex-1 sm:items-center sm:justify-end px-4 mt-10")
  div
    nav.isolate.inline-flex.-space-x-px.rounded-md.shadow-sm(aria-label="Pagination")
      a.relative.inline-flex.items-center.rounded-l-md.px-2.py-2.text-gray-400.ring-1.ring-inset.ring-gray-300(href="#" class="hover:bg-gray-50 focus:z-20 focus:outline-offset-0")
        span Previous 
          path(fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd")
      // Current: "z-10 bg-primary text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#002147]", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0"
      a.relative.z-10.inline-flex.items-center.px-4.py-2.text-sm.font-semibold.text-white(href="#" aria-current="page" class="bg-primary focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#002147]") 1
      a.relative.inline-flex.items-center.px-4.py-2.text-sm.font-semibold.text-gray-900.ring-1.ring-inset.ring-gray-300(href="#" class="hover:bg-gray-50 focus:z-20 focus:outline-offset-0") 2
      a.relative.hidden.items-center.px-4.py-2.text-sm.font-semibold.text-gray-900.ring-1.ring-inset.ring-gray-300(href="#" class="hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex") 3
      a.relative.inline-flex.items-center.rounded-r-md.px-2.py-2.text-gray-400.ring-1.ring-inset.ring-gray-300(href="#" class="hover:bg-gray-50 focus:z-20 focus:outline-offset-0")
        span Next
</template>

<script>
export default {
  name: "PaginateComp",
  components: {},
  data() {
    return {};
  },
};
</script>
<style scoped>
.bg-primary {
  background-color: #002147;
}
</style>
