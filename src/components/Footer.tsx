export default function Footer() {
  return (
    <footer className="relative bg-black/95 backdrop-blur-md border-t border-gray-800/50 mt-auto">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/20 via-transparent to-gray-900/20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Ana içerik */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

          {/* Sol - Marka */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-green-500 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-green-500 to-green-400 bg-clip-text text-transparent">
                FilmHub
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              En güncel ve popüler filmleri keşfet, izle ve yorumla.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800/50 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">

            {/* Telif hakkı */}
            <div className="flex items-center space-x-2">
              <span className="text-gray-400 text-sm">© 2025 <a href="https://github.com/troxgen">Troxgen</a></span>
              <span className="text-gray-400 text-sm">Tüm hakları saklıdır.</span>
            </div>

            {/* Teknolojiler */}
           
          </div>
        </div>
      </div>

      {/* Üst glow efekti */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-500/30 to-transparent" />
    </footer>
  );
}
