import DefaultLayout from "~/layouts/Default.vue";
import PostLayout from "~/layouts/Post.vue";
import settings from "../data/theme.json";

import '~/assets/styles.css'

export default function(Vue, { head }) {
  Vue.component("Layout", DefaultLayout);
  Vue.component("LayoutPost", PostLayout);
}
