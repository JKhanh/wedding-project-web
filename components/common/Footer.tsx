import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Đám cưới của Lan & Hùng</h3>
            <p className="text-gray-300">
              Cảm ơn bạn đã ghé thăm website đám cưới của chúng mình!
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Thông tin đám cưới</h3>
            <p className="text-gray-300">Ngày: 15/10/2023</p>
            <p className="text-gray-300">Địa điểm: Trung tâm Tiệc cưới ABC</p>
            <p className="text-gray-300">Địa chỉ: 123 Đường XYZ, Quận ABC, TP. HCM</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Liên hệ</h3>
            <p className="text-gray-300">Email: lan.hung@example.com</p>
            <p className="text-gray-300">Phone: 090 123 4567</p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-300">&copy; {new Date().getFullYear()} Lan & Hùng Wedding. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;