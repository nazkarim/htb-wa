import { DeployButton } from "@/components/deploy-button";
import { EnvVarWarning } from "@/components/env-var-warning";
import { AuthButton } from "@/components/auth-button";
import { Hero } from "@/components/hero";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { ConnectSupabaseSteps } from "@/components/tutorial/connect-supabase-steps";
import { SignUpUserSteps } from "@/components/tutorial/sign-up-user-steps";
import { hasEnvVars } from "@/lib/utils";
import Link from "next/link";

export default async function Home() {
  const response = await fetch("http://localhost:3000/api/books");
  const subjects = await response.json();
  console.log(subjects);

  return (
    <>
      <h1>Welcome to Hit The Books</h1>
      {subjects.map((subject: { id: number; title: string }) => (
        <div key={subject.id}>
          <h2>{subject.title}</h2>
        </div>
      ))}
    </>
  );
}
