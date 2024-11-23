
import { useParams } from 'react-router-dom';

const Test = () => {
  const { pageName } = useParams();  // Retrieve the input value from the URL

  return (
    <div>
      <h1>Received Page: {pageName}</h1>
      <p>You navigated to: {pageName}</p>
    </div>
  );
};

export default Test;
