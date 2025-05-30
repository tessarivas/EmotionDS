export default function DemoPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Demo de EmotionDS
        </h1>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-lg text-gray-600 text-center mb-8">
            Aquí puedes probar todas las funcionalidades de EmotionDS
          </p>
          {/* Aquí puedes agregar el contenido de tu demo */}
          <div className="text-center">
            <p className="text-gray-500">Contenido del demo próximamente...</p>
          </div>
        </div>
      </div>
    </div>
  );
}