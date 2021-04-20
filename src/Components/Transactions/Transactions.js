import { Main, Navbar } from "../Styled";

const GET_STEPZEN = gql`
  query Transactions($username: String = "michael") {
    transactions(username: $username) {
      username
      amount
      category
      company
      purchaseDate
      createdAt
    }
  }
`;

const Transactions = () => {
  const tData = [];

  return (
    <Main className="Transactions">
      <Navbar />
      <div>
        <p>
          <pre>{JSON.stringify(tData)}</pre>
        </p>
      </div>
    </Main>
  );
};

export default Transactions;
