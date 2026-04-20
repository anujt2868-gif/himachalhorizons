export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-card py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">🏔️ Himachal Horizons</h3>
            <p className="text-card/70 text-sm">Explore the magic of Himachal Pradesh with expert guides and unforgettable experiences.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Destinations</h4>
            <ul className="space-y-2 text-sm text-card/70">
              <li><a href="#" className="hover:text-card transition-colors">Shimla</a></li>
              <li><a href="#" className="hover:text-card transition-colors">Manali</a></li>
              <li><a href="#" className="hover:text-card transition-colors">Spiti Valley</a></li>
              <li><a href="#" className="hover:text-card transition-colors">Dharamshala</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-card/70">
              <li><a href="#" className="hover:text-card transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-card transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-card transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-card transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-card/70">
              <li><a href="#" className="hover:text-card transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-card transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-card transition-colors">Cancellation Policy</a></li>
              <li><a href="#" className="hover:text-card transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-card/20 pt-8">
          {/* Social Links */}
          <div className="flex gap-6 mb-6">
            <a href="#" className="text-card/70 hover:text-card transition-colors">Facebook</a>
            <a href="#" className="text-card/70 hover:text-card transition-colors">Instagram</a>
            <a href="#" className="text-card/70 hover:text-card transition-colors">Twitter</a>
            <a href="#" className="text-card/70 hover:text-card transition-colors">YouTube</a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-card/60">
            &copy; {currentYear} Himachal Horizons. All rights reserved. | Made with passion for the mountains.
          </p>
        </div>
      </div>
    </footer>
  );
}
