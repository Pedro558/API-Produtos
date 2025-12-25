import { z } from "zod";

export const clientIdSchema = z.coerce
  .number()
  .int()
  .positive({ message: "id precisa ser um inteiro positivo" });

export const clientNameSchema = z.object({
  nome: z.string().min(1, "nome é obrigatório").max(120, "nome muito longo"),
});

export const clientCreateSchema = z.object({
  nome: z.string().min(2, "nome deve ter pelo menos 2 caracteres").max(120),
  email: z.string().email("email inválido").max(180),
});

export const clientUpdateSchema = z
  .object({
    nome: z.string().min(2).max(120).optional(),
    email: z.string().email("email inválido").max(180).optional(),
  })
  .refine((data) => Object.keys(data).length > 0, {
    message: "informe ao menos um campo para atualização",
  });

export type ClientCreateInput = z.infer<typeof clientCreateSchema>;
export type ClientUpdateInput = z.infer<typeof clientUpdateSchema>;