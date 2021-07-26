import { GetServerSideProps } from 'next';
import { initializeApollo } from '../lib/apolloClient';
import { useQuery } from '@apollo/react-hooks';
import utils from '../utils';
import Head from 'next/head';
import Nav from '../components/home/Nav';
import Form from '../components/search/Form';
import Total from '../components/search/Total';
import List from '../components/search/List';
import { ErrorMessage } from '../components/_shared';
import { SEARCH_QUERY } from '../graphql/queries';
import Pagination from '../components/search/Pagination';

type Props = {
  variables: any;
};

const Search: React.FC<Props> = ({ variables }) => {
  const { loading, error, data } = useQuery(SEARCH_QUERY, {
    variables,
    // Setting this value to true will make the component rerender when
    // the "networkStatus" changes, so we are able to know if it is fetching
    // more data
    notifyOnNetworkStatusChange: true,
  });

  if (error) return <ErrorMessage message="Error loading search results." />;
  if (loading) return <div>Loading</div>;

  return (
    <div className="container mx-auto">
      <Head>
        <title>Portal | Search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className="p-6">
        <Form />
        <Total count={data.search.result.count} />
        <List variables={variables} />
        <Pagination variables={variables} />
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const query = context.query || {};
  const variables = utils.convertToCkanSearchQuery(query);

  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: SEARCH_QUERY,
    variables,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      variables,
    },
  };
};

export default Search;
