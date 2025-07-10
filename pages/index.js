export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-6 border-b">
        <h1 className="text-2xl font-bold text-gray-800">VBES</h1>
        <nav>
          <a href="#features" className="text-gray-600 hover:text-gray-900 px-4">Features</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900 px-4">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h2 className="text-5xl font-bold text-gray-900 mb-6">Powering Your Smart Energy Systems</h2>
        <p className="text-lg text-gray-600 max-w-xl mx-auto mb-8">VBES makes energy management seamless and intelligent, giving you full control over your systems.</p>
        <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition">Get Started</button>
        <div className="mt-12">
          <img src="/your-image.png" alt="VBES App Preview" className="mx-auto w-full max-w-4xl rounded-xl shadow-xl" />
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-gray-50 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-12">Why VBES?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-2">Real-time Monitoring</h4>
              <p className="text-gray-600">Stay updated with real-time data on your energy systems.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">Smart Automation</h4>
              <p className="text-gray-600">Automate operations and reduce manual intervention.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">Secure & Scalable</h4>
              <p className="text-gray-600">Built to scale securely with your business needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="text-center py-10 text-gray-500 border-t">
        <p>&copy; {new Date().getFullYear()} VBES. All rights reserved.</p>
      </footer>
    </div>
  );
}
