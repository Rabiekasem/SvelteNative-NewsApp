<script>
  import {onMount} from "svelte"
  import {goBack} from "svelte-native"
  import {navigate} from "svelte-native"
  import {showModal} from 'svelte-native'
  import MainBar from "../components/Mainbar.svelte"

  import News from "./News.svelte"
  import Football from "./Football.svelte"
  import Contact from "./Contact.svelte"
  import App from "../App.svelte"
  
  import SubPage5 from "../modals/SubPage5.svelte"

  
  let articles = []
  

  const showfootballGames = async(article) =>{
    await showModal({
      page: SubPage5,
      fullscreen: true,
      props:{
        article:article
      }
    })
  }

  const articleSearch = async() =>{
    await showModal({
      page: ArticleSearchPage,
      props:{
        articles:articles
      }
    })
  }
  
    onMount (async() => {
    await fetch("https://www.scorebat.com/video-api/v1/")
    .then (response => response.json())
    .then (json => {
      articles = json
      })
    .catch(error => console.log(error))
  })

</script>


<page class="page" actionBarHidden={true}>
  <scrollView class="scroll">
  <stackLayout>

      <stackLayout class="stackStack">
        <scrollView orientation="horizontal">
          <MainBar />
        </scrollView>
      </stackLayout>
    
      <stackLayout>
          <scrollView height="100%">
            <stackLayout class="articles" >
              {#each articles as article}
                <cardView class="card" elevation="100" margin="25" height="400" width="90%" radius="20" shadowRadius="15">
                  <flexboxLayout class="article" height="100%" flexDirection="row"  on:tap={() => showfootballGames(article)}>
                      <stackLayout class="lastStack">
                        <label class="h1 text-center" text ="{article.title}" />
                        <label class="p text-center" text ="{article.competition.name}" />
                        <label class="p text-center" text ="{article.competition.url}" />
                        <webView class="video" src="{article.embed}" />
                      </stackLayout>
                  </flexboxLayout>
                </cardView>
                <label class="line"/>
              {:else}    
                <activityIndicator busy="{true}" />
              {/each}
            </stackLayout> 
          </scrollView>
      </stackLayout>

  </stackLayout>
  </scrollView>
</page>


<style>

  .scroll{
    background-image: linear-gradient(45deg, #8baaaa 0%, #ae8b9c 100%);
 } 

  .page{
    background-color: #e2e2e2;
  }  

  .card{
      background-color: rgb(212, 212, 212);
    }

  .p{
    margin-left: 12;
  }

  .h1{
    font-size: 18;
  }
  
  .article{
    padding: 10;
    margin: 10;
    color: black;
    max-height: 100;
    width: 90%;
    border-radius: 10%;

    animation-name: fade;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in;
  }

  @keyframes fade{
    from{
      opacity: 0.5;
      transform: scale(0.8)
    }
    to{
      opacity: 1;
      transform: scale(1)
    }
  }

  .line{
    width: 80%;
    height: 1;
    background-color: white;
    margin: 15;
  }
  
  .video{
    margin: 20 auto;
    height: 250;
    width: 100%;
  }

  .lastStack{
    margin: 15 auto;
    font-size: 12;
  }

</style>