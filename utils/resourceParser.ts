import {
  csv,
  tsv,
  // text,
  // xml
} from 'd3-fetch';

export type Format = 'CSV' | 'XML' | 'TXT' | 'TSV' | 'PDF';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function resourceGetter(
  resourceUrl: string,
  resourceFormat: Format
) {
  switch (resourceFormat) {
    case 'CSV':
      return await csv(resourceUrl);
    case 'TSV':
      return await tsv(resourceUrl);
    // case 'TXT':
    //   return await test(resourceUrl);
    // case 'XML':
    //   return await xml(resourceUrl);
  }
}
