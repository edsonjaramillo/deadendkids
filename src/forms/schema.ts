import { z } from 'zod';

export const contactPageFormSchema = z
  .object({
    name: z
      .string()
      .min(2, {
        message: 'Name must be at least 2 characters.',
      })
      .max(100),
    email: z.string().email({ message: 'Please enter a valid email address.' }),
    phoneNumber: z
      .string()
      .min(10, {
        message: 'Phone number must be 10 numbers.',
      })
      .regex(/^\d+$/, {
        message: 'Only numbers are allowed.',
      })
      .max(10, {
        message: 'Phone number must be 10 numbers.',
      }),
    message: z
      .string()
      .min(5, {
        message: 'Message must be at least 5 characters.',
      })
      .max(500, {
        message: 'Message must be less than 500 characters.',
      }),
  })
  .strict();

export const newsletterFormSchema = z
  .object({
    email: z.string().email({ message: 'Please enter a valid email address.' }),
  })
  .strict();
