import Navbar from "../components/Navbar";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  <main className="font-work-sans">
    <Navbar />
    {children}
  </main>;
}
