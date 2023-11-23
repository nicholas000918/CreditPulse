<template lang="pug">
div
  .mt-16
    div(class="px-8")
      div.dflex.items-center.gap-0
        div(v-for="(tab,index) in tabs" :key="index" :class="[tabIndex === index ? 'bg-primary text-white ' : ' bg-inactive', 'px-4 py-3 dflex.items-center cursor-pointer justify-center rounded-tr-2xl rounded-tl-2xl']" @click="setTab(index)")
          p.text-sm.font-semibold {{tab.name}}

  .px-4(class="sm:px-6 mx-8 lg:px-12 py-5 dflex-wrap rounded-tr-2xl rounded-bl-2xl rounded-br-2xl  bg-white")

    div(class="sm:dflex sm:items-center")
      div(class="sm:flex-auto")
      h1.text-lg.font-semibold.leading-6.text-gray-900 
        span(v-if="tabIndex === 0") Borrowers List
        span(v-if="tabIndex === 1") Business Customers List
      p.text-sm.text-gray-700.dflex.items-center.justify-between
      mt-4(class="sm:ml-16 sm:mt-0 sm:flex-none")

    div.text-sm.text-gray-700.mt-4.dflex.items-center.justify-between.relative.flex-wrap.gap-4
      .shrink-0.dflex.items-center.gap-2(class="low")
        p Show 
        select.border-2.borderGray.rounded-md.px-2.py-1.text-sm(class="low")
          option(value="10") 10
          option(value="20") 20
          option(value="30") 30
          option(value="40") 40
          option(value="50") 50
        p entries
      .dflex.items-center.gap-4.flex-wrap
        div.dflex.items-center.gap-2
          p(class="low") Search
          input.border-2.borderGray.rounded-lg.px-2.py-2.text-sm(class="low")
        div.dflex.items-center.gap-2.shadow-md.ring-1.ring-gray-100.relative.px-4.py-2.rounded-md 
          span.pr-12 Filter
          FilterIcon


    .mt-8.flow-root
      .-mx-4.-my-2.overflow-x-auto(class="sm:-mx-6 lg:-mx-8")
        .inline-block.min-w-full.py-2.align-middle(class="sm:px-6 lg:px-8")
          .overflow-hidden.ring-1.ring-gray-300.shadow.ring-opacity-5(class="")
            table.min-w-full.divide-y.divide-gray-300
              thead(style="background: rgba(0, 33, 71, 0.10);" class="border")
                tr
                  th.pl-4.pr-3.text-left.text-sm.whitespace-nowrap.font-semibold.text-gray-900(scope="col" class="py-3.5 sm:pl-6") 
                    div.dflex.items-center.gap-2 
                      span Borrower ID
                      Indent
                  th.px-3.text-left.text-sm.font-semibold.text-gray-900(scope="col" class="py-3.5") 
                    div.dflex.items-center.gap-2 
                      span(v-if="tabIndex === 0") Borrowers
                      span(v-if="tabIndex === 1") Business Customer
                      Indent
                  th.px-3.text-left.text-sm.font-semibold.text-gray-900(scope="col" class="py-3.5") 
                    div.dflex.items-center.gap-2 
                      span Load Product
                      Indent
                  th.px-3.text-left.text-sm.font-semibold.whitespace-nowrap.text-gray-900(scope="col" class="py-3.5") 
                    div.dflex.items-center.gap-2 
                      span Requested Loan Amount (RM)
                      Indent
                  th.px-3.text-left.text-sm.font-semibold.text-gray-900(scope="col" class="py-3.5") 
                    div.dflex.items-center.gap-2  
                      span Date
                      Indent
                  th.px-3.text-left.text-sm.font-semibold.text-gray-900(scope="col" class="py-3.5") 
                    div.dflex.items-center.gap-2  
                      span Purpose
                      Indent
                  th.px-3.text-left.text-sm.font-semibold.text-gray-900(scope="col" class="py-3.5") 
                    div.dflex.items-center.gap-2 
                      span Status
                      Indent
                  th.px-5.text-center.shadowD.text-sm.font-semibold.text-gray-900(scope="col" class="py-3.5") Action

              tbody.divide-y.divide-gray-200.bg-white
                tr(v-for="item in data" :key="item.date" class="border ")
                  td.whitespace-nowrap.py-4.pl-4.pr-3.text-sm.font-medium.text-gray-900(class="sm:pl-6") {{item.id}}
                  td.whitespace-nowrap.px-3.py-4.text-sm.text-gray-500 
                    .dflex.items-center.gap-2
                      img(:src="item.logo" alt="no")
                      p {{item.name}}
                  td.whitespace-nowrap.px-3.py-4.text-sm.text-gray-500 {{item.category}}
                  td.whitespace-nowrap.px-3.py-4.text-sm.text-gray-500 {{item.amount}}
                  td.whitespace-nowrap.px-3.py-4.text-sm.text-gray-500 {{item.date}}
                  td.whitespace-nowrap.px-3.py-4.text-sm.text-gray-500 {{item.purpose}}
                  td.whitespace-nowrap.px-3.py-4.text-sm.text-gray-500 
                    div.dflex.items-center.gap-2.w-24.px-4.py-2.rounded-full(:class="['bg-green-50 text-green-700']" v-if="item.status === 'Approved'")
                      span {{item.status}}
                    div.dflex.items-center.gap-2.px-4.py-2.w-28.rounded-full(:class="['bg-orange-50 text-orange-700']" v-if="item.status === 'Processing'")
                      span {{item.status}} 
                    div.dflex.items-center.gap-2.px-4.py-2.w-28.rounded-full(:class="['bg-red-50 text-red-700']" v-if="item.status === 'Cancelled'")
                      span {{item.status}} 


                  td.relative.whitespace-nowrap.text-right.text-sm.font-medium(class="")
                    div.dflex.shadowD.items-center.justify-center.px-4.py-2.gap-4.text-indigo-600(href="#" class="hover:text-indigo-900 h-70")
                      Edit
                      Deleteicon
        PaginateComp
                  
                        
    
