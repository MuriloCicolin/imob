import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
  font-size: 50%;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}

html,
body,
#root {
  height: 100vh;

}

body {
  background: '#DDF3F5';
}

#root {
  display: flex;
  align-items: center;
  justify-content: center;
}

body,
input,
button,
textarea {
  font: 400 1.6rem Poppins;
  color: #000;
}

/* .container {
  max-width: 700px;
  width: 90vw;
} */

@media (min-width: 700px) {
  :root {
    font-size: 50.5%;
  }
}

`;
