<script>
  import {onMount} from "svelte"
  import {goBack} from "svelte-native"
  import {navigate} from "svelte-native"
  import {showModal} from 'svelte-native'

  import Games from "./Games.svelte"
  import Global from "./Global.svelte"
  import Football from "./Football.svelte" 
  import Contact from "./Contact.svelte" 
  import App from "../App.svelte"
  import ArticleSearchPage from "../modals/ArticleSearchPage.svelte"

  import SubPage from "../modals/SubPage.svelte"
  
  const apiKey = "e14f4ede420e450baafed861c6893a83"
  const NewsApi = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${apiKey}`
  
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
 

  const showGlobal = async() =>{
    await navigate({
      page: Global,
      props:{
        msg:""
      }
    })
  }

  const showPage = async(article) =>{
    await showModal({
      page: SubPage,
      fullscreen: true,
      props:{
        article:article
      }
    })
  }

  const articleSearch = async() =>{
      showModal({
      page: ArticleSearchPage,
      fullscreen: true,
      props:{
        articles:articles
      }
    })
  }
  
  onMount (() => {
    fetch(NewsApi)
    .then(response => response.json())
    .then(json => {
      articles = json.articles
      })
    .catch(error => console.log(error))
  })

</script>


<page class="page" actionBarHidden={false}>
  <actionBar title="Search">
      <actionItem on:tap={articleSearch}
      android.systemIcon="ic_menu_search" android.position = "right"
      ios.systemIcon="10" ios.position="right"
      />
  </actionBar>

  <scrollView class="scroll">
  <stackLayout>
  
      <stackLayout class="stackStack">
        <scrollView orientation="horizontal">
          <flexboxLayout class="buttonsMain" alignItems="flex-start" backgroundColor="" orientation="horizontal" height="60">
    	      
              <flexboxLayout flexDirection="column" on:tap={() => showMain()}>
        	      <button text="Main" width="70" height="30" backgroundColor="black" color="white"/>
                <image class="basket2" src="~/images/home.png" stretch="fit" width="10" height="10"/>
              </flexboxLayout>
              <flexboxLayout flexDirection="column">
                <button text="News" width="70" height="30" backgroundColor="black" color="white"/>
                <image class="basket2" src="~/images/news.png" stretch="fit" width="10" height="10" />
              </flexboxLayout>
              <flexboxLayout flexDirection="column" on:tap={() => showGames()}>
                <button text="Games" width="70" height="30" backgroundColor="black" color="white"/>
                <image class="basket2" src="~/images/basketball.png" stretch="fit" width="10" height="10" />
              </flexboxLayout>
              <flexboxLayout flexDirection="column" on:tap={() => showGlobal()}>
                <button text="Global" width="70" height="30" backgroundColor="black" color="white"/>
                <image class="basket2" src="~/images/football.png" stretch="fit" width="10" height="10" />
              </flexboxLayout>
              <flexboxLayout flexDirection="column" on:tap={() => showFootball()}>
                <button text="Players" width="70" height="30" backgroundColor="black" color="white"/>
                <image class="basket2" src="~/images/players.png" stretch="fit" width="10" height="10" />
              </flexboxLayout>
        	    <flexboxLayout flexDirection="column" on:tap={() => showContact()}>
                <button text="Contact" width="70" height="30" backgroundColor="black" color="white"/>
                <image class="basket2" src="~/images/contact.png" stretch="fit" width="10" height="10" />
              </flexboxLayout>

          </flexboxLayout>
        </scrollView>
      </stackLayout>
      
      
    
      <stackLayout>
          <scrollView height="100%">
            <stackLayout class="articles" >
              {#each articles as article}
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

  .basket2{
    margin: auto 40;
}

  .scroll{
    background-color: #e2e2e2;
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
  .articles{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .line{
    width: 80%;
    height: 1;
    background-color: white;
    margin: 15;
  }
  .img{
    width: 280;
  }
  
  .author{
    bottom: 0;
    font-size: 10;
    
    color: rgb(128, 87, 124);
    font-size: 18;
  }
  .lastStack{
    margin: 20 auto;
  }

</style>