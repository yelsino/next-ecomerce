import React from "react";
import Buscar from "../UI/Buscar";
import Navegacion from "./Navegacion";
import Link from "next/link";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import Boton from "../UI/Boton";

const ContenedorHeader = styled.div`
	max-width: 1200px;
	width: 95%;
	margin: 0 auto;
	@media (min-width: 600px) {
		display: flex;
		justify-content: space-between;
	}
`;

const Logo = styled.a`
	color: var(--naranja);
	font-size: 4rem;
	line-height: 0;
	font-weight: 700;
	font-family: "Roboto Slab", serif;
	margin-right: 2rem;
`;

const Header = (props) => {
	const usuario = false;
	return (
		<header
			css={css`
				border-bottom: 2px solid var(--gris3);
				padding: 4rem 0;
			`}
		>
			<ContenedorHeader>
				<div
					css={css`
						display: flex;
						align-items: "center";
					`}
				>
					<Link href="/">
						<Logo>P</Logo>
					</Link>
					<Buscar />
					<Navegacion />
				</div>
				<div
					css={css`
						display: flex;
						align-items: center;
					`}
				>
					{usuario ? (
						<>
							<p>HOLA: YELSIÑO</p>
							<Boton bgColor="true" type="button">
								{" "}
								Cerrar Sesion
							</Boton>
						</>
					) : (
						<>
							<Link href="/login">
								<Boton bgColor="true">Login</Boton>
							</Link>
							<Link href="/crear-cuenta">
								<Boton>Registrarse</Boton>
							</Link>
						</>
					)}
				</div>
			</ContenedorHeader>
		</header>
	);
};

export default Header;
