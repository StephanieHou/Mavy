import app from "firebase/app";
import "firebase/database";
import { Main, Navbar, Section } from "../Styled";
import { useState } from "react";

// const GET_STEPZEN = gql`
//   query Transactions($username: String = "michael") {
//     transactions(username: $username) {
//       amount
//       category
//       company
//       date
//       username
//     }
//   }
// `;

const Transactions = () => {
  const username = "michael";
  const db = app.database();
  console.log("T component");

  const getTransactions = (username) => {
    const ref = db.ref(`${username}/transactions`);
    ref.on("value", (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      setTransactionsData(data);
    });
  };

  const [transactionsData, setTransactionsData] = useState({});
  getTransactions(username);

  return (
    <Main className="Transactions">
      <Navbar />
      <Section>
        <p>
          <pre>{transactionsData}</pre>
        </p>
      </Section>
    </Main>
  );
};

export default Transactions;
