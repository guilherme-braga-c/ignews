/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

<header class="headerContainer">
  <div class="headerContent">
    <div class="logo">
      <p>ROOM</p>
    </div>
    <nav class="navigation">
      <ul>
        <li><a href="#">Reading</a></li>
        <li><a href="#">Completed</a></li>
        <li><a href="#">Local</a></li>
        <li><a href="#">Log-in</a></li>
      </ul>
    </nav>
  </div>
</header>

----- styles -- header


.headerContainer {
  height: 5rem;

  .headerContent {
    max-width: 1120px;
    height: 5rem;
    margin: 0 auto;
    padding: 0 2rem;

    display: flex;
    align-items: center;

    border-bottom: .250px solid var(--matte-black);
  }

  .logo {
    display: flex;
    align-items: center;

    p:first-child {

      font-family: "grotesque-basis";
      font-size: 2rem;
      color: var(--title-blue);

      @media (max-width: 720px) {
        font-size: 1.75rem;
      }
    }

  }

  .navigation {
    display: flex;
    align-items: center;
    margin-left: auto;
    ul {
      display: flex;
      align-items: center;
      margin-left: auto;
      display: flex;
      gap: 1rem;
      color:  black;
      li {
        font-family: "Mabry Pro Medium";
        font-size: 1rem;

        a:hover {
          color: var(--title-blue);
          transition: color 0.3s;
        }
      }
    }
  }
}

-- global -- 

@font-face {
  font-family: 'grotesque-basis';
  src: local('Basis-Grotesque-Pro'), url(../src/assets/fonts/Basis-Grotesque-Pro-Regular.ttf);
}


@font-face {
  font-family: 'canela-light';
  src: local('Canela-Light'), url(../src/assets/fonts/Canela-Light.ttf);
}

@font-face {
  font-family: 'canela';
  src: local('Canela-Regular'), url(../src/assets/fonts/Canela-Regular.ttf);
}

@import url(//db.onlinewebfonts.com/c/9b06ae83a4412168ed194a8ed31218c2?family=Mabry+Pro+Medium);
@font-face {font-family: "Mabry Pro Medium"; src: url("//db.onlinewebfonts.com/t/9b06ae83a4412168ed194a8ed31218c2.eot"); src: url("//db.onlinewebfonts.com/t/9b06ae83a4412168ed194a8ed31218c2.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/9b06ae83a4412168ed194a8ed31218c2.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/9b06ae83a4412168ed194a8ed31218c2.woff") format("woff"), url("//db.onlinewebfonts.com/t/9b06ae83a4412168ed194a8ed31218c2.ttf") format("truetype"), url("//db.onlinewebfonts.com/t/9b06ae83a4412168ed194a8ed31218c2.svg#Mabry Pro Medium") format("svg"); }

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --title-blue: #0c00fc;
  --light-grey: #e8e8e8;
  --matte-black: #28282b;
  --yellow-500: #eba417;
}

@media (max-width: 1080px) {
  html {
    font-size: 93.75%;
  }
}

@media (max-width: 720px) {
  html {
    font-size: 87.5%;
  }
}

button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
  font-family: "Mabry Pro Medium";
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}


--- app component ---
  
  .contentContainer {
  background-color: var(--light-grey);

  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2rem;
  height: calc(100vh - 5rem);

  display: flex;
  align-items: center;
  justify-content: center;
}



  
  

