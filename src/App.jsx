import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import gfm from "remark-gfm"
import MarkdownDisplay from './MarkdownDisplay'
import landingPageContent from './mdFiles/LP.md?raw'
import { Link, Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col text-slate-700">
      {/* Navigation */}
      <nav className="fixed bottom-0 right-0 left-0 md:top-0 md:left-0 md:right-0 md:bottom-auto p-4 md:p-6 bg-slate-200 md:bg-transparent">
        <ul className="flex flex-row justify-end space-x-4 md:space-x-6 list-none m-0 p-0">
          <li><Link to="/" className="text-sm transition-colors no-underline">home</Link></li>
          <li><Link to="/influences" className="text-sm transition-colors no-underline">influences</Link></li>
          <li><Link to="/log" className="text-sm transition-colors no-underline">logs</Link></li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="flex-grow px-4 md:px-0 pt-8 pb-16 md:py-8 flex justify-center">
      <div className="w-full md:w-6/12 md:pt-4 md:mt-10 pt-3 mt-2 px-1 text-pretty">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer className="hidden md:block text-center p-4 text-sm text-gray-500">
        © {new Date().getFullYear()} ankurp. All rights reserved.
      </footer>
    </div>
  )
}

export default App