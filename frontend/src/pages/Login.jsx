export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Usuario"
            className="w-full border rounded-lg p-3"
          />

          <input
            type="password"
            placeholder="Contraseña"
            className="w-full border rounded-lg p-3"
          />

          <button className="w-full bg-green-600 text-white p-3 rounded-lg">
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
}
