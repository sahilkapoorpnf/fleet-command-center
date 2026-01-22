import { Logo } from "@/components/Logo";

export const Footer = () => {
  return (
    <footer className="bg-sidebar text-sidebar-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <Logo size="md" showText />
            <p className="text-sidebar-foreground/70 mt-4 text-sm">
              Modern truck dispatching software that powers efficient fleet operations.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-sidebar-foreground/70">
              <li><a href="#features" className="hover:text-sidebar-foreground transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-sidebar-foreground transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-sidebar-foreground transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-sidebar-foreground transition-colors">API</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-sidebar-foreground/70">
              <li><a href="#" className="hover:text-sidebar-foreground transition-colors">About</a></li>
              <li><a href="#" className="hover:text-sidebar-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-sidebar-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-sidebar-foreground transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-sidebar-foreground/70">
              <li><a href="#" className="hover:text-sidebar-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-sidebar-foreground transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-sidebar-foreground transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-sidebar-border pt-8 text-center text-sm text-sidebar-foreground/50">
          <p>© {new Date().getFullYear()} bitdecentro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
