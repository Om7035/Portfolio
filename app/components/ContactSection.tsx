export default function ContactSection() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-black">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">Contact Me</h2>
        <form className="max-w-lg mx-auto">
          <div className="mb-6">
            <label htmlFor="name" className="block text-white mb-2">
              Name
            </label>
            <input type="text" id="name" className="w-full px-3 py-2 bg-gray-800 text-white rounded" />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-white mb-2">
              Email
            </label>
            <input type="email" id="email" className="w-full px-3 py-2 bg-gray-800 text-white rounded" />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-white mb-2">
              Message
            </label>
            <textarea id="message" rows={4} className="w-full px-3 py-2 bg-gray-800 text-white rounded"></textarea>
          </div>
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

