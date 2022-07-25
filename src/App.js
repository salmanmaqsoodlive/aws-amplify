import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";
import Todo from "./components/Todo/Todo";
import { withAuthenticator, Button, Heading } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
Amplify.configure(awsExports);

const App = ({ signOut, user }) => {
  return (
    <>
      {/* Add Todo JSX here  */}
      <Heading level={1}>Hello {user.username}</Heading>
      <Todo />
      <Button onClick={signOut}>Sign out</Button>
    </>
  );
};

export default withAuthenticator(App);
