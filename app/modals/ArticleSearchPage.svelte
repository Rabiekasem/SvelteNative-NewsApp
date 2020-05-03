<script>
  import {showModal} from 'svelte-native'
  import {closeModal} from "svelte-native"
  export let articles
  import SubPageCopy from "./SubPageCopy.svelte"


  let searchInput
  let theSearch = articles

  const filterResults = () => {
    theSearch = articles.filter(item => item.title.toLowerCase().includes(searchInput))
  }

  const showPageCopy = async(item) =>{
    await showModal({
      page: SubPageCopy,
      fullscreen: true,
      props:{
        item:item
      }
    })
  }
</script>

<frame>
   <page class="page">
    <gridLayout rows="80,80,*">
    <button row = "0" text ="close" on:tap={closeModal} class="button"/>
    <searchBar row="1" hint="filter" class="search"
    bind:text={searchInput}
    on:textChange={filterResults}
    />
        <scrollView row="2" class="scroll">
          <stackLayout>
          {#each theSearch as item}
            <cardView class="card" elevation="40" margin="25" height="180" width="80%">
                <flexboxLayout class="article" height="100%" flexDirection="row" on:tap={() => showPageCopy(item)}>
                    <image src="{item.urlToImage}" class="img-rounded img" stretch="fill" />
                    <stackLayout class="lastStack" height="100%">
                      <label textWrap={true} class="p text-center" text ="{item.title}" />
                      <label text ="{item.author}" class=" p author text-center"/>
                    </stackLayout>
                </flexboxLayout>
            </cardView>
          {/each}
          </stackLayout>
        </scrollView>
    </gridLayout>  
   </page>
</frame>


<style>
.articel img{
    width: 280;
  }

  .page{
    background-image: linear-gradient(45deg, #8baaaa 0%, #ae8b9c 100%);
  }

  .button{
    background-color: rgb(207, 189, 224);
    border-radius: 40%;
    width: 60%;
    margin-top: 20;
    margin-bottom: 20;
  }

  .search{
    background-color: rgb(216, 208, 223);
  }
  
  .author{
    bottom: 0;
    font-size: 10;
    
    color: rgb(128, 87, 124);
    font-size: 18;
  }
  .lastStack{
    margin: 20 auto;
    padding: 10;
  }
</style>