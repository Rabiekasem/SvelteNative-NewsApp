<script>

  import {navigate} from "svelte-native"
  import {showModal} from "svelte-native"
  import Contact from "./pages/Contact.svelte"
  import News from "./pages/News.svelte"
  import Global from "./pages/Global.svelte"
  import Football from "./pages/Football.svelte"
  import MainBar from "./components/Mainbar.svelte"
  
  import SubPage3 from "./modals/SubPage3.svelte"
  import SubPage4 from "./modals/SubPage4.svelte" 
  import SubPage6 from "./modals/SubPage6.svelte"
  import SubPage7 from "./modals/SubPage7.svelte"

  import { registerNativeViewElement } from 'svelte-native/dom'
    registerNativeViewElement("cardView", () => 
      require("@nstudio/nativescript-cardview").CardView
    )
  

  const lebronArticle = async() =>{
        await showModal({
            page: SubPage3,
            fullscreen: "true",
            props:{
                msg:""
            }
        })
  } 

  const natureArticle = async() =>{
        await showModal({
            page: SubPage6,
            fullscreen: "true",
            props:{
                msg:""
            }
        })
  } 

  const sportsArticle = async() =>{
        await showModal({
            page: SubPage7,
            fullscreen: "true",
            props:{
                msg:""
            }
        })
  } 

  const goatArticle = async() =>{
        await showModal({
            page: SubPage4,
            fullscreen: "true",
            props:{
                msg:""
            }
        })
  }

  let likeColor= ""
  let likeColorTwo= ""

  const changeColor = () => {
      likeColor = "yellow"
      likeColorTwo = ""
      console.log(likeColor + " I liked the article")
  }
  const changeColor1 = () => {
      likeColor = ""
      likeColorTwo = "black"
      console.log(likeColorTwo + " I did not like the article")
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

            
            <absoluteLayout class="main">
                <image src="~/images/nature.jpg" top="0" class="image" stretch="fill" />
                <label textwrap={true} left="50%" top="250" class="mainText" text="NATURE..." />
                <label textwrap={true} left="80%" top="320" class="mainText2" text="are breathing again" />
            </absoluteLayout>

            <stackLayout class="nature" on:tap={() => natureArticle()}>
                <button class="button" />
                <label textwrap={true} class="natureLabel" text="In coronavirus lockdown, nature bounces back"/>
                <label textwrap={true} class="natureLabel1" text="he environmental changes wrought by the coronavirus were first visible from space. Then, as the disease and the lockdown spread, they could be sensed in the sky above our heads, the air in our lungs and even the ground beneath our feet."/>
                <button class="label2" text="Click to read more"/>
            </stackLayout>

            <stackLayout>
                <stackLayout class="question">
                   <label text="Did you like this article ?"/>
                </stackLayout>
                <absoluteLayout  class= "reactionBar">
                    <image left="20%" top="10" class="like" src="~/images/smile.png" tintColor="{likeColor}"
                           stretch="aspectFit" on:tap={() => changeColor()} />
                    <image left="100%" top="10" class="like" src="~/images/sad.png" tintColor="{likeColorTwo}"
                            stretch="aspectFit" on:tap={() => changeColor1()} />
                </absoluteLayout >
            </stackLayout>

               <label class="line"/>

            <absoluteLayout class="main">
                <image src="~/images/football.jpg" top="100" left="110" width="40%" height="30%" class=" image1" stretch="fill" />
                <image src="~/images/baseball.jpg" top="0" left="0" width="40%" height="30%" class=" image2" stretch="fill" />
                <image src="~/images/tennis.jpg" top="0" left="220" width="40%" height="30%" class="image3" stretch="fill" />
            </absoluteLayout>

            <stackLayout class="nature" on:tap={() => sportsArticle()}>
                <button class="button" />
                <label textwrap={true} class="natureLabel" text="When Will Sports Come Back? Here Is What Has to Happen First"/>
                <label textwrap={true} class="natureLabel1" text="Sports leagues face large, but not insurmountable, obstacles to even getting games back on television. Fans in the stands? Wait till next year."/>
                <button class="label2" text="Click to read more"/>
            </stackLayout>

            <label class="line"/>
            
        
            <stackLayout>
                <image class="stack2" src="~/images/lebron4.jpg"
                stretch="fill" />
                <image class="logoImg" src="https://i.imgur.com/PLIvCSw.png"
                stretch="fill" />
            </stackLayout>
    
            
            <stackLayout class="stack3" on:tap={() => lebronArticle()} >
                <label class="label1" textwrap={true} text="LeBron's Physique Desirable!" />
                <button class="label2" text="Click to read more"/>
                <label class="label3" textwrap={true} text="Lebron James is one of the best examples of that muscular, but lean physique that we talk about all the time" />
            </stackLayout>

            <stackLayout>
               <dockLayout stretchLastChild="true" backgroundColor="#3c495e">
                    <image class="dockImg" height="300" width="125" src="~/images/lebron1.jpg"
                    stretch="aspectFill" /> 
	                <image class="dockImg" height="300" width="125" src="~/images/lebron2.jpg"
                    stretch="fill" />
                    <image class="dockImg" height="300" src="~/images/lebron3.jpg"
                    stretch="fill" />
               </dockLayout>
            </stackLayout>

            <stackLayout class="stack5" on:tap={() => goatArticle()}>
                <label class="label1" textwrap={true} text="The Ultimate NBA G.O.A.T. Debate" />
                <button class="label2" text="Click to read"/>
                <label class="label3" textwrap={true} text="LeBron James continues to build his legacy as one of the greatest NBA athletes ever...but is he the greatest player of all time? It's a debate that has raged between NBA fans for years. Jordan is revered as the greatest because of his killer instinct and championship pedigree. James has accomplished more statistically at this point in his career and may be the more imposing athlete. But who is the 🐐 ? 🏀" />
            </stackLayout>

            <stackLayout>
                <flexboxLayout flexDirection="column" backgroundColor="#3c495e">
	                <image height="100" width="100%" src="~/images/jordan.jpg"
                    stretch="aspectFill" /> 
	                <image height="100" width="100%" src="~/images/braynt.jpg"
                    stretch="fill" />
                    <image height="100" src="~/images/james.jpg"
                    stretch="fill" />
                </flexboxLayout>
            </stackLayout>
    
        </stackLayout>
        
    </scrollView>
    
</page>


<style>

 .page{
     font-family: 'Times New Roman', Times, serif;
 }

 .scroll{
    background-image: linear-gradient(45deg, #8baaaa 0%, #ae8b9c 100%);
 } 

 .mainText{
    font-size: 40;
      
    animation-name: change;
    animation-duration: 2s;
    animation-direction: alternate;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-timing-function: ease-out;
    transition: 2s;
 }

 .mainText2{
    font-size: 20;
    color: green;  
    animation-name: change2;
    animation-duration: 1.5s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in;
 }

 .line{
   width: 80%;
   height: 1.5;
   background-color: white;
   margin: 10 5;
   margin-bottom: 50;
  }

 .button{
    width: 30;
    height: 30;
    border-radius: 50%;
    background-color: white;
    animation-name: change3;
    animation-duration: 0.5s;
    animation-iteration-count: infinite;
    animation-fill-mode: both;
    animation-timing-function: ease-in-out;
 }

 .image{
    animation-name: change4;
    animation-duration: 2s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in-out;
 }

 .reactionBar{
     margin: 5 25%;
     margin-bottom: 25;
 }

 .question{
    margin: auto 25%;
    margin-top: 50;
 }

 .like{
     width: 50;
     height: 50;
 }

 @keyframes change4{
     from{
         opacity: 0.2;
         transition: 2s;
     }
     to{
         opacity: 1;
         transition: 2s;
     }
 }

 @keyframes change3{
     from{
         
         background-color: white;
         transition: 0.5s;
     }
     to{
        
         background-color: red;
         transition: 0.5s;
     }
     
 }

 @keyframes change{
     0%{
         color: black; 
         background-color: white;
         transition: 2s;
     }
     50%{
         color: white;
         background-color: rgb(113, 250, 95);
         transition: 2s;
     }
     100%{
         color: white;
         background-color: rgb(247, 247, 247);
         transition: 2s;
     }
     
 }

 @keyframes change2{
     from{
         opacity: 0;
         transform: translateX(-300);
         color: white; 
         background-color: red;
         transition: 1s;
         
     }
     to{
         opacity: 1;
         transform: translateX(10);
         color: black;
         background-color: white;
         transition: 1s;
     }
     
 }

 .natureLabel{
     font-weight: 600;
     font-size: 40;
     margin-top: 5;
     margin-bottom: 15;
 }

 

 .stack2{
    animation-name: fadeToLeft;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in;
    position: relative;
    top: 0;
    left: 0;
    background-attachment: fixed;
 }

 .stack3, .stack5, .nature{
     margin: 0 15;
     margin-top: 40;
     margin-bottom: 20;
 }

 .logoImg{
    animation-name: fadeToRight;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in;
    position: absolute;
    width: 110;
    height: 90;
    margin-top: -45;
 }

 .label1{
    font-weight: 600;
    font-size: 40;
 }

 .label2{
    margin-top: 10;
    margin-top: 40;
    background-color: rgb(207, 189, 224);
    border-radius: 40%;
    width: 60%;
 }

 .label3{
     margin-top: 15;
 }

 
 @keyframes fadeToLeft{
    from { transform: translateX(-100); }
    to { transform: translateX(0); }
 }
 @keyframes fadeToRight{
    from { transform: translateX(100); }
    to { transform: translateX(0); }
 }

</style>
