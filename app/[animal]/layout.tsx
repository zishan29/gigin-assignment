export default function AnimalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <nav className="mx-auto hidden h-24 w-full max-w-7xl items-center justify-between gap-x-6 p-6 sm:flex lg:px-8">
        <h1 className="text-2xl font-bold">Pet Finder</h1>
      </nav>
      {children}
    </div>
  );
}