</template>

<script>
import Edit from "../icons/EditIcon.vue";
import Deleteicon from "../icons/DeleteIcon.vue";
import FilterIcon from "../icons/FilterIcon.vue";
import DummyUser from "../icons/DummyUser.vue";
import PaginateComp from "~/components/PaginateComp.vue";
import a from "../assets/a.png";
import b from "../assets/b.png";
import c from "../assets/c.png";
import d from "../assets/d.png";
import e from "../assets/e.png";
import f from "../assets/f.png";
import g from "../assets/g.png";
import h from "../assets/h.png";
import i from "../assets/i.png";
import Tick from "../icons/TickIcon.vue";
import Cross from "../icons/CrossIcon.vue";
import Indent from "../icons/IndentIcon.vue";

export default {
  name: "TableLayout",
  components: {
    Edit,
    Deleteicon,
    FilterIcon,
    DummyUser,
    Tick,
    Cross,
    Indent,
    PaginateComp,
  },
  data() {
    return {
      tabs: [
        {
          name: "Borrowers",
          href: "#",
          current: true,
        },
        {
          name: "Business Customers",
          href: "#",
          current: false,
        },
      ],
      data: [
        {
          id: "#20462",
          name: "Nicholas",
          category: "Personal Loans",
          amount: 170000,
          date: "13/05/2022",
          logo: a,
          status: "Approved",
          purpose: "House Purchase",
        },
        {
          id: "#18933",
          name: "Trixie Byrd",
          category: "Personal Loans",
          amount: 132421,
          date: "22/05/2022",
          logo: b,
          status: "Approved",
          purpose: "Debt Consolidation",
        },
        {
          id: "#18934",
          name: "Matt Dickerson",
          category: "Personal Loans",
          amount: 132421,
          date: "22/05/2022",
          logo: c,
          status: "Processing",
          purpose: "House Purchase",
        },
        {
          id: "#18935",
          name: "Sarween",
          category: "Personal Loans",
          amount: 132421,
          date: "22/05/2022",
          logo: d,
          status: "Processing",
          purpose: "Purchase or refinance a home",
        },
        {
          id: "#18936",
          name: "Kris",
          category: "Personal Loans",
          amount: 132421,
          date: "22/05/2022",
          logo: e,
          status: "Approved",
          purpose: "Debt Collection",
        },
        {
          id: "#18937",
          name: "Evans",
          category: "Personal Loans",
          amount: 132421,
          date: "22/05/2022",
          logo: f,
          status: "Processing",
          purpose: "Other",
        },
        {
          id: "#18938",
          name: "Khairul",
          category: "Personal Loans",
          amount: 132421,
          date: "22/05/2022",
          logo: g,
          status: "Cancelled",
          purpose: "Credit Card",
        },
        {
          id: "#18939",
          name: "Tristan",
          category: "Personal Loans",
          amount: 132421,
          date: "22/05/2022",
          logo: h,
          status: "Processing",
          purpose: "Debt Consolidation",
        },
        {
          id: "#18940",
          name: "Nur Syaza",
          category: "Personal Loans",
          amount: 132421,
          date: "22/05/2022",
          logo: i,
          purpose: "Debt Consolidation",
          status: "Approved",
        },
      ],
      tabIndex: 0,

      myData: [
        {
          id: "#20462",
          name: "Nicholas",
          category: "Personal Loans",
          amount: 170000,
          date: "13/05/2022",
          logo: a,
          status: "Approved",
          purpose: "House Purchase",
        },
        {
          id: "#18933",
          name: "Trixie Byrd",
          category: "Personal Loans",
          amount: 132421,
          date: "22/05/2022",
          logo: b,
          status: "Approved",
          purpose: "Debt Consolidation",
        },
        {
          id: "#18934",
          name: "Matt Dickerson",
          category: "Personal Loans",
          amount: 132421,
          date: "22/05/2022",
          logo: c,
          status: "Processing",
          purpose: "House Purchase",
        },
        {
          id: "#18935",
          name: "Sarween",
          category: "Personal Loans",
          amount: 132421,
          date: "22/05/2022",
          logo: d,
          status: "Processing",
          purpose: "Purchase or refinance a home",
        },
        {
          id: "#18936",
          name: "Kris",
          category: "Personal Loans",
          amount: 132421,
          date: "22/05/2022",
          logo: e,
          status: "Approved",
          purpose: "Debt Collection",
        },
        {
          id: "#18937",
          name: "Evans",
          category: "Personal Loans",
          amount: 132421,
          date: "22/05/2022",
          logo: f,
          status: "Processing",
          purpose: "Other",
        },
        {
          id: "#18938",
          name: "Khairul",
          category: "Personal Loans",
          amount: 132421,
          date: "22/05/2022",
          logo: g,
          status: "Cancelled",
          purpose: "Credit Card",
        },
        {
          id: "#18939",
          name: "Tristan",
          category: "Personal Loans",
          amount: 132421,
          date: "22/05/2022",
          logo: h,
          status: "Processing",
          purpose: "Debt Consolidation",
        },
        {
          id: "#18940",
          name: "Nur Syaza",
          category: "Personal Loans",
          amount: 132421,
          date: "22/05/2022",
          logo: i,
          purpose: "Debt Consolidation",
          status: "Approved",
        },
      ],
      myCompanies: [
        {
          id: "#20462",
          name: "Fintech Corporation",
          category: "Startup Loans",
          amount: 140000,
          date: "13/05/2022",
          logo: c,
          status: "Approved",
          purpose: "Funding for new businesses",
        },
        {
          id: "#18933",
          name: "Sunny Distribution",
          category: "Business Term Loan",
          amount: 122421,
          date: "14/05/2022",
          logo: b,
          status: "Approved",
          purpose: "Funding for expansion",
        },
        {
          id: "#18934",
          name: "Quantum Solutions Co.",
          category: "Franchise Financing",
          amount: 102421,
          date: "15/05/2022",
          logo: a,
          status: "Processing",
          purpose: "Funding for expansion",
        },
        {
          id: "#18935",
          name: "Global Innovations Ltd.",
          category: "Franchise Financing",
          amount: 322421,
          date: "15/05/2022",
          logo: d,
          status: "Processing",
          purpose: "Funding for expansion",
        },
        {
          id: "#18936",
          name: "Pioneer Industries Group",
          category: "Startup Loans",
          amount: 22521,
          date: "16/05/2022",
          logo: e,
          status: "Approved",
          purpose: "Funding for new businesses",
        },
        {
          id: "#18937",
          name: "Vertex Holdings LLC",
          category: "Startup Loans",
          amount: 329921,
          date: "16/05/2022",
          logo: f,
          status: "Processing",
          purpose: "Funding for new business",
        },
        {
          id: "#18938",
          name: "Echelon Capital Partners",
          category: "Equipment Financing",
          amount: 132421,
          date: "18/05/2022",
          logo: g,
          status: "Cancelled",
          purpose: "Purchasing of business equipment or machinery",
        },
        {
          id: "#18939",
          name: "Nexus Solution Group",
          category: "Franchise Financing",
          amount: 302421,
          date: "22/05/2022",
          logo: h,
          status: "Processing",
          purpose: "Funding for expansion",
        },
        {
          id: "#18940",
          name: "Evolve Enterprises Inc.",
          category: "Startup Loans",
          amount: 212421,
          date: "22/05/2022",
          logo: i,
          status: "Approved",
          purpose: "Funding for new businesses",
        },
      ],
    };
  },
  methods: {
    setTab(index) {
      this.tabIndex = index;
      if (index === 0) {
        this.data = this.myData;
      } else if (index === 1) {
        this.data = this.myCompanies;
      }
    },
  },
};
</script>
<style scoped>
.dflex {
  display: flex !important;
}
.shadowD {
  box-shadow: -10px 0px 50px -10px rgba(0, 33, 71, 0.2);
}
.bg-primary {
  background-color: #002147 !important;
}

.bg-orange-50 {
  background-color: #fff7ed !important;
}
.text-orange-700 {
  color: #f97316 !important;
}
.h-70 {
  height: 70px;
}
.low {
  color: #666666;
}
.borderGray {
  border: 2px solid rgba(209, 213, 219, 1) !important;
}
.bg-inactive {
  background-color: #f4f6fb;
}
</style>
