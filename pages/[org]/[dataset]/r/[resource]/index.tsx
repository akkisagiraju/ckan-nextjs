import { GetServerSideProps } from 'next';
import { useQuery } from '@apollo/react-hooks';
import Head from 'next/head';
import { initializeApollo } from '../../../../../lib/apolloClient';
import Nav from '../../../../../components/home/Nav';
import About from '../../../../../components/resource/About';
import DataExplorer from '../../../../../components/resource/DataExplorer';
import { GET_RESOURCES_QUERY } from '../../../../../graphql/queries';

const Resource: React.FC<{ variables: any }> = ({ variables }) => {
  const { data, loading } = useQuery(GET_RESOURCES_QUERY, { variables });

  if (loading) return <div>Loading</div>;
  const result = data.dataset.result;
  // Find right resource
  const resource = result.resources.find(
    (item) => item.name === variables.resource
  );

  console.log(resource.format);
  console.log(variables);

  return (
    <>
      <Head>
        <title>Portal | {resource.title || resource.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className="p-6">
        <h1 className="text-3xl font-semibold text-primary mb-2">
          {resource.title || resource.name}
        </h1>
        <About variables={variables} />
        {resource.format === 'PDF' ? (
          <iframe
            src={resource.url}
            title={resource.name}
            style={{ height: window.innerHeight / 1.4 }}
            className="w-2/3 mx-auto"
          ></iframe>
        ) : (
          <DataExplorer variables={variables} />
        )}
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const apolloClient = initializeApollo();
  const variables = {
    id: context.query.dataset,
    resource: context.query.resource,
  };

  await apolloClient.query({
    query: GET_RESOURCES_QUERY,
    variables,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      variables,
    },
  };
};

export default Resource;
