import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="bg-mystical-dark text-white py-12 border-t border-primary/20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src={logo} alt="Black Potion" className="h-12 w-12" />
              <div>
                <div className="text-lg font-bold">BLACK POTION</div>
                <div className="text-xs text-primary tracking-widest">SEDONA</div>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              Where Brazil's purity meets Sedona's spirit
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = '/';
                    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
                  }}
                  className="text-gray-400 hover:text-primary transition-colors cursor-pointer"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/menu"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = '/menu';
                    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
                  }}
                  className="text-gray-400 hover:text-primary transition-colors cursor-pointer"
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="/crystals"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = '/crystals';
                    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
                  }}
                  className="text-gray-400 hover:text-primary transition-colors cursor-pointer"
                >
                  Crystals
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = '/services';
                    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
                  }}
                  className="text-gray-400 hover:text-primary transition-colors cursor-pointer"
                >
                  Services
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-4 text-primary">Our Offerings</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Peixoto Coffee</li>
              <li>Crystal Shop</li>
              <li>Aura Photography</li>
              <li>Psychic Readings</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4 text-primary">Visit Us</h3>
            <div className="text-sm text-gray-400 space-y-2">
              <p>841 AZ-179</p>
              <p>Sedona, AZ 86336</p>
              <p className="pt-2">
                <a href="mailto:blackpotionsedona1@gmail.com" className="text-primary hover:text-primary-glow">
                  blackpotionsedona1@gmail.com
                </a>
              </p>
              <p>Open Daily: 7AM - 6PM</p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="py-6 border-t border-primary/20">
          <div className="flex justify-center gap-6">
            <a
              href="https://www.instagram.com/blackpotionsedona/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
              aria-label="Black Potion Sedona Instagram"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href="https://web.facebook.com/p/Black-Potion-Sedona-100083336282568/?_rdc=1&_rdr#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
              aria-label="Black Potion Sedona Facebook"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a
              href="https://share.google/rAHfoaHveEXN3hTJQ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
              aria-label="Black Potion Sedona on Google"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            </a>
            <a
              href="https://www.yelp.com/biz/black-potion-sedona-sedona"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
              aria-label="Black Potion Sedona on Yelp"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.271 17.639c-.296 1.227-1.681 1.862-2.762 1.271l-4.267-2.332c-1.081-.591-1.223-2.087-.283-2.986l.892-.851c.94-.898 2.367-.683 3.185.358l2.788 3.557c.53.676.491 1.656-.553 1.983zm-.847-6.193c1.227-.296 2.412.703 2.37 1.997l-.163 5.104c-.042 1.294-1.252 2.151-2.418 1.711l-1.106-.418c-1.166-.44-1.621-1.839-1.017-3.122l2.058-4.37c.391-.83 1.395-1.198 2.276-.902zm6.601 1.666l-4.889 1.478c-1.236.374-2.415-.602-2.357-1.951l.228-5.316c.058-1.349 1.353-2.102 2.588-1.504l1.171.567c1.235.598 1.551 2.069.706 3.287l-2.885 4.157c-.549.792-.186 1.931.838 2.282zm-9.644-8.305c.793 1.035.412 2.516-.762 2.961l-4.62 1.752c-1.174.445-2.413-.317-2.476-1.524l-.06-1.145c-.063-1.207.819-2.234 1.972-2.299l3.93-.219c.747-.042 1.476.352 1.896.989l.12.485zm3.619 6.193c-.296-1.227.703-2.412 1.997-2.37l5.104.163c1.294.042 2.151 1.252 1.711 2.418l-.418 1.106c-.44 1.166-1.839 1.621-3.122 1.017l-4.37-2.058c-.83-.391-1.198-1.395-.902-2.276z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-primary/20 text-center text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} Black Potion Sedona. All rights reserved.
          </p>
          <p className="mt-2">
            Crafted with ☕ and 💎 in the heart of Sedona
          </p>
        </div>
      </div>
    </footer>
  );
};
