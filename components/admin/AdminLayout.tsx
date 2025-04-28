import React, { ReactNode } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signOut } from 'next-auth/react';

interface AdminLayoutProps {
  children: ReactNode;
  title?: string;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children, title = 'Admin Panel' }) => {
  const router = useRouter();

  const navLinks = [
    { href: '/admin', label: 'Dashboard', icon: 'dashboard' },
    { href: '/admin/rsvp', label: 'RSVP', icon: 'list' },
    { href: '/admin/wishes', label: 'Lời chúc', icon: 'message' },
    { href: '/admin/gallery', label: 'Album ảnh', icon: 'photo' },
  ];

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.push('/admin/login');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>{title} - Wedding Admin</title>
        <meta name="description" content="Wedding Admin Panel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <div className="hidden md:flex md:flex-shrink-0">
          <div className="flex flex-col w-64">
            <div className="flex flex-col h-0 flex-1 bg-dark">
              <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                <div className="flex items-center flex-shrink-0 px-4">
                  <span className="text-white font-serif text-xl">Wedding Admin</span>
                </div>
                <nav className="mt-5 flex-1 px-2 space-y-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                        router.pathname === link.href
                          ? 'bg-primary text-white'
                          : 'text-gray-300 hover:bg-primary/80 hover:text-white'
                      }`}
                    >
                      <span>{link.label}</span>
                    </Link>
                  ))}
                </nav>
              </div>
              <div className="flex-shrink-0 flex border-t border-gray-700 p-4">
                <button
                  onClick={handleSignOut}
                  className="flex-shrink-0 w-full group block text-gray-300 hover:text-white"
                >
                  <div className="flex items-center">
                    <div>
                      <span className="text-sm font-medium">Đăng xuất</span>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex flex-col w-0 flex-1 overflow-hidden">
          <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
            <div className="py-6">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
              </div>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <div className="py-4">{children}</div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;