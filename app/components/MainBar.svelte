<script>

  import {navigate} from "svelte-native"
  import {showModal} from "svelte-native"
  import Contact from "../pages/Contact.svelte"
  import News from "../pages/News.svelte"
  import Global from "../pages/Global.svelte"
  import Football from "../pages/Football.svelte"
  import App from "../App.svelte"



  const showMain = async() =>{
    await navigate({
      page: App,
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

    const showGlobal = async() =>{
        await navigate({
            page: Global,
            props:{
                msg:""
            }
        })
    } 

</script>


    <flexboxLayout class="buttonsMain" alignItems="flex-start" backgroundColor="" orientation="horizontal" height="60">
                    
        <flexboxLayout class="flex" flexDirection="column" on:tap={() => showMain()}>
           <button text="Main" width="70" height="30" backgroundColor="black" color="white"/>
           <image class="basket2" src="~/images/home.png" stretch="fit" width="10" height="10"/>
        </flexboxLayout>
        <flexboxLayout class="flex" flexDirection="column" on:tap={() => showNews()}>
            <button text="News" width="70" height="30" backgroundColor="black" color="white"/>
            <image class="basket2" src="~/images/news.png" stretch="fit" width="10" height="10" />
        </flexboxLayout>
        <flexboxLayout class="flex" flexDirection="column" on:tap={() => showGlobal()}>
            <button text="Global" width="70" height="30" backgroundColor="black" color="white"/>
            <image class="basket2" src="~/images/football.png" stretch="fit" width="10" height="10" />
        </flexboxLayout>
        <flexboxLayout class="flex" flexDirection="column" on:tap={() => showFootball()}>
            <button text="Players" width="70" height="30" backgroundColor="black" color="white"/>
            <image class="basket2" src="~/images/players.png" stretch="fit" width="10" height="10" />
        </flexboxLayout>
        <flexboxLayout class="flex" flexDirection="column" on:tap={() => showContact()}>
            <button text="Contact" width="70" height="30" backgroundColor="black" color="white"/>
            <image class="basket2" src="~/images/contact.png" stretch="fit" width="10" height="10" />
        </flexboxLayout>
                    
    </flexboxLayout>


    <style>
    
    .basket2{
      margin: auto 40;
    }

    .buttonsMain{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    background-color: rgb(0, 0, 0);

    animation-name: leftIn;
    animation-duration: 0.8s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in;
    }

    @keyframes leftIn{
    from { transform: translateY(80); }
    to { transform: translateY(0); }
    }
    
    </style>