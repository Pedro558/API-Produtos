import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import { AppError } from "../utils/AppError.js";

export function errorHandler(
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  // Zod (validação)
  if (err instanceof ZodError) {
    return res.status(400).json({
      message: "Erro de validação",
      data: err.issues.map((i) => ({
        path: i.path.join("."),
        message: i.message,
      })),
    });
  }

  // Erro da aplicação (service)
  if (err instanceof AppError) {
    return res
      .status(err.statusCode)
      .json({ message: err.message, data: { code: err.code } });
  }

  // Prisma / outros
  console.error(err);
  return res.status(500).json({ message: "Erro interno do servidor" });
}
