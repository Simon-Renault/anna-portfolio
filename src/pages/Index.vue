<template>
  <Layout>
     <main class="main">
        <!-- main projects-->
        <h1 class="project_title margin-body">Cases Studies</h1>

        <div class="case_studies projects_section grid-col2">
            
            <div class="card_project margin_right" v-for="item in $page.CaseStudies.edges" :key="item.id">
                <g-link :to="item.node.path">
                    <div class="image_container">
                        <img :src="item.node.thumbnail.src" alt="">
                    </div>
                    <div class="description">
                        <h4 class="courant_italic">{{item.node.title}}</h4>
                    </div>
                </g-link> 
            </div>

               
               
            </div>
            <!-- main projects-->
            <h1 class="project_title margin-body">Main Projects</h1>
            <div class="main_projects projects_section grid-col3">

                <div class="card_project margin_right" v-for="item in $page.Projects.edges" :key="item.id">
                    <g-link :to="item.node.path">
                        <div class="image_container">
                            <img :src="item.node.thumbnail.src" alt="">
                        </div>
                        <div class="description">
                            <h4 class="courant_italic">{{item.node.title}}</h4>
                        </div>
                    </g-link> 
                </div>

           </div>
           
       </main>
  </Layout>
</template>

<page-query>
query CaseStudies {
	CaseStudies: allCaseStudyPost {
        edges {
            node {
                id
                date (format: "YYYY")
                title
                thumbnail (height:500,width:500,quality: 50)
                path
            }
        }
    },
    Projects: allProjectPost {
        edges {
            node {
                id
                date (format: "YYYY")
                title
                thumbnail (height:300,width:300,quality: 50)
                path
            }
        }
    }
}
</page-query>

<script>
export default {
    mounted(){
        console.log(this.$page)
    }
}
</script>
