import { z } from "zod";

const phonePreprocess = (val: unknown) => {
  if (typeof val === "string") {
    // remove ALL whitespace characters
    return val.replace(/\s+/g, "");
  }
  return val;
};

// Schema
const msgSchema = z.object({
  fullname: z
    .string()
    .min(1, "Name is required")
    .max(50, "Name must be under 50 characters"),

  phoneNo: z
    .preprocess(
      phonePreprocess,
      z.string().min(7, "Invalid phone number").max(16, "Invalid phone number"),
    ),

  email: z.email("Invalid email"),

  message: z.string().min(1, "Message cannot be empty"),
});

type FormInput = z.infer<typeof msgSchema>;

const formInValidation = (data: FormInput) => {
  msgSchema.parse(data);
};

export default formInValidation;
