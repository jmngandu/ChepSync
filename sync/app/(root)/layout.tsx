export default function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="font-work-sans">
      <h1>Layout</h1>
      {children}
    </main>
  );
}
