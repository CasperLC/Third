<template>
  <div id="app">
    <section id="toppage">
      <header >
        <div id="logo">
          <img src="@/assets/logo1.png" alt style="width:65px;" />
        </div>

        <nav>
          <div id="nav">
            <ul>
              <li>
                <a href>
                  <i class aria-hidden="true"></i>Men
                </a>
              </li>
              <li>
                <a href="#">
                  <i class aria-hidden="true"></i>Women
                </a>
              </li>
              <li>
                <a href="#">
                  <i class aria-hidden="true"></i>Kids
                </a>
              </li>
              <li>
                <a href="#">
                  <i class aria-hidden="true"></i>Sale
                </a>
              </li>
            </ul>
            <div id="search">
              <input type="text" placeholder="Search.." />
            </div>
          </div>
        </nav>
      </header>
    </section>
    <router-view />
    <footer>
      <div id="footer_container">
        <div id="footer_top"></div>

        <div id="footer_bottom">
          <div id="footer_box">
            <p>Customer Service</p>
            <p>Online Shopping</p>
            <p>Shipping Delivery</p>
            <p>My orders</p>
          </div>
          <div id="footer_box">
            <p>Legal Information</p>
            <p>Gdpr</p>
            <p>Cookie Settings</p>
            <p>Privacy Policy</p>
          </div>
          <div id="footer_box">
            <p>About</p>
            <p>News</p>
            <p>Contact</p>
            <p>Store locator</p>
          </div>
        </div>

        <div id="footer_rights">
          © 2019 Sneaks4U. All rights reserved.
          <div id="newtry">
            <a href="https://da-dk.facebook.com/" target="_blank">
              <i class="fa fa-facebook" aria-hidden="true"></i>
            </a>
            <a href="https://www.twitter.com/" target="_blank">
              <i class="fa fa-twitter" aria-hidden="true"></i>
            </a>
            <a href="https://www.youtube.com" target="_blank">
              <i class="fa fa-youtube" target="_blank" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: () => ({
    //
  })
};
</script>

<style>
header {
  background-color: white;
  width: 793px;
  display: flex !important;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  height: 75px;
  justify-content: center;
}


#search {
  padding-bottom: 12px;
  padding-left: 20px;
}

a:visited {
  color: rgb(0, 0, 0);
}


#nav a:hover {
  color: rgb(10, 66, 10);
}


#logo {
  justify-content: left;
  height: 70px;
  display: flex;
  box-sizing: border-box;
  flex-grow: 1;
}

#nav {
  background-color: rgb(255, 255, 255);
  justify-content: center;
  height: 100px;
  align-items: center;
  display: flex;
  box-sizing: border-box;
  flex-grow: 10;
  padding-left: 130px;
}

#nav a {
  color: rgb(17, 20, 20);
  padding: 0 20px;
  text-decoration: none;
  text-transform: uppercase;
}

ul {
  display: flex;
  padding: 0;
}

ul li {
  list-style-type: none;
  padding: 0 10px;
}


footer {
  background-color: white;
  padding-left: 275px;
  display: flex;
  /* margin-left:300px;*/
  color: black;
  padding-top: 150px;
  width: 1260px;
}

#footer_container {
  width: 90%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

#footer_top p,
#footer_top h2 {
  display: flex;
  margin: 0;
  justify-content: center;
}

#footer_bottom {
  display: flex;
}

#footer_box {
  border: 1px solid white;
  padding: 20px;
  flex: 1;
  box-sizing: border-box;
}

footer p,
footer h3 {
  margin: 0;
  padding: 0;
}

#footer_box:not(:last-child) {
  border-right: none;
}

footer h3 {
  margin: 0 0 10px 0;
  color: rgb(19, 51, 19);
  text-shadow: 1px 1px 0 darkgreen;
}


#footer_text {
  display: flex;
  font-size: 9px;
  margin: 15px 0 0 0;
}

#footer_text p {
  flex: 1;
}

footer_text p:last-child(2) {
  text-align: center;
}

footer_text p:nth-child(3) {
  text-align: right;
}

#caro-css {
  width: 824px;
  height:400px;
}

#newtry {
  text-align: right;
  font-size: 2em;
}

</style>

