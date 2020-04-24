<script>
  import {onMount} from "svelte"
  import {goBack} from "svelte-native"
  import {navigate} from "svelte-native"
  import {showModal} from 'svelte-native'

  import Games from "./Games.svelte"
  import News from "./News.svelte"
  import Football from "./Football.svelte"
  import Contact from "./Contact.svelte"
  import App from "../App.svelte"
  
  import SubPage5 from "../modals/SubPage5.svelte"

  
  import { registerNativeViewElement } from 'svelte-native/dom'
    registerNativeViewElement("cardView", () => 
      require("@nstudio/nativescript-cardview").CardView
    )
  
  let articles = []
  
  const showMain = async() =>{
    await navigate({
      page: App,
      props:{
        msg:""
      }
    })
  }

  const showGames = async() =>{
    await navigate({
      page: Games,
      props:{
        msg:""
      }
    })
  }

  const showFootball = async() =>{
    await navigate({
      page: Football,
      props:{
        msg:""
      }
    })
  }

  const showContact = async() =>{
        await navigate({
            page: Contact,
            props:{
                msg:""
            }
        })
    } 


  const showNews = async() =>{
        await navigate({
            page: News,
            props:{
                msg:""
            }
        })
    } 

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
    .then(json => {
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
          <flexboxLayout class="buttonsMain" alignItems="flex-start" backgroundColor="">
    	    <button text="Main" width="70" height="30" backgroundColor="" on:tap={() => showMain()}/>
    	    <button text="News" width="70" height="30" backgroundColor="" on:tap={() => showNews()}/>
    	    <button text="Games" width="70" height="30" backgroundColor="" on:tap={() => showGames()}/>
            <button text="Global" width="70" height="30" backgroundColor="" />
            <button text="Football" width="70" height="30" backgroundColor="" on:tap={() => showFootball()}/>
            <button text="Contact" width="70" height="30" backgroundColor="" on:tap={() => showContact()}/>
          </flexboxLayout>
        </scrollView>
      </stackLayout>
    
      <stackLayout>
          <scrollView height="100%">
            <stackLayout class="articles" >
              {#each articles as article}
                <cardView class="card" elevation="100" margin="25" height="400" width="100%">
                  <flexboxLayout class="article" height="100%" flexDirection="row"  on:tap={() => showfootballGames(article)}>
                      <stackLayout class="lastStack">
                        <label class="p text-center" text ="{article.title}" />
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
    background-color: #dbbaba;
 } 

  .page{
    background-color: #e2e2e2;
  }  

  .card{
      background-color: #e9e9e9;
    }

    .p{
      margin-left: 12;
    }

  .buttonsMain{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    background-color: rgb(0, 0, 0);

  }  
  .buttonsMain > button{
    background-color: rgb(0, 0, 0);
    margin: 15 15;
    color: whitesmoke;
     
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