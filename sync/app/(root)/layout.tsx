export default function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <h1>Layout</h1>
      {children}
    </div>
  );
}
