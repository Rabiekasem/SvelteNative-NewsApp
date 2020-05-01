<script>
   export let article 
   import SubPage from "../modals/SubPage.svelte"
   import ArticleSearchPage from "../modals/ArticleSearchPage.svelte"

   import { registerNativeViewElement } from 'svelte-native/dom'
    registerNativeViewElement("cardView", () => 
      require("@nstudio/nativescript-cardview").CardView
    )


   const showPage = async(article) =>{
    await showModal({
      page: SubPage,
      fullscreen: true,
      props:{
        article:article
      }
    })
  } 
</script>


<cardView class="card" elevation="100" margin="25" height="210" width="90%">
    <flexboxLayout class="article" height="100%" flexDirection="row"  on:tap={() => showPage(article)}>
        <image src="{article.urlToImage}" class="img-rounded img" stretch="fill" />
        <stackLayout class="lastStack" height="100%">
          <label textWrap={true} class="p text-center" text ="{article.title}" />
          <label text ="{article.author}" class=" p author text-center"/>
        </stackLayout>
    </flexboxLayout>
</cardView>

<label class="line"/>