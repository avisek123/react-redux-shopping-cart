// import React from "react";
// import { connect } from "react-redux";
// import { buyBook } from "../redux";

// function BookContainer(props) {
//   return (
//     <div>
//       <h1>Number Of Books {props.numberOfBooks}</h1>
//       <button onClick={props.buyBook}>Buy book</button>
//     </div>
//   );
// }
// const mapStatetoProps = (state) => {
//   return {
//     numberOfBooks: state.numberOfBooks,
//   };
// };
// const mapDispatchtoProps = (dispatch) => {
//   return {
//     buyBook: () => {
//       dispatch(buyBook());
//     },
//   };
// };

// export default connect(mapStatetoProps, mapDispatchtoProps)(BookContainer);
import React from "react";

function BookContainer() {
  return <div></div>;
}

export default BookContainer;
