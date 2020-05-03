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
  let theText = ""

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

      theText = "Thanks for your feedback"
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
            <flexboxLayout class="buttonsMain" alignItems="flex-start" backgroundColor="" orientation="horizontal" height="60">
     	        
              <flexboxLayout flexDirection="column" on:tap={() => showMain()}>
        	      <button text="Main" width="70" height="30" backgroundColor="black" color="white"/>
                <image class="basket2" src="~/images/home.png" stretch="fit" width="10" height="10"/>
              </flexboxLayout>
              <flexboxLayout flexDirection="column" on:tap={() => showNews()}>
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
        	    <flexboxLayout flexDirection="column" >
                <button text="Contact" width="70" height="30" backgroundColor="black" color="white"/>
                <image class="basket2" src="~/images/contact.png" stretch="fit" width="10" height="10" />
              </flexboxLayout>

            </flexboxLayout>
        </scrollView>
        </stackLayout>

        <stackLayout>
          <scrollView>
            <flexboxLayout class="mainFlex" flexDirection="column" height="100%">
               <textField class="text" bind:text="{firstname}" hint="First name" width="250" maxLength="10" />
               <textField class="text" bind:text="{lastname}" hint="Last name" width="250" maxLength="10" />
               <textField class="text" bind:text="{email}" hint="E-post" width="250" KeyboardType="email" />
               <textView class="text text1" bind:text="{feedback}" hint="Your feedback"/>

               <stackLayout>
                    <absoluteLayout  class= "reactionBar">
                         <image left="60" top="10" class="like" src="~/images/like.png" tintColor="{likeColor}"
                                stretch="aspectFit" on:tap={() => changeColor()} />
                         <image left="150" top="10" class="like" src="~/images/dislike.png" tintColor="{likeColorTwo}"
                                stretch="aspectFit" on:tap={() => changeColor1()} />
                    </absoluteLayout >
               </stackLayout>
               <button class="button" text="Send" width="90" height="60" fontSize="22" on:tap={() => doit()}/>
               <label text="{theText}" class="theFeedback"/>
            </flexboxLayout>
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

  .mainFlex{
    background-color: transparent;
    margin: 50 20;
  }
  
  .buttonsMain{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    background-color: rgb(0, 0, 0);
  }

  .reactionBar{
    margin: 20 20;
  }

  .text{
      text-align: center;
      border-radius: 18;
      margin-bottom: 20;
      color: white;
  }
  
  .text1{
    background-image: linear-gradient(10deg, #8baaaa 0%, #ae8b9c 100%);
  }

  .button{
      background-color: rgba(207, 189, 224, 0.8);
      border-radius: 40%;
      margin-bottom: 20;
  }

  ::placeholder{
    color: beige;
    font-size: 18;
  }
  
  .like{
      width: 75;
      height: 90;

  }

  .theFeedback{
    text-align: center;
  }

    
</style>