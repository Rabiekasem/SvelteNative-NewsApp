<script>

  import { closeModal } from 'svelte-native'
  export let item

</script>

<page class="page">
  <scrollView class="scroll">
    <stackLayout class="stack">
      <label class="label1" textWrap={true} text= "{item.title}" />
      <label class="line"/>
      <label class="label2" marginTop="10" text= "By {item.author}" />
      <label class="label3" textWrap={true} text= "{item.description}" />
      <image class="img-rounded" marginTop="10"
        src = {item.urlToImage}
        stretch = "aspectFit"
      />
      <button class="button" on:tap = { () => closeModal()} text="close"/>              
    </stackLayout>
  </scrollView>
</page>



<style>
 .stack{
    padding: 24;
  }

 .scroll{
   font-family: 'Times New Roman', Times, serif;
  }

 .page{
    background-image: linear-gradient(45deg, #8baaaa 0%, #ae8b9c 100%);
  }

 .button{
    background-color: rgb(207, 189, 224);
    border-radius: 40%;
    width: 60%;
    margin-top: 20;
 }

 .label1{
   font-size: 40;
 }

 .label3{
   font-size: 20;
 }
 
 .line{
    width: 80%;
    height: 1;
    background-color: white;
    margin: 15;
  }

</style>