import { FiFacebook, FiYoutube, FiInstagram } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col items-center md:items-start gap-1">
          <p className="text-sm text-muted-foreground">
            © 2026 Bangladesh Olympiadians Hub. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Developed By{" "}
            <a href="https://www.facebook.com/nafissazzadniloy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
              Nafis Sazzad Niloy
            </a>
          </p>
        </div>
        <div className="flex gap-8">
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><FiFacebook size={20} /></a>
          <a href="https://www.youtube.com/@BangladeshOlympiadiansHub" className="text-muted-foreground hover:text-primary transition-colors"><FiYoutube size={20} /></a>
        </div>
      </div>
    </footer>
  );
}
