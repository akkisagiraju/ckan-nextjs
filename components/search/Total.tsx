const Total: React.FC<{ total: number }> = ({ total }) => {
  return (
    <h1 className="text-3xl font-semibold text-primary my-6 inline-block">
      {total} results found
    </h1>
  );
};

export default Total;
