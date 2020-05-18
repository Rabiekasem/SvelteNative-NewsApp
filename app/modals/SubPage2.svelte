<script>
  import { closeModal } from 'svelte-native'
</script>

<page class="page">
  <scrollView>
    <stackLayout>
      <stackLayout> 
        <button class="button" text="Back to main page" on:tap={() => closeModal()}/>
      </stackLayout>
      
      <stackLayout>
        <scrollView height="100%" width="100%">  
          <webView src="https://www.givemesport.com/1523298-the-top-10-footballers-in-the-world-for-every-position-in-2019-have-been-named" />
        </scrollView>
      </stackLayout>
    </stackLayout>
  </scrollView>
</page>


<style>

 .page{
   background-color: rgb(180, 180, 179);
 }
 .button{
  width: 100%;
   background-color: gray;
   color: white;
   margin: 0;
   font-size: 20; 
   font-family: 'Times New Roman', Times, serif;
 }
</style>