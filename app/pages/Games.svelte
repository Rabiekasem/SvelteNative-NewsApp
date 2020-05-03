<script>
  import {goBack} from "svelte-native"
  import {navigate} from "svelte-native"
  import {showModal} from 'svelte-native'
  import SubPage2 from "../modals/SubPage2.svelte"
  
  import News from "./News.svelte"
  import Global from "./Global.svelte"
  import Football from "./Football.svelte"
  import Contact from "./Contact.svelte"
  import App from "../App.svelte"
  
  import FirestoreParser from "firestore-parser"
  let items = []
  const baseUrl = "https://firestore.googleapis.com/v1/"
  const productsUrl = baseUrl + "projects/my-first-firestore-proje-9c783/databases/(default)/documents/nba-data-2"  
  import { registerNativeViewElement } from 'svelte-native/dom'

  registerNativeViewElement("cardView", () => 
    require("@nstudio/nativescript-cardview").CardView
  )  

  const showMain = async() =>{
        await navigate({
            page: App,
            props:{
                msg:"hi"
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
  
  const showNews = async() =>{
        await navigate({
            page: News,
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


  const showNba = async() =>{
        await showModal({
            page: SubPage2,
            fullscreen: true,
            props:{
                msg: ""
            }
        })
  }  
  const getProducts = async() => {
        fetch(productsUrl)
        .then(response => response.json())
        .then(json => FirestoreParser(json))
            .then(parsed =>{
                items = parsed.documents
             })
        .catch(error => console.log(error))  
  }
  getProducts()

</script>


<page class="page" actionBarHidden={true}>
<scrollView class="scroll">
<stackLayout>

        <stackLayout>
        <scrollView orientation="horizontal">
            <flexboxLayout class="buttonsMain" alignItems="flex-start" backgroundColor="" orientation="horizontal" height="60">
 	            
              <flexboxLayout flexDirection="column" on:tap={() => showMain()}>
        	      <button text="Main" width="70" height="30" backgroundColor="black" color="white"/>
                <image class="basket2" src="~/images/home.png" stretch="fit" width="10" height="10"/>
              </flexboxLayout>
              <flexboxLayout flexDirection="column" on:tap={() => showNews()}>
                <button text="News" width="70" height="30" backgroundColor="black" color="white"/>
                <image class="basket2" src="~/images/news.png" stretch="fit" width="10" height="10" />
              </flexboxLayout>
              <flexboxLayout flexDirection="column">
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
        <scrollView class="scrollOne" height="100%">
            <stackLayout class="stackOne">
              {#each items as item}
                <cardView class="card" elevation="100" margin="25" height="300" width="70%">
                    <flexboxLayout class="stackTwo" flexDirection="column" on:tap={() => showNba()} >
                        <image src="{item.fields.IMG}" stretch="aspectFit" />
                        <label class="h1" text={item.fields.teamName}/>
                        <label class="p" text= "Win: {item.fields.W}"/>
                        <label class="p" text= "Lose: {item.fields.L}"/>
                        <label class="line"/>
                        <label class="p" text= "Rebound: {item.fields.R}"/>
                        <label class="p" text= "Asisst: {item.fields.A}"/>   
                    </flexboxLayout>
                </cardView>
              {:else}
                <activityIndicator busy={true}/>
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

  .basket2{
    margin: auto 40;
  }

  .page{
    background-color: #e2e2e2;
  } 

  .card{
    background-color: rgb(221, 210, 210);
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
  
  .buttonsMain{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    background-color: rgb(0, 0, 0);
  }
  
  .stackTwo > image {
    width: 80;
    height: 80;
  }
  
  .stackTwo{
    justify-content: center;
    align-items: center;
  } 
  .line{
   width: 50%;
   height: 1;
   background-color: white;
   margin: 15;
  }
  .h1{
    font-size: 23;
  }
  .p{
    font-size: 15;
  }
    
</style>