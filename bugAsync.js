function obtenerUsuario(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === 1) {
        const usuario = { id: 1, nombre: "John Doe" };
        resolve(usuario);
      } else {
        reject(new Error("Usuario no encontrado"));
      }
    }, 2000);
  });
}

async function obtenerYMostrarUsuario() {
  try {
    const usuario = await obtenerUsuario(1);
    console.log(usuario);
  } catch (error) {
    console.error(error.message);
  }
}

obtenerYMostrarUsuario(1);
