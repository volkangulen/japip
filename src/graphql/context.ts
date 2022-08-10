import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../db/client";

export type Context = {
  prisma: PrismaClient;
};
export async function createContext({
  req: NextApiRequest,
  res: NextApiResponse,
}): Promise<Context> {
  return {
    prisma,
  };
}
