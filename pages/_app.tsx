import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
		<Head>
			<title>Estado de servicios de AC3</title>
			<meta name="description" content="Página de estado de los servicios de AC3 - OpenStreetMap Colombia" />
		</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
