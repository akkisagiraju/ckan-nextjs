import { csv } from 'd3-fetch';

type Format = 'CSV' | 'XML' | 'TXT';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function resourceGetter(
  resourceUrl: string,
  resourceFormat: Format
) {
  return await csv(resourceUrl);
}
