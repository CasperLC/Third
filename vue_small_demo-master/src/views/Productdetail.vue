<template>
  <main>

    <section id="main_box">
        <div id="diven">
            <div id="stortbillede">
              <video autoplay muted loop id="myVideo">
                <source src="video.webm" type="video/mp4"> 
              </video>
            </div>
            <div id="stortbilledetext"></div>
            <div id="main-box-box"><img src="pic1.PNG" alt=""></div>
            
                
            
            
            <div id="main-box-box"><img src="" alt="" style="width:40%;"> </div>
            
            <div id="main-box-box"><img src="" alt="" style="width:40%;"></div>
          
        </div>
    </section>

  </main>

</template>




<style>

#stortbillede {
width:270px;    
height:337px;
margin-left:auto; 
margin-right:auto; 
display:flex;
border:2px solid black;
position:absolute;
margin-left:160px;
}

#stortbilledetext {
  border:2px solid black;
  width:230px;    
  height:340px;
  margin-left:565px;
  display:flex;
  position:absolute;
}

#pix1 {
    position:absolute;
    background-size:cover;
    padding-left:10px;
    padding-top:10px;
}

#myVideo {
    height:100%;
    width:265px;
    right:1;
    bottom:0;
    justify-content: center;
    position:absolute;
}

#diven {
height:400px;
width: 500px;
margin-left:233px;
background-color: white;
flex-wrap:wrap;
justify-content:space-evenly;
}

#main-box-box {
    background-color: rgb(255, 255, 255);
    height: 100px;
    width:125px;
    padding-right:25px;
    border: 1.5px solid black;
    margin: 0 0 8px 0;
    align-content:space-around;
    padding-top:50px;
    margin-top:20px;
    
}

#sammen {
    padding-left:450px;
    padding-bottom:200px;
}

main {
    background-color: white;
    height: auto;
}

.main-box {
    background-color: rgb(14, 59, 14);
    height: 160px;
    width: 200px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
}

</style>
