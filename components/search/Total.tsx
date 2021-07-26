const Total: React.FC<{ count: number }> = ({ count }) => {
  return (
    <h1 className="text-3xl font-semibold text-primary my-6 inline-block">
      {count} results found
    </h1>
  );
};

export default Total;
