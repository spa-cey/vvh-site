"use server";

interface FormState {
  success: boolean;
  message: string;
}

export async function submitContactForm(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;
  const email = formData.get("email") as string;
  const projectType = formData.get("projectType") as string;
  const description = formData.get("description") as string;
  const contactMethod = formData.get("contactMethod") as string;

  if (!name || !phone || !email || !projectType || !description) {
    return { success: false, message: "Please fill out all required fields." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, message: "Please enter a valid email address." };
  }

  // Log for now — wire up email service (Resend, SendGrid, etc.) later
  console.log("=== CONTACT FORM SUBMISSION ===");
  console.log({ name, phone, email, projectType, description, contactMethod });
  console.log("===============================");

  return {
    success: true,
    message:
      "Thank you! We\u2019ve received your request and will be in touch within 24 hours.",
  };
}
