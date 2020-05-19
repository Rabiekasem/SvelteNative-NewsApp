<script>
  import { goBack } from "svelte-native";
  import { navigate } from "svelte-native";
  import { showModal } from "svelte-native";
  import MainBar from "../components/Mainbar.svelte";
  import SubPage2 from "../modals/SubPage2.svelte";

  import FirestoreParser from "firestore-parser";
  let items = [];
  const baseUrl = "https://firestore.googleapis.com/v1/";
  const productsUrl =
    baseUrl +
    "projects/my-first-firestore-proje-9c783/databases/(default)/documents/football-data";

  const showPlayer = async () => {
    await showModal({
      page: SubPage2,
      fullscreen: true,
      props: {
        msg: ""
      }
    });
  };
  const getProducts = () => {
    fetch(productsUrl)
      .then(response => response.json())
      .then(json => FirestoreParser(json))
      .then(parsed => {
        items = parsed.documents;
      })
      .catch(error => console.lgo(error));
  };
  getProducts();

</script>


<page class="page" actionBarHidden={true}>
  <scrollView class="scroll">
    <stackLayout>

      <stackLayout>
        <scrollView orientation="horizontal">
          <MainBar />
        </scrollView>
      </stackLayout>

      <stackLayout>
        <label
          text="Top 10 players 2019-2020"
          textWrap={true}
          class="mainText" />
      </stackLayout>

      <scrollView class="scrollOne" height="100%">
        <stackLayout class="stackOne">
          {#each items as item}
            <cardView
              class="card"
              elevation="40"
              margin="25"
              height="100%"
              width="70%"
              radius="20">
              <flexboxLayout
                class="stackTwo"
                flexDirection="column"
                on:tap={() => showPlayer()}>
                <image src={item.fields.Img} stretch="aspectFit" />
                <label class="h1" text={item.fields.Club} />
                <label class="p" text="Asissts: {item.fields.Asissts}" />
                <progress
                  value={item.fields.Asissts / 5}
                  maxValue="100"
                  backgroundColor="gray"
                  width="120" />
                <label class="p" text="Goals: {item.fields.Goals}" />
                <progress
                  value={item.fields.Goals / 5}
                  maxValue="100"
                  backgroundColor="gray"
                  width="120" />
                <label class="line" />
                <label class="p" text="Games: {item.fields.Games}" />
                <label class="p" text="Trophies: {item.fields.Trophies}" />
                <label
                  class="p lastPara"
                  text="Hattrick: {item.fields.Hattrick}" />
              </flexboxLayout>
            </cardView>
          {:else}
            <activityIndicator busy={true} />
          {/each}
        </stackLayout>
      </scrollView>

    </stackLayout>
  </scrollView>
</page>


<style>
  .scroll {
    background-image: linear-gradient(45deg, #8baaaa 0%, #ae8b9c 100%);
  }

  .page {
    font-family: "Times New Roman", Times, serif;
  }

  .mainText {
    text-align: center;
    font-size: 32;
    line-height: 15;
    font-weight: 600;
    background-image: linear-gradient(240deg, #8baaaa 0%, #ae8b9c 100%);
    color: #f3eff1;
    margin: 40 auto;
  }

  .card {
    background-color: rgb(192, 192, 192);
    animation-name: fade;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in;
  }

  @keyframes fade {
    from {
      opacity: 0.5;
      transform: scale(0.8);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  .stackTwo > image {
    width: 100%;
    height: 100%;
  }

  .stackTwo {
    justify-content: center;
    align-items: center;
  }

  .line {
    width: 50%;
    height: 1;
    background-color: white;
    margin: 15;
  }

  .h1 {
    font-size: 23;
  }

  .p {
    font-size: 15;
  }

  .lastPara {
    margin-bottom: 10;
  }
</style>
