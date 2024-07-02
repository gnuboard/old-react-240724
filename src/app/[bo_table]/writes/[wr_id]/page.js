import { getWrite } from '@/app/api';


export default async function WriteDetail ({ params }) {
  const { bo_table, wr_id } = params;

  let data;
  try {
    data = await getWrite({ bo_table, wr_id });
  } catch (error) {
    return <div>Error loading data</div>;
  }

  return (
    <div>
      <h1>Board: {bo_table}</h1>
      <h2>Write ID: {wr_id}</h2>
      <div>wr_subject: {data?.wr_subject}</div>
      <p>wr_content: {data?.wr_content}</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};