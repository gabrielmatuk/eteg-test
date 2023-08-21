import { Request, Response } from 'express'

const showAllUsers = async (req: Request, res: Response) => {
  res.send('Hello World!')
}

export default { showAllUsers }