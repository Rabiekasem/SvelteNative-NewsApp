<script>
  import Button from "./Button.svelte";
  import { onMount } from "svelte";
  import { db } from "./firebase.js";

  let personer = [];
  onMount(async () => {
    const response = await fetch("https://randomuser.me/api/?results=6");
    const json = await response.json();
    personer = json.results;
    console.log(personer);
  });

  let name = "";
  let email = "";
  let phone = "";
  let textArea = "";

  const contactUs = db.collection("Users");
  const sendForm = () => {
    contactUs.doc(email).set({
      Name: name,
      Email: email,
      Messege: textArea,
      Phone: phone
    });

    thanks.style.display = "block";

    name = "";
    email = "";
    phone = "";
    textArea = "";
  };
</script>


<body>
  <main id="main">
    <header class="header">
      <nav class="header-nav">
        <Button>Change Color</Button>
        <a class="link" href="#weAre">We are</a>
        <a class="link" href="#sec2">Our work</a>
        <a class="link" href="#contactSec">Contact</a>
      </nav>
    </header>

    <div id="news">
      <div id="newsArticle">
        <h1>The world, in one place</h1>
        <p>We bring you alle the news in the world, in one app</p>
      </div>
      <div id="downloadApp">
        <h1>
          Download our
          <span id="span">App</span>
        </h1>
      </div>
    </div>
  </main>

  <section id="sec">
    <div id="weAre">
      {#each personer as person}
        <div class="person">
          <img src={person.picture.large} alt="" />
          <h1>{person.name.title} {person.name.first} {person.name.last}</h1>
          <p>{person.email}</p>
        </div>
      {:else}
        <p style="position: absolute; top: 50%; left: 50%;">Loading ....</p>
      {/each}
    </div>
  </section>

  <hr class="line" />

  <section id="sec2">
    <div id="all">
      <img
        class="phoneImage"
        src="https://lh3.googleusercontent.com/7ah8xqUKs04yrX2TB-tFR7VxzDSVw3JpIOLqUh1ZHQpGL0SX8z1qAzzxTsM2PAgRAlXnh38mEa2n0btBD8KNRzLB5RRcUpxJoAbAT4puNnkezFbB8rCx72Y0vt9gzSB9pkaoZHiEy2vwk5EsyCgSOkF188NPzY92tR9IJbtWipxbBLVsZh86HEZLXGPdh4JL6oLZALyPm3RWT6gUpxyV76IUXZrzNXfhcpfHhvrr4-YYA39LsadeuvVk7ZfkVhoyNHmjDFE_wMCnge5GN5Gh2PrPSHEIUxjmhhpmV4fNRQpCRnrgOU-qlxq26HIDIDaVErbLWa8wBhWjwW6mIGkehG_lUB_oGI5U0DYr2ndJm_kqsemP_TlZH4XGUWvH65_bCqhZQQpeGUe3dY7sFHsCzGqRuYtTbz8WqPLQoKUaBRZJDJHPg_5ce7F1W4LkqPX8AmqXWFSaNEhFf_myRg_0IFHJ3RySDOApR35om9Q8I5TisJjhQpOdKSc1_KwmieoydLg-cu-bR7azxpPuBu787EyoegiMe1GQmxnLJum1UuT5yVXOjXm2k15T23DD2GUmFe9eI8jOSqm0Dm2gE1Ly9pxkFYzXafVP4kGVfHOkrBR4cuBFjNQ0stn50YkpFtxOkcdQwBPrrTyZXd4T-G4J7C1B-4jkvrZZxJulMjbzWXVoKFTdxqoC_5lW8MEpDuvri6T9h650q6f5Y65yVSDQZjU0sOqq6ksCR18BbOi0GjjTC7JxAzLh3qA=w954-h1192-no?authuser=0"
        alt="phone" />
      <div id="texts">
        <h1>
          The world’s most important news, from 100+ trusted global sources, in
          one place.
        </h1>
        <p>
          Content is only half the story. The world's best news experience is
          free from distraction: ad-free, clickbait-free, and beautifully
          designed.
        </p>
      </div>
    </div>
  </section>

  <hr class="line" />

  <section id="contactSec">
    <form id="contactForm" on:submit|preventDefault={sendForm}>
      <h1>Contact Us</h1>
      <div class="txtb">
        <label>Full name :</label>
        <input
          type="text"
          bind:value={name}
          placeholder="Enter your name"
          required />
      </div>

      <div class="txtb">
        <label>Email :</label>
        <input
          type="email"
          bind:value={email}
          placeholder="Enter your Email"
          required />
      </div>

      <div class="txtb">
        <label>Phone.Nr :</label>
        <input
          type="text"
          bind:value={phone}
          placeholder="Enter your phone.Nr"
          required />
      </div>

      <div class="txtb">
        <label>Write to us :</label>
        <textarea bind:value={textArea} />
      </div>
      <button type="submit" class="btn">Send</button>
    </form>
    <div id="thanks">Thanks for your feedback</div>
  </section>

  <hr class="line" />

  <footer id="footer">
    <div id="footerDiv">
      <a href="https://www.facebook.com" class="fa fa-facebook" />
      <a href="https://www.twitter.com" class="fa fa-twitter" />
      <a href="https://www.instagram.com" class="fa fa-instagram" />
    </div>
  </footer>

</body>


<style>
  body {
    margin: 0;
  }

  #main {
    scroll-behavior: smooth;
    width: 100%;
    height: 100%;
    margin: 0;
  }

  .header {
    height: 100px;
    width: 100%;
    position: absolute;
    margin: 5px 10;
  }

  .header-nav {
    list-style-type: none;
    margin: 10px 30px;
    padding: 5px 30px;
    font-size: 18pt;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .header-nav a {
    padding: 5px 30px;
    color: white;
    transition: 0.5s;
  }

  .header-nav a:hover {
    color: grey;
    text-decoration: none;
    transition: 0.5s;
  }

  :global(body) {
    background-image: linear-gradient(180deg, #d6dada 0%, #d3c2ca 80%);
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
    transition: background-color 0.3s;
  }

  :global(body.dark-mode) {
    background-image: linear-gradient(120deg, #c6c8c9 10%, #88919b 100%);
    transition: background-color 0.3s;
  }

  #news {
    min-width: 100%;
    min-height: 100%;
    background-image: url("https://mrsmgt.com/wp-content/uploads/2019/05/joshua-rawson-harris-668614-unsplash-min.jpg");
    box-shadow: 0px 10px 29px 5px rgba(121, 119, 119, 0.45);
    background-size: cover;
    background-attachment: fixed;
    background-position: center;

    display: grid;
    grid-gap: 120px;
    justify-content: center;
    align-content: center;
    text-align: center;
    color: white;
    overflow: hidden;
  }

  #newsArticle h1 {
    background-color: rgba(247, 140, 140, 0.7);
    font-size: 40px;
    animation: background 1.5s forwards ease-in;
    transition: 1.5s;
  }

  @keyframes background {
    from {
      transform: translateY(-40px);
    }
    to {
      transform: translateY(0);
    }
  }

  #newsArticle p {
    background-color: rgba(175, 165, 165, 0.5);
    font-size: 18px;
    animation: move 2s forwards ease-in;
    animation-delay: 1.5s;
    transition: 1s;
  }

  @keyframes move {
    0% {
      transform: scale(1);
      transform: translateY(0);
    }

    50% {
      transform: scale(0.1);
      transform: translateY(30px);
    }

    100% {
      transform: scale(1);
      transform: translateY(0);
    }
  }

  #downloadApp h1 {
    background-color: rgba(175, 165, 165, 0.5);
    font-size: 30px;
  }

  #span {
    animation: light 2s alternate forwards infinite ease-in-out,
      light2 2s alternate forwards 1 3.5s ease-in-out;
    transition: 2s;
    font-size: 35px;
  }

  @keyframes light {
    0% {
      color: rgba(250, 121, 121, 0.7);
    }
    100% {
      color: #746069;
    }
  }

  @keyframes light2 {
    0% {
      letter-spacing: 0;
    }
    50% {
      letter-spacing: 40px;
    }
    100% {
      letter-spacing: 0px;
    }
  }

  #weAre {
    --auto-grid-min-size: 250px;
    display: grid;
    grid-template-columns: repeat(
      auto-fill,
      minmax(var(--auto-grid-min-size), 1fr)
    );
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 80%;
    margin: 10px auto;
    gap: 10px;
  }

  #sec {
    margin: 10px auto;
    overflow: hidden;
  }

  #sec2 {
    display: grid;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 800px;
    max-height: auto;
    margin: 30px auto;
    overflow: hidden;
  }

  .phoneImage {
    max-width: 60%;
    min-height: 60%;
    margin: 10px auto;
    border-radius: 10%;
    object-fit: cover;
    box-shadow: 0px 10px 29px 5px rgba(0, 0, 0, 0.55);
  }

  #all {
    display: grid;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  #texts {
    max-width: 600px;
    max-width: auto;
    margin: 20px auto;
  }

  #texts p {
    padding-top: 20px;
    color: white;
    line-height: 30px;
  }

  #texts h1 {
    font-size: 40px;
  }

  .person {
    height: 250px;
    min-height: 250px;
    margin: 30px auto;
    display: grid;
    grid-auto-flow: row;
    justify-items: center;
    transition: 0.5s ease-in-out;
  }

  .person:hover {
    transform: scale(1.2);
    font-size: 10px;
  }

  .person h1 {
    font-size: 20px;
    color: rgba(250, 121, 121, 0.7);
    text-align: center;
  }

  .person p {
    font-size: 15px;
    color: rgb(238, 238, 238);
  }

  .person img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 6px 6px 9px #7c7c8a;
  }

  .line {
    width: 60%;
    border: gray solid 1px;
    margin: 60px auto;
  }

  #contactForm {
    max-width: auto;
    text-align: center;
  }

  #contactSec {
    max-width: 100%;
    display: grid;
    align-items: center;
    justify-content: center;
  }

  #contactForm h1 {
    font-size: 30px;
    margin-bottom: 15px;
    transition: 1s;
  }

  #contactForm:hover > h1 {
    animation: contact 1.8s forwards 1 ease-in;
    transition: 1s;
  }

  @keyframes contact {
    0% {
      color: rgb(189, 245, 151);
    }
    50% {
      color: rgba(250, 121, 121, 0.7);
    }
    100% {
      color: rgb(0, 0, 0);
    }
  }

  .txtb {
    border: 0.5px solid gray;
    padding: 12px 18px;
    border-radius: 10px;
    margin-top: 6px;
    width: 400px;
  }
  .txtb label {
    display: block;
    text-align: left;
    text-transform: uppercase;
    font-size: 15;
  }
  .txtb input,
  .txtb textarea {
    width: 100%;
    border: none;
    background-color: transparent;
    outline: none;
    font-size: 18px;
    margin-top: 6px;
  }

  .txtb textarea {
    height: 200px;
  }

  #contactForm button {
    display: inline-block;
    padding: 14px 0;
    background-color: rgba(250, 121, 121, 0.7);
    color: white;
    margin-top: 10px;
    cursor: pointer;
    width: 100%;
    text-transform: uppercase;
    transition: 0.5s;
  }

  #contactForm button:hover {
    background-image: linear-gradient(45deg, #c9d3a4 50%, transparent 40%);
    background-position: 100%;
    background-size: 400%;
    transition: 800ms ease-in-out;
    font-size: 20px;
    border-radius: 8px;
  }

  #thanks {
    text-align: center;
    justify-content: center;
    margin-top: 15px;
    display: none;
  }

  #footer {
    margin: 80px auto;
  }

  #footerDiv {
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    justify-content: center;
    grid-gap: 80px;
    margin-bottom: 10px;
  }

  .fa {
    padding: 20px;
    font-size: 30px;
    width: 100%;
    text-align: center;
    text-decoration: none;
    margin: 5px 2px;
    border-radius: 50%;
  }

  .fa-twitter {
    background: #55acee;
    color: white;
  }

  .fa-instagram {
    background: #e1306c;
    color: white;
  }

  .fa-facebook {
    background: #3b5998;
    color: white;
  }

  .fa:hover {
    opacity: 0.7;
  }

  @media screen and (max-width: 480px) and (max-width: 960px) {
    #main,
    #news {
      max-height: 100%;
    }

    .header {
      padding: 8px;
      height: auto;
      margin: 5px 0;
    }

    .header-nav a {
      padding: 5px 20px;
    }

    #weAre,
    #sec {
      max-width: 100%;
      min-height: 100%;
      padding: 10px auto;
    }

    #sec {
      display: grid;
      align-items: center;
      justify-content: center;
      padding: 50px;
    }

    #newsArticle p {
      padding: 5px;
    }

    .line {
      margin: 20px auto;
    }

    .person {
      margin: auto auto;
    }

    #contactForm {
      width: auto;
    }

    #contactSec {
      width: auto;
      margin: 5px auto;
    }

    .txtb {
      width: 100%;
      margin: auto 5px;
    }

    #contactForm button {
      margin: 20px auto;
    }

    #contactForm h1 {
      margin: 20px auto;
    }

    #footerDiv {
      grid-gap: 30px;
    }
    #footer {
      width: 80%;
      margin: 0 auto;
    }
  }

  @viewport {
    zoom: 1;
    width: extend-to-zoom;
  }
</style>
