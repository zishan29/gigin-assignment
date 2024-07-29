export default function AnimalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col">
      <nav className="mx-auto h-24 w-full max-w-7xl items-center justify-between gap-x-6 p-6 flex lg:px-8">
        <h1 className="text-2xl font-bold">Pets</h1>
      </nav>
      {children}
    </main>
  );
}
