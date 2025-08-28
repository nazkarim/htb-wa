import subjects from "@/app/api/db";

export async function GET() {
  return Response.json(subjects);
}
