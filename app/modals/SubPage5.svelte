<script>

  import { closeModal } from 'svelte-native'
  export let article
  

</script>

<page class="page">
  <scrollView>
    <stackLayout class="stack">
      <stackLayout>
        <button marginTop="10" on:tap = { () => closeModal()} text="close"/>
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