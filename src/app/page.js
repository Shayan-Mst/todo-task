import ButtonLink from "@/components/ButtonLink";

export default function Home() {
  return (
   <>
 <main className="min-h-screen flex flex-col items-center justify-center gap-4  p-4">
      <h1 className="text-3xl font-bold mb-6">Todo App</h1>
      <ButtonLink href="/add" color="green"> Add Todo</ButtonLink>
      <ButtonLink href="/delete" color="red"> Delete Todo</ButtonLink>
      <ButtonLink href="/view" color="blue"> View Todos</ButtonLink>
    </main>
   </>
  );
}
