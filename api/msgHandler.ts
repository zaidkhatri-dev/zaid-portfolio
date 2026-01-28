import { z } from "zod";
import { Resend } from "resend";

// Preprocessor
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
    )
    .optional(),

  email: z.email("Invalid email"),

  message: z.string().min(1, "Message cannot be empty"),
});

export const runtime = "edge";

// Main Function
export async function POST(req: Request) {
  try {
    const data = await req.json();

    const validatedData = msgSchema.parse(data);

    // validatedData is now fully type-safe
    const API_KEY = process.env.RESEND_API_KEY;
    const resend = new Resend(API_KEY);

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "zaidkhatri.work@gmail.com",
      subject: "Message from Website",
      html: `<h1>Name - ${validatedData.fullname}</h1>
             <h2>Email - ${validatedData.email}</h2>
             <h2>Phone - ${validatedData.phoneNo}</h2>
             <p>Message - ${validatedData.message}</p>`,
    });

    return new Response(JSON.stringify("Message received" ),{ status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify({ err: error.issues[0].message }), {
        status: 400,
      });
    }

    return new Response(JSON.stringify({ err: "Failed to send Message" }), {
      status: 400,
    });
  }
}
