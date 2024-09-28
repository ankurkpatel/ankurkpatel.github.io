import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen bg-amber-50 text-gray-700 flex flex-col">
        {/* Navigation */}
        <nav className="fixed bottom-0 right-0 md:top-0 md:left-0 md:right-0 md:bottom-auto p-4 md:p-6">
          <ul className="flex flex-row md:flex-row justify-end space-y-2 md:space-y-0 md:space-x-6">
            <li><a href="#about" className="text-sm hover:text-gray-900 transition-colors">About</a></li>
            <li><a href="#interests" className="text-sm hover:text-gray-900 transition-colors">Interests</a></li>
            <li><a href="#goals" className="text-sm hover:text-gray-900 transition-colors">Goals</a></li>
          </ul>
        </nav>

        {/* Main Content */}
        <main className="flex-grow px-4 md:px-0 pt-8 pb-16 md:py-8">
          <div className="max-w-2xl mx-auto space-y-12 text">
     
            <section id="about" className="space-y-4">
              <h1 className="text-3xl font-light text-gray-800">Hello, I'm [Your Name]</h1>
              <p className="text-lg text-gray-600">I'm a [Your Profession] passionate about creating meaningful digital experiences.</p>
            </section>

            <section id="interests" className="space-y-4">
              <h2 className="text-2xl font-light text-gray-800">Interests</h2>
              <p className="text-gray-600">I'm fascinated by [Interest 1], [Interest 2], and [Interest 3]. These areas inspire my work and drive my continuous learning.</p>
            </section>

            <section id="goals" className="space-y-4">
              <h2 className="text-2xl font-light text-gray-800">Current Goal</h2>
              <p className="text-gray-600">I'm currently working towards [Your Goal]. This challenge pushes me to grow and innovate in my field.</p>
            </section>
          </div>
        </main>

        {/* Footer */}
        <footer className="hidden md:block text-center p-4 text-sm text-gray-500">
          © {new Date().getFullYear()} [Your Name]. All rights reserved.
        </footer>
      </div>
    </>
  )
}

export default App
