import React from 'react';
import { Format, resourceGetter } from '../../utils/resourceParser';

export interface IResource {
  id: string;
  name: string;
  title: string;
  url: string;
  format: Format;
  created: string;
  last_modified: string;
}

interface IResourceViz {
  resource: IResource;
}

const ResourceVisualizer: React.FC<IResourceViz> = ({ resource }) => {
  const [resourceData, setResourceData] = React.useState<any[]>([{}]);

  React.useEffect(() => {
    const getData = async () => {
      const data = await resourceGetter(resource.url, resource.format);
      setResourceData(data.slice(0, 10));
    };

    getData();
  }, [resource]);

  const columns = Object.keys(resourceData[0]);

  return (
    <table>
      <thead>
        <tr>
          {columns?.map((column) => (
            <td key={column}>{column}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {resourceData?.map((data) => (
          <tr key={Math.random() * Math.random()}>
            {columns?.map((column) => (
              <td key={column}>{data[column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ResourceVisualizer;
