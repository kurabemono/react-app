import { useState } from "react";
import { produce } from "immer";
import ExpandableText from "./components/ExpandableText";
//import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const handleClick = () => {};

  return (
    <ExpandableText maxChars={30}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Purus semper eget duis
      at tellus at urna condimentum. Tempus urna et pharetra pharetra massa
      massa. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec.
      Tortor consequat id porta nibh venenatis cras sed. Sed adipiscing diam
      donec adipiscing tristique risus nec. Massa id neque aliquam vestibulum
      morbi. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget
      arcu. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum
      dolor. Purus viverra accumsan in nisl. Lacinia at quis risus sed. Id
      consectetur purus ut faucibus pulvinar elementum integer enim. Sit amet
      tellus cras adipiscing enim eu turpis egestas pretium. Velit aliquet
      sagittis id consectetur purus ut faucibus. Habitasse platea dictumst
      vestibulum rhoncus. Vitae congue eu consequat ac felis donec et odio
      pellentesque. Mi eget mauris pharetra et ultrices neque.
    </ExpandableText>
  );
}

export default App;
