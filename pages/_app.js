// archivo principal con la configuracion inicial
//  que tendria toda la applicacion

import firebase, { FirebaseContext } from "../firebase";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<FirebaseContext.Provider
			value={{
				firebase,
			}}
		></FirebaseContext.Provider>
	);
}

export default MyApp;
