import type { NextApiRequest, NextApiResponse } from 'next';
import { ApiResponse, RSVPEntry } from '@/types';
import { submitRSVP, verifyRSVPCode } from '@/services/googleSheets';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<RSVPEntry>>
) {
  if (req.method === 'POST') {
    try {
      const data = req.body;
      
      // Verify the RSVP code exists
      const existingRSVP = await verifyRSVPCode(data.code);
      if (!existingRSVP) {
        return res.status(400).json({
          success: false,
          error: 'Mã RSVP không hợp lệ. Vui lòng kiểm tra lại.'
        });
      }
      
      // Submit RSVP
      const result = await submitRSVP(data);
      
      return res.status(200).json({
        success: true,
        data: result
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: 'Đã xảy ra lỗi khi xử lý yêu cầu.'
      });
    }
  }
  
  return res.status(405).json({
    success: false,
    error: 'Method not allowed'
  });
}