<script>
  import { closeModal } from 'svelte-native'
</script>

<page class="page">
    <stackLayout>
          <stackLayout> 
            <button class="button" text="Back to main page" on:tap={() => closeModal()}/>
          </stackLayout>
          
          <stackLayout>
            <webView src="https://www.nytimes.com/2020/04/16/sports/coronavirus-sports-come-back.html" />
          </stackLayout>
    </stackLayout>
</page>


<style>

 .page{
   background-color: rgb(180, 180, 179);
 }
 
 .button{
   width: 100%;
   background-color: gray;
   color: white;
   font-size: 20; 
   margin: 0;
   font-family: 'Times New Roman', Times, serif;
 }
</style>