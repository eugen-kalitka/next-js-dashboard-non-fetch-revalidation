import { getDataCustomFetch } from './utils/get-data'

export const revalidate = 60;

export default async function Page() {
  const data = await getDataCustomFetch();

  return <div>
    <p>Data: {data.toString()}</p>
    <p>Invoices Page</p>
  </div>;
}
