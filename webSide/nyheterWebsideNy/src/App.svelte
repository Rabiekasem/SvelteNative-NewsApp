<script>
import Button from './Button.svelte'
import { onMount } from "svelte";
import {db} from "./firebase.js"
	
let personer = [];
onMount( async () => {
		const response = await fetch("https://randomuser.me/api/?results=5");
		const json = await response.json();
		personer = json.results;
		console.log(personer);
	} );
	let name = "";
	let email = "";
	let phone = "";
	let textArea = "";
    const contactUs = db.collection("Users");
    const sendForm = () => {
	contactUs.doc(email)
	.set({
		Name: name,
		Email: email,
		Messege: textArea,
		Phone: phone
		
	});
	name="";
	email="";
	phone="";
	textArea="";
	}
</script>

<body>
<main id="main">
    <header class="header">
        <nav class="header-nav">

        <Button>Change Color</Button>
        <a href="#weAre">We are</a>
		<a href="#sec2">Our work</a>
        <a href="#contact">Contact</a>
    
        </nav>
    </header> 

    <div id="news">
	  <div id="newsArticle">
	    <h1>The world, in one place</h1>
		<p>We bring you alle the news in the world, in one app</p>
	  </div>
	</div>	
</main>

<section id="sec">
    <div id="weAre">
	  {#each personer as person}
			<div class="person">
				<img src={person.picture.large} alt="">
				<h1>{person.name.title} {person.name.first} {person.name.last}</h1>
				<p>{person.email}</p>
			</div>
		{:else}
			<p style="position: absolute; top: 50%; left: 50%;">Loading .... </p>
		{/each} 
	</div>	
</section>

<hr class="line">

<section id="sec2">
  <div id="all">
    <img src="https://lh3.googleusercontent.com/7ah8xqUKs04yrX2TB-tFR7VxzDSVw3JpIOLqUh1ZHQpGL0SX8z1qAzzxTsM2PAgRAlXnh38mEa2n0btBD8KNRzLB5RRcUpxJoAbAT4puNnkezFbB8rCx72Y0vt9gzSB9pkaoZHiEy2vwk5EsyCgSOkF188NPzY92tR9IJbtWipxbBLVsZh86HEZLXGPdh4JL6oLZALyPm3RWT6gUpxyV76IUXZrzNXfhcpfHhvrr4-YYA39LsadeuvVk7ZfkVhoyNHmjDFE_wMCnge5GN5Gh2PrPSHEIUxjmhhpmV4fNRQpCRnrgOU-qlxq26HIDIDaVErbLWa8wBhWjwW6mIGkehG_lUB_oGI5U0DYr2ndJm_kqsemP_TlZH4XGUWvH65_bCqhZQQpeGUe3dY7sFHsCzGqRuYtTbz8WqPLQoKUaBRZJDJHPg_5ce7F1W4LkqPX8AmqXWFSaNEhFf_myRg_0IFHJ3RySDOApR35om9Q8I5TisJjhQpOdKSc1_KwmieoydLg-cu-bR7azxpPuBu787EyoegiMe1GQmxnLJum1UuT5yVXOjXm2k15T23DD2GUmFe9eI8jOSqm0Dm2gE1Ly9pxkFYzXafVP4kGVfHOkrBR4cuBFjNQ0stn50YkpFtxOkcdQwBPrrTyZXd4T-G4J7C1B-4jkvrZZxJulMjbzWXVoKFTdxqoC_5lW8MEpDuvri6T9h650q6f5Y65yVSDQZjU0sOqq6ksCR18BbOi0GjjTC7JxAzLh3qA=w954-h1192-no?authuser=0" alt="phone" class="phoneImage"/>
    <div id="texts">
	  <h1>The world’s most important news, from 100+ trusted global sources, in one place.</h1>
      <p>Content is only half the story. The world's best news experience is free from distraction: ad-free, clickbait-free, and beautifully designed.</p>
    </div>
  </div>
</section>

<hr class="line">

<section id="contactSec">
    <form id="contactForm" on:submit|preventDefault ={sendForm}>
        <h1>Contact us</h1>
        <div class="txtb">
	      <label>Full name :</label>
	      <input type="text" bind:value={name} placeholder="Enter your name">
	    </div>
    
	    <div class="txtb">
	      <label>Email :</label>
	      <input type="email" bind:value={email} placeholder="Enter your Email">
	    </div>

		<div class="txtb">
	      <label>Phone.Nr :</label>
	      <input type="text" bind:value={phone} placeholder="Enter your phone.Nr">
	    </div>
    
	    <div class="txtb">
	      <label>Write to us :</label>
	      <textarea bind:value={textArea}></textarea>
	    </div>
		<button type="submit" class="btn">Send</button>
	</form>
</section>

<hr class="line">

<footer id="footer">
    <div id="footerDiv">
        <a href="https://www.facebook.com" class="fa fa-facebook"></a>
		<a href="https://www.twitter.com" class="fa fa-twitter"></a>
		<a href="https://www.instagram.com" class="fa fa-instagram"></a>
    </div>
</footer>

</body>


<style>
body{
	margin: 0;
}
#main{
	scroll-behavior: smooth;
	width: 100%;
	height: 100%;
	margin: 0;
}
.header{
    height: 100px;
    width: 100%;
    position: absolute;
	margin: 5px 10;
	
}
.header-nav {
    list-style-type: none; 
    margin: 5px 30px;
    padding: 5px 30px;
    font-size: 16pt;
    display: flex;
    justify-content: center;
    align-items: center;
}
.header-nav a {
    padding: 5px 30px;
}
    :global(body) {
		background-color: rgb(226, 226, 226);
		color: #0084f6;
		transition: background-color 0.3s
	}
	:global(body.dark-mode) {
		background-color: #7c7c8a;
		color: #bfc2c7;
	}
