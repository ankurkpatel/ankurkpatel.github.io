import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import gfm from "remark-gfm"
import MarkdownDisplay from './MarkdownDisplay'
import landingPageContent from './mdFiles/LP.md?raw'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen bg-slate-300 text-gray-700 flex flex-col">
        {/* Navigation */}
        <nav className="fixed bottom-0 right-0 md:top-0 md:left-0 md:right-0 md:bottom-auto p-4 md:p-6">
        <ul className="flex flex-row justify-end space-x-4 md:space-x-6">
    <li><a href="#about" className="text-sm hover:text-gray-900 transition-colors">About</a></li>
    <li><a href="#interests" className="text-sm hover:text-gray-900 transition-colors">Interests</a></li>
    <li><a href="#goals" className="text-sm hover:text-gray-900 transition-colors">Goals</a></li>
  </ul>
        </nav>

        {/* Main Content */}
        <main className="flex-grow px-4 md:px-0 pt-8 pb-16 md:py-8">
          <div className="max-w-2xl mx-auto space-y-12">
            <MarkdownDisplay content={landingPageContent}/>
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
