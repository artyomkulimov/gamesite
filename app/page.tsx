import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Footer from "./components/Footer";

export default function Home() {
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
