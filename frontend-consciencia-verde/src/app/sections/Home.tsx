import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen bg-green-100 dark:bg-green-900 flex items-center justify-center text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-green-800 dark:text-green-100 mb-4">
          🌍 Por um futuro mais verde
        </h1>
        <p className="text-lg text-green-700 dark:text-green-200 max-w-2xl mx-auto">
          Descubra conteúdos educativos sobre ecologia e sustentabilidade, e participe ativamente da mudança.
        </p>
      </motion.div>
    </section>
  )
}