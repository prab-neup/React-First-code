type Hello = {
  count: number;
};

export const Home = ({ count }: Hello) => {
  return (
    <div>
      <p className="text-slate-100 mt-4 text-8xl">React {count}</p>
    </div>
  );
};
