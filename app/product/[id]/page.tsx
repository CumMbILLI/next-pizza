export default async function ProductPage(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const id = params.id;

  return <div className="h-full">Product {id}</div>;
}
