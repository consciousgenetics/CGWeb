import { Request, Response } from "@medusajs/framework";

export async function GET(
  req: Request,
  res: Response
): Promise<void> {
  res.sendStatus(200);
}
