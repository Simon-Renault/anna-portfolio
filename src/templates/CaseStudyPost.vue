<template>
   <LayoutPost>
   <main class="project_page main">
        <div class="sumup">
            <div class="heading">
                <h2 class="project_title center">{{$page.post.title}}</h2>
                <h3 class="date caption center">{{$page.post.date}}</h3>
            </div>
            <img class="image_summary" :src="$page.post.thumbnail.src" alt="">
            <p class="courant_italic">{{$page.post.intro}}</p>
        </div>
        <div class="separator"></div>
        <div class="content" v-html="$page.post.content">
            
        </div>
    </main>

   
  </LayoutPost>
</template>

<page-query>
query ProjectPost ($path: String!) {
  post: caseStudyPost (path: $path) {
    title
    intro
    date (format:"MMMM DD, YYYY")
    thumbnail (height:500,width:1000,quality: 50)
    content
  }
}
</page-query>

<script>
export default {
  metaInfo () {
    return {
      title: this.$page.post.title,
    }
  }
}
</script>

<style scoped>
.project-header {
  padding: 20vh 0 4rem 0;
}
.project-title {
  font-size: 4rem;
  margin: 0 0 4rem 0;
  padding: 0;
}
.project-info {
  display: flex;
  flex-wrap: wrap;
  font-size: 0.8rem;
}
.project-info > div {
  margin-right: 4rem;
}
.project-info > div:last-of-type {
  margin: 0;
}
.category:after {
  content: ', '
}
.category:last-of-type:after {
  content: '';
}
</style>
