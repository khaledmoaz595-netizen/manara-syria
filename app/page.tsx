import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-gray-800">مكتب البراء للعقارات</h1>
        <p className="text-gray-600 mt-2">عقارات مميزة تناسب احتياجاتك</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* بطاقة عقار 1 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transition hover:scale-105">
          <div className="h-48 bg-gray-200"></div> {/* مكان الصورة */}
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800">شقة فاخرة في دمشق</h2>
            <p className="text-gray-500 mt-2">مساحة 150 متر - إطلالة رائعة</p>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-blue-600 font-bold text-lg">500,000$</span>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">التفاصيل</button>
            </div>
          </div>
        </div>

        {/* يمكنك تكرار هذه البطاقة لعقارات أخرى */}
      </section>
    </main>
  );
}

