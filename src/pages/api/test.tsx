import type {NextApiRequest, NextApiResponse} from 'next';

export default function testApi(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({message: `Dice roll is ${Math.floor(Math.random() * 6) + 1}`});
}
