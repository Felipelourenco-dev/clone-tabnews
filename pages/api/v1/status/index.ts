import { NextApiRequest, NextApiResponse } from 'next';

interface StatusResponse {
  status: string;
  message: string;
}

const status = (request: NextApiRequest, response: NextApiResponse<StatusResponse>) => {
  response.status(200).json({
    status: "ok",
    message: "API is running smoothly",
  });
};

export default status;
