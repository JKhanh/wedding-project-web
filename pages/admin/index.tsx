import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import AdminLayout from '@/components/admin/AdminLayout';
import Card from '@/components/common/Card';

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/admin/login');
    }
  }, [status, router]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (!session) {
    return null;
  }

  return (
    <AdminLayout title="Dashboard">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-2">RSVP</h3>
          <p className="text-gray-500 mb-4">Quản lý danh sách khách mời</p>
          <div className="mt-2">
            <button
              onClick={() => router.push('/admin/rsvp')}
              className="text-primary hover:text-primary/80"
            >
              Xem chi tiết →
            </button>
          </div>
        </Card>
        
        <Card className="p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-2">Lời chúc</h3>
          <p className="text-gray-500 mb-4">Duyệt và quản lý lời chúc</p>
          <div className="mt-2">
            <button
              onClick={() => router.push('/admin/wishes')}
              className="text-primary hover:text-primary/80"
            >
              Xem chi tiết →
            </button>
          </div>
        </Card>
        
        <Card className="p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-2">Album ảnh</h3>
          <p className="text-gray-500 mb-4">Quản lý ảnh carousel và gallery</p>
          <div className="mt-2">
            <button
              onClick={() => router.push('/admin/gallery')}
              className="text-primary hover:text-primary/80"
            >
              Xem chi tiết →
            </button>
          </div>
        </Card>
      </div>
    </AdminLayout>
  );
}