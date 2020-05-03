<script>
  import { closeModal } from 'svelte-native'
</script>

<page class="page">
  <stackLayout>
    <stackLayout> 
      <button class="button" text="Back" on:tap={() => closeModal()}/>
    </stackLayout>
  
    <stackLayout>
      <scrollView height="100%">  
        <webView src="https://www.espn.com/nba/standings" />
      </scrollView>
    </stackLayout>
  </stackLayout> 
</page>



<style>
 .button{
  background-color: rgb(207, 189, 224);
    border-radius: 40%;
    width: 80%;
    margin: 10;
 }
</style>