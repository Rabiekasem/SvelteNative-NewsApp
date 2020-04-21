<script>
  import {goBack} from "svelte-native"
  import {navigate} from "svelte-native"
  import {showModal} from 'svelte-native'
  
  import News from "./News.svelte"
  import Global from "./Global.svelte"
  import Football from "./Football.svelte"
  import Games from "./Games.svelte"
  import App from "../App.svelte"
  
  

  const showMain = async() =>{
        await navigate({
            page: App,
            props:{
                msg:"hi"
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

  let firstname = ""
  let lastname = ""
  let email = ""
  let feedback = ""

  let likeColor= ""
  let likeColorTwo= ""

  const doit = () => {
      console.log (
              firstname,
              lastname,
              email,
              feedback,
              likeColor,
              likeColorTwo
              )

      firstname = ""
      lastname = ""
      email = ""
      feedback = ""
      likeColor= ""
      likeColorTwo= ""
  }

  const changeColor = () => {
      likeColor = "red"
      likeColorTwo = ""
  }
  const changeColor1 = () => {
      likeColor = ""
      likeColorTwo = "black"
  }


</script>


<page class="page" actionBarHidden={true}>
    <scrollView class="scroll">
    <stackLayout>

        <stackLayout>
        <scrollView orientation="horizontal">
            <flexboxLayout class="buttonsMain" alignItems="flex-start" backgroundColor="">
     	        <button text="Main" width="70" height="30" backgroundColor="" on:tap={() => showMain()}/>
     	        <button text="News" width="70" height="30" backgroundColor="" on:tap={() => showNews()}/>
     	        <button text="Games" width="70" height="30" backgroundColor="" on:tap={() => showGames()}/>
                <button text="Global" width="70" height="30" backgroundColor="" on:tap={() => showGlobal()}/>
                <button text="Football" width="70" height="30" backgroundColor="" on:tap={() => showFootball()}/>
                <button text="Contact" width="70" height="30" backgroundColor="" />
            </flexboxLayout>
        </scrollView>
        </stackLayout>

        <stackLayout>
          <scrollView>
            <flexboxLayout flexDirection="column" backgroundColor="">
               <textField class="text" bind:text="{firstname}" hint="First name" width="250" maxLength="10" backgroundColor="wheat"/>
               <textField class="text" bind:text="{lastname}" hint="Last name" width="250" maxLength="10" backgroundColor="wheat"/>
               <textField class="text" bind:text="{email}" hint="E-post" width="250" KeyboardType="email" backgroundColor="wheat"/>
               <textView class="text" bind:text="{feedback}" hint="Your feedback" backgroundColor="lightgray"/>

               <stackLayout>
                    <absoluteLayout  class= "reactionBar">
                         <image left="90" top="10" class="like" src="~/images/like.png" tintColor="{likeColor}"
                                stretch="aspectFit" on:tap={() => changeColor()} />
                         <image left="180" top="10" class="like" src="~/images/dislike.png" tintColor="{likeColorTwo}"
                                stretch="aspectFit" on:tap={() => changeColor1()} />
                    </absoluteLayout >
               </stackLayout>
               <button class="button" text="send" width="90" height="60" backgroundColor="" on:tap={() => doit()}/>
            </flexboxLayout>
          </scrollView>
        </stackLayout>

        
            
            
    </stackLayout>   
    </scrollView> 
</page>


<style>

  .scroll{
    background-color: #e2e2e2;
 } 
  .page{
    background-color: #e2e2e2;
  } 
  
  .buttonsMain{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    background-color: rgb(0, 0, 0);
  }
  
  .buttonsMain > button{
    margin: 15 15;
    background-color: rgb(0, 0, 0);
    color: whitesmoke;
  }

  .text{
      text-align: center;
      border-radius: 18;
  }

  .button{
      background-color: #e2b0b0;
      border-radius: 18;
  }
  
  .like{
      width: 75;
      height: 90;

  }

    
</style>