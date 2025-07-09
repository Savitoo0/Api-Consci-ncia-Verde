'use client'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-green-950 text-green-800 dark:text-green-100 shadow z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <a href="#hero" className="text-xl font-bold">🌱 Consciência Verde</a>
        <div className="space-x-4 hidden sm:block">
          <a href="#conteudos" className="hover:underline">Conteúdos</a>
          <a href="#comentarios" className="hover:underline">Comentários</a>
          <a href="#listas" className="hover:underline">Listas</a>
          <a href="#sobre" className="hover:underline">Sobre</a>
          <button onClick={() => setDark(!dark)} className="ml-4">
            {dark ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  )
}