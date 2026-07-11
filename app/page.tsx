// app/page.tsx
import prisma from '../lib/prisma';
export default async function Home() {
  const properties = await prisma.property.findMany();

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center bg-gray-900 text-white">
        <h1 className="text-6xl font-light tracking-tighter">Manara Syria</h1>
      </section>

      {/* Property Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-10">
        {properties.map((prop: any) => (
          <div key={prop.id} className="border border-gray-100 p-4 hover:shadow-2xl transition-shadow">
            <h2 className="text-xl font-bold">{prop.title}</h2>
            <p className="text-gray-500">{prop.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

