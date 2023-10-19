import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Footer from "./components/Footer";
import { sql } from "@vercel/postgres";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { mySchemaUsers } from "@/lib/db/schema";

export default async function Home() {
	const db = drizzle(sql);
	const result = await db.select().from(mySchemaUsers);
	console.log(result);

	return (
		<main className="flex flex-col h-screen justify-between">
			<Navbar></Navbar>
			<div className="flex justify-center">
				<div className="grid justify-center grid-cols-3 gap-4">
					<Card></Card>
				</div>
			</div>
			<Footer></Footer>
		</main>
	);
}