#news{
	min-width: 100%;
	min-height: 100%;
	background-image: url("https://mrsmgt.com/wp-content/uploads/2019/05/joshua-rawson-harris-668614-unsplash-min.jpg");
	background-size: cover;
	background-attachment: fixed;
	background-position: center;
	
	display: grid;
    justify-content: center;
    align-content: center;
    text-align: center;
	color: white;
	overflow: hidden;
}
#newsArticle{
	overflow: hidden;
}
#newsArticle h1{
	background-color: rgba(247, 140, 140, 0.7);
	font-size: 40px;
}
#newsArticle p{
	background-color: rgba(175, 165, 165, 0.5);
	font-size: 18px;
}
#weAre{
	--auto-grid-min-size: 250px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(var(--auto-grid-min-size), 1fr));
	justify-content: center;
	align-items: center;
	height: 100%;
	width: 80%;
	margin: 10px auto;
	gap: 10px;
}
#sec{
	margin: 10px auto;
	overflow: hidden;
}
#sec2{
	display: grid;
	justify-content: center;
	align-items: center;
	width: 100%;
	min-height: 800px;
	max-height: auto ;
	margin: 30px auto;
	overflow: hidden;
}
.phoneImage{
	width: 50%;
	margin: 10px auto;
	border-radius: 40% 10%;
}
#all{
	display: grid;
	justify-content: center;
	align-items: center;
	text-align: center;
}
#texts{
	max-width: 600px;
	max-width: auto;
	margin: 10px auto;
}
#texts h1{
	font-size: 40px;
}
.person{
	
	height: 250px;
	min-height: 250px;
	margin: 30px auto;
	display: grid;
	grid-auto-flow: row;	
	justify-items: center;
}
.person h1 {
    font-size: 1.25rem;
    color: darkorange;
	text-align: center;
}
.person img {
    width: 150px;
	height: 150px;
	border-radius: 50%;
	object-fit: cover;
	box-shadow: 6px 6px 9px #7c7c8a;
}
.line{
	width: 60%;
	border: gray solid 1px;
	margin: 60px auto;
}
#contactForm{
	max-width: auto;
	text-align: center;
	background-color: rgb(108, 167, 108);
}
#contactSec{
	max-width: 100%;
    display: grid;
	align-items: center;
	justify-content: center;
	background-color: #3B5998;
}
#contactForm h1{
	font-weight: 200;
}
.txtb{
	border: 0.5px solid gray;
	padding: 12px 18px;
	border-radius: 10px;
	margin-top: 6px;
	width: 400px;
}
.txtb label{
	display: block;
	text-align: left;
	text-transform: uppercase;
	font-size: 15;
}
.txtb input, .txtb textarea{
	width: 100%;
	border: none;
	background-color: rgb(226, 226, 226);
	outline: none;
	font-size: 18px;
	margin-top: 6px;
}
.txtb textarea{
	height: 200px;
}
#contactForm button{
	display: inline-block;
	padding: 14px 0;
	background-color: violet;
	color: white;
	margin-top: 6px;
	cursor: pointer;
	width: 100%;
	text-transform: uppercase;
}
#footer{
	margin: 80px auto;
}
#footerDiv{
	display: grid;
	grid-auto-flow: column;
	align-items: center;
	justify-content: center;
	grid-gap: 80px;
}
.fa {
  padding: 20px;
  font-size: 30px;
  width: 50px;
  text-align: center;
  text-decoration: none;
  margin: 5px 2px;
  border-radius: 48%;
}
.fa-twitter {
  background: #55ACEE;
  color: white;
}
.fa-instagram {
  background: #E1306C;
  color: white;
}
.fa-facebook {
  background: #3B5998;
  color: white;
}
.fa:hover {
    opacity: 0.7;
}
@media screen and (max-width: 480px) and (max-width: 960px){
  #main, #news{
	  max-height: 100%;
  }
  
  .header{
	  padding: 8px;
	  height: auto;
	  margin: 5px 0;
  }
  #weAre, #sec{
	  width: 100%;
	  min-height: 100%;
	  padding: 10px auto;
  }
  #sec{
	  display: grid;
	  align-items: center;
	  justify-content: center;
	  padding: 50px;
  }
  .person{
	  margin: auto auto;
  }
  #contactForm{
	  width: auto;
  }
  #contactSec{
	  
	  width: auto;
	  margin: 5px auto;
  }
  
  .txtb{
	  width: 80%;
	  margin: 0;
  }
  #contactForm button{
	  margin: 20px auto;
  }
  #footerDiv{
	grid-gap: 30px;
  }
  #footer{
	  width: 80%;
	  margin: 0 auto;
  }
  
}
@viewport{
	zoom: 1.0;
	width: extend-to-zoom;
}
</style>