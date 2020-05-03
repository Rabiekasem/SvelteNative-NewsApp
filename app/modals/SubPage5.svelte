<script>

  import { closeModal } from 'svelte-native'
  export let article
  

</script>

<page class="page">
  <scrollView>
    <stackLayout class="stack">
      <stackLayout>
        <button class="button" on:tap = { () => closeModal()} text="close"/>
        <label class="line"/>
      </stackLayout> 
      <webView class="video" height="100%" width="100%" src="{article.url}" />
    </stackLayout>
  </scrollView>
</page>



<style>
 .stack{
    padding: 14;
 }

 .page{
    background-color: #e2e2e2;
 }

 .button{
    background-color: rgb(207, 189, 224);
    border-radius: 40%;
    width: 60%;
    margin-top: 20;
 }
 
 .line{
    width: 80%;
    height: 1;
    background-color: white;
    margin: 15;
  }

</style>