import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapClient from '@/components/BootstrapClient';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="row flex-wrap g-0">
        <div className="d-none d-md-block col-4 col-lg-3 col-xl-2 min-vh-100" style={{ backgroundColor: "#0f172a" }}>
          <Sidebar />
        </div>
        <div className="col g-0">
          <div className="d-block d-md-none">
            <Navbar />
          </div>
          <main className="p-3">
            {children}
          </main>
        </div>
        <BootstrapClient />
      </body>
    </html>
  );
}
