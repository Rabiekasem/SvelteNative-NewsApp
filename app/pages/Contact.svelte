<script>
  import {goBack} from "svelte-native"
  import {navigate} from "svelte-native"
  import {showModal} from 'svelte-native'
  import MainBar from "../components/Mainbar.svelte"
  
  
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

  let checkMe =""
  const onCheckedChange = () => {
    if(checkMe){
      console.log("News subscribe")
    }
    else{
      console.log("no News subscribe")
    }
  }


</script>


<page class="page" actionBarHidden={true}>
    <scrollView class="scroll">
    <stackLayout>

        <stackLayout>
        <scrollView orientation="horizontal">
            <MainBar />
        </scrollView>
        </stackLayout>

        <stackLayout>
          <scrollView>
            <flexboxLayout class="mainFlex" flexDirection="column" height="100%">
               <textField class="text" bind:text="{firstname}" hint="First name" width="250" maxLength="10" />
               <textField class="text" bind:text="{lastname}" hint="Last name" width="250" maxLength="10" />
               <textField class="text" bind:text="{email}" hint="E-post" width="250" KeyboardType="email" />
               <textView class="text text1" bind:text="{feedback}" hint="Your feedback"/>
               <flexboxLayout alignItems="flex-start">
               <label text="Subscribe for more news" width="80%" height="80%" paddingLeft="15" paddingTop="15"/>
               <switch bind:checked="{checkMe}" width="20%" height="20%" on:checkedChange={() => onCheckedChange()} color="black" backgroundColor="black" offBackgroundColor="red" />
               </flexboxLayout>

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
  
  .page{
    background-color: #e2e2e2;
  } 

  .mainFlex{
    background-color: transparent;
    margin: 50 20;
  }

  .reactionBar{
    margin: 20 auto;
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
      width: 30%;
      height: 60%;

  }

  .theFeedback{
    text-align: center;
  }

    
</style>