import { motion } from "framer-motion";
import { useState } from "react";
import "./App.css";

function App() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="App">
			<motion.div
				transition={{ layout: { duration: 1, type: "spring" } }}
				layout
				onClick={() => setIsOpen(!isOpen)}
				className="card"
				style={{
					borderRadius: "1rem",
					boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
				}}
			>
				<motion.h2 layout="position">Framer Motion 🚀 </motion.h2>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1 }}
						className="expand"
					>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipsicig elit. Quia
							commodi aut autem. Ullam ducimus voluptatibus, molestias itaque
							similique exercitationem dacere!
						</p>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							Quisquam, pariatur?
						</p>
					</motion.div>
				)}
			</motion.div>
		</div>
	);
}

export default App;
