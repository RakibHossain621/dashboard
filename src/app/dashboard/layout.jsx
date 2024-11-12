import Navbar from '@/component/Navbar'
import Sidebar from '@/component/Sidebar'
import React from 'react'

export default function Layout({ children }) {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64  flex flex-col items-center py-4 fixed h-full">
        <Sidebar />
      </aside>

      {/* Main content */}
      <div className="flex flex-col flex-1 ml-64">
        {/* Navbar */}
        <header className="h-16 flex items-center justify-between px-6 sticky top-0 z-10">
          <Navbar />
        </header>

        {/* Main content area */}
        <main className="flex-1 p-6 ">
          {children}
        </main>
      </div>
    </div>
  );
}
