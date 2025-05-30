export default function FootSection() {
  return (
    <section
      id="nosotros"
      className="text-black w-full min-h-screen bg-gradient-to-b from-white via-sky-100 to-sky-300 flex flex-col justify-center items-center px-8 py-16"
    >
      {/* Título principal */}
      <div className="text-center mb-5 mt-10">
        <h2 className="font-passion text-cyan-900 text-4xl md:text-5xl text-center max-w-4xl mb-6">
          La inclusión comienza con la comprensión emocional. ¿Te sumas a
          construir un mundo más empático?
        </h2>
      </div>

      {/* Footer final */}
      <div className="text-center text-cyan-700">
        <p className="text-sm mb-2">
          © 2024 Emotion-DS | Proyecto de Cómputo Bioinspirado
        </p>
        <p className="text-xs">
          Desarrollado con 💙 para crear un mundo más inclusivo
        </p>
      </div>
    </section>
  );
}
