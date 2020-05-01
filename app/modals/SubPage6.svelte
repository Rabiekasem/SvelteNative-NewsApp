<script>
  import { closeModal } from 'svelte-native'
</script>

<page class="page">
    <stackLayout>
          <stackLayout> 
            <button class="button" text="Back to main page" on:tap={() => closeModal()}/>
          </stackLayout>
          
          <stackLayout>
            <webView src="https://www.theguardian.com/world/2020/apr/09/climate-crisis-amid-coronavirus-lockdown-nature-bounces-back-but-for-how-long" />
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
   margin: 0;
   font-size: 20; 
   font-family: 'Times New Roman', Times, serif;
 }
</style>