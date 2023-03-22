/* eslint-disable @next/next/no-img-element */
import AuthInput from "@/components/auth/AuthInput";
import { IconError, IconGoogle } from "@/components/icons";
import useAuth from "@/data/hook/UseAuth";
import { useState } from "react";

export default function Autentication() {
  const { login, register, loginGoogle } = useAuth()

  const [mode, setMode] = useState<"login" | "register">("login");
  const [error, setError] = useState(null)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit() {
    try {
      if (mode === "login") {
        await login(email, password)
      } else {
        await register(email, password)
      }
    } catch (e) {
      showError(e?.message ?? "Erro inesperado")
    }
  }

  function showError(msg: string, timeInSeconds = 5) {
    setError(msg);
    setTimeout(() => setError(null), timeInSeconds * 1000);
  }

  return (
    <section className="flex h-screen items-center justify-center">
      <div className="hidden md:block md:w-1/2 lg:w-2/3">
        <img src="https://source.unsplash.com/random" alt="Imagem da tela de autenticação" className="h-screen w-full object-cover" />
      </div>
      <div className="m-10 md:w-1/2 lg:w-1/3">
        <h1 className="text-xl font-bold mb-5">
          {mode === "login" ? "Entre com Sua Conta" : "Cadastre-se na Plataforma"}
        </h1>
        <div className={`
          ${!error ? "hidden opacity-0" : "flex opacity-100"} items-center gap-3
          bg-red-400 text-white py-3 px-5 my-2
          border border-red-500 rounded-lg transition-opacity
        `}>
          {IconError}
          <p>{error}</p>
        </div>

        <AuthInput
          label="Email"
          type="email"
          value={email}
          valueChanged={setEmail}
          isRequired
        />
        <AuthInput
          label="Senha"
          type="password"
          value={password}
          valueChanged={setPassword}
          isRequired
        />
        <button onClick={submit} className={`
      w-full bg-indigo-500 hover:bg-indigo-400
      text-white rounded-lg px-4 py-3 mt-6
    `}>
          {mode === "login" ? "Entrar" : "Cadastrar"}
        </button>
        <hr className="my-6 w-full border-gray-300" />
        <button onClick={loginGoogle} className={`
          flex items-center justify-center gap-3
          w-full bg-red-500 hover:bg-red-400
          text-white rounded-lg px-4 py-3 mt-6
        `}>
          <span className="color-white">{IconGoogle}</span>
          <span>
            Entrar com Google
          </span>
        </button>

        {mode === "login" ? (
          <p className="mt-8 text-center">
            Novo por aqui?
            <a onClick={() => setMode("register")} className={`
              text-blue-500 hover:text-blue-700 font-semibold
              cursor-pointer ml-1
            `}>
              Crie uma conta gratuitamente
            </a>
          </p>
        ) : (
          <p className="mt-8 text-center">
            Já faz parte da nossa comunidade?
            <a onClick={() => setMode("login")} className={`
              text-blue-500 hover:text-blue-700 font-semibold
              cursor-pointer ml-1
            `}>
              Entre com suas credenciais
            </a>
          </p>
        )}
      </div>
    </section>
  )
}