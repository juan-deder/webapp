<header>
		<h1 class="mainHeader">LaEmpresa</h1>
</header>
<nav>
	<div>
		<a class="navLink"><i class="fa fa-home"></i>Inicio</a>
		<a class="navLink navSubMenuLink">
			<i class="fa fa-cubes"></i>Webpabes<i class="fa fa-caret-right"></i>
			<div class="navSubMenu">Websites</div>
		</a>
		<a class="navLink navSubMenuLink">
			<i class="fa fa-list"></i>Servicios<i class="fa fa-caret-right"></i>
			<div class="navSubMenu">Hosting</div>
		</a>
	</div>
	<div class="formLinks">
		<div>
			<a class="navLink navFormLink" onclick="displayForm(0)"><i class="fa fa-sign-in"></i>Ingresar</a>
			<div class="nF">
				<button class="closingX" onclick="displayForm(0)"><i class="fa fa-times-circle"></i></button>
				<h3>Formulario de ingreso</h3>
				<div class="inputGroup">
					<input type="text" name="userName" placeholder="Correo electrónico"><i class="fa fa-at"></i>
				</div>
				<div class="inputInfo">¿No tienes una <b>cuenta</b>?<br>
					<i class="fa fa-hand-o-right"></i> <button class="helpButton" onclick="displayForm(1)">Crear una <b>cuenta</b></button>
				</div>
				<div class="inputGroup">
					<input type="password" name="password" placeholder="Contraseña"><i class="fa fa-key"></i>
				</div>
				<div class="inputInfo">¿Has olvidado tu <b>contraseña</b>?<br>
					<i class="fa fa-hand-o-right"></i> <button class="helpButton">Recuperar <b>contraseña</b></button>
				</div>
				<button name="submit">Ingresar</button>
			</div>
		</div>
		<div>
			<a class="navLink navFormLink" onclick="displayForm(1)"><i class="fa fa-user-plus"></i>Registrarse</a>
			<div class="nF" style="transform:translate(0, 0);margin-top:23px;">
				<button class="closingX" onclick="displayForm(1)"><i class="fa fa-times-circle"></i></button>
				<h3>Formulario de registro</h3>
				<div class="inputGroup">
					<input type="text" name="regisEmail" onfocus='checkEmail(this)' oninput="checkEmail(this)" placeholder="Correo electrónico">
					<i class="fa fa-at"></i>
					<div class="inputState"><i class="fa fa-pencil editState"></i></div>
					<div class="inputMessageBox"><div class="inputMessage"></div></div>
				</div>
				<div class="inputInfo" id="emailWarn" style='word-break:'>Ejemplos: <b>parte-local@dominio</b>, <br><b>parte-local@subdominio.subdominio</b>.</div>
				<div class="inputGroup">
					<input type="password" name="password" placeholder="Contraseña">
					<i class="fa fa-key"></i>
					<div class="inputState"><i class="fa fa-pencil editState"></i></div>
					<div class="inputMessageBox"><div class="inputMessage"></div></div>
				</div>
				<div class="inputInfo">Caracteres permitidos: <b>A-Z a-z 0-9</b> (8 - 16 caracteres).</div>
				<button name="submit">Registrarse</button>
			</div>
		</div>
	</div>
</nav>
<script>
	document.querySelectorAll('nav > div:first-child > a')[<?php echo $active; ?>].className += " active";
</script>
<!-- info hand-point-right bell -->
