import React from 'react';
// import styles from './App.modules.css'; // to style, których używa się jako kluczy w określonych modułach
// import './App.css'; {/* są to style globalne - można użyć wszedzie z pliku css*/ }
import styled from 'styled-components'; //importuje biblioteke, ktora pozwala stylowac w js (trzeba zainstalować npm install --save styled-components) https://www.styled-components.com/

const Box3 = styled.div`
background-color: yellow;
height: 200px;
width: 600px;
text-align: center;
`;

const Text3 = styled.h1`
color: red
`

function App() {
  return (
    <div style={{
      backgroundColor: 'green',
      height: '500px',
      width: '600px',
      textAlign: 'center'
    }}>
      <h1 style={{ color: 'white' }}>H1 stylowany inline</h1>
      {/* są to style globalne - można użyć wszedzie */}
      {/* <div className="box">
        Div stylowany z pliku CSS
      </div> */}

      {/* są to style, które ładuje się w konkretnych modułach, a nie wszędzie */}
      {/* <div className={styles.box2}>
        Div stylowany z pliku CSS jako modules - klucze
      </div > */}

      {/* style z styled components */}
      <Box3>
        <Text3>Stylowany komponent przy użyciu styled components</Text3>
      </Box3>

    </div >
  );
}

export default App;
