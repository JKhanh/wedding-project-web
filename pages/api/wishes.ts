import type { NextApiRequest, NextApiResponse } from 'next';
import { ApiResponse, Wish } from '@/types';
import { submitWish, approveWish, getWishes } from '@/services/googleSheets';
import { getServerSession } from 'next-auth/next';
import { authOptions } from './auth/[...nextauth]';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<Wish | Wish[]>>
) {
  if (req.method === 'GET') {
    try {
      const approvedOnly = req.query.approvedOnly !== 'false';
      const wishes = await getWishes(approvedOnly);
      
      return res.status(200).json({
        success: true,
        data: wishes
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: 'Đã xảy ra lỗi khi lấy danh sách lời chúc.'
      });
    }
  }
  
  if (req.method === 'POST') {
    try {
      const data = req.body;
      
      // Submit wish
      const result = await submitWish(data);
      
      return res.status(200).json({
        success: true,
        data: result
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: 'Đã xảy ra lỗi khi gửi lời chúc.'
      });
    }
  }
  
  if (req.method === 'PUT') {
    try {
      // Check if user is authenticated (admin only)
      const session = await getServerSession(req, res, authOptions);
      if (!session) {
        return res.status(401).json({
          success: false,
          error: 'Unauthorized'
        });
      }
      
      const { id, approved } = req.body;
      
      // Approve or reject wish
      const result = await approveWish(id, approved);
      if (!result) {
        return res.status(404).json({
          success: false,
          error: 'Không tìm thấy lời chúc.'
        });
      }
      
      return res.status(200).json({
        success: true,
        data: result
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: 'Đã xảy ra lỗi khi cập nhật lời chúc.'
      });
    }
  }
  
  return res.status(405).json({
    success: false,
    error: 'Method not allowed'
  });
}