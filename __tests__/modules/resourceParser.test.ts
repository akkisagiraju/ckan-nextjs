import { resourceGetter } from '../../utils/resourceParser';

const sampleCSVLink =
  'https://openbudgetsindia.org/dataset/186ecd45-ab8b-4363-808d-07184ea04121/resource/2b222aac-b225-41fb-96f0-8ed35bcb9632/download/anantapur-district-treasury-expenditure---january-2014-15.csv';

test('resource getter takes a csv url and returns an array', async () => {
  const result = await resourceGetter(sampleCSVLink, 'CSV');

  expect(Array.isArray(result)).toBe(true);
});
