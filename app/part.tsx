export default function Part({ name }: { name: string }) {
  console.log("from client")
  return (
    <div className="mb-4">
      <p>{name}</p>
    </div>
  );
}
