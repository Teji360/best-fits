
//created an API route that returns a JSON response with a staus code of 200
import type { NextApiRequest, NextApiResponse } from 'next'
 
type ResponseData = {
    message: string //type checking our custome type responseData
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
 ) {
    res.status(200).json({ message: "Your API Route has succeeded!"})
 }
