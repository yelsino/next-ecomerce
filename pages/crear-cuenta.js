import React from "react";
import Layout from "../components/layouts/Layout";
import { Campo, Formulario, InputSubmit } from "../components/UI/Formulario";
import useValidacion from "../hooks/useValidacion";
import validarCrearCuenta from "../validacion/validarCrearCuenta";
import { Error } from "../components/UI/Formulario";

const STATE_INICIAL = {
	nombre: "",
	email: "",
	password: "",
};

const CrearCuenta = () => {
	const {
		valores,
		errores,
		handleChange,
		handleSubmit,
		handleBlur,
	} = useValidacion(STATE_INICIAL, validarCrearCuenta, crearCuenta);

	const { nombre, email, password } = valores;

	function crearCuenta() {
		console.log("creando cuenta ....");
	}
	return (
		<div>
			<Layout>
				<h1
					css={{
						textAlign: "center",
						marginTop: "5 rem",
					}}
				>
					crear cuenta
				</h1>
				<Formulario onSubmit={handleSubmit} noValidate>
					<Campo>
						<label htmlFor="nombre">Nombre</label>
						<input
							type="text"
							id="nombre"
							placeholder="Tu nombre"
							name="nombre"
							value={nombre}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
					</Campo>
					{errores.nombre && <Error>{errores.nombre}</Error>}
					<Campo>
						<label htmlFor="email">Email</label>
						<input
							type="text"
							id="email"
							placeholder="Tu email"
							name="email"
							value={email}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
					</Campo>
					{errores.email && <Error>{errores.email}</Error>}
					<Campo>
						<label htmlFor="password">Contraseña</label>
						<input
							type="text"
							id="password"
							placeholder="Tu password"
							name="password"
							value={password}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
					</Campo>
					{errores.password && <Error>{errores.password}</Error>}
					<InputSubmit type="submit" value="crear cuenta" />
				</Formulario>
			</Layout>
		</div>
	);
};

export default CrearCuenta;
