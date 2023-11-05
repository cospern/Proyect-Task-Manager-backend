import nodemailer from 'nodemailer'

export const emailRegistro = async (data) => {
  const { nombre, email, token } = data;
  const transport = nodemailer.createTransport({
    host:process.env.EMAIL_HOST, 
    port:process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    }
  });

  //Información del email
  const info = await transport.sendMail({
    from: '" Proyect Task Manager - Administrador de proyectos " cuentas@proyecttaskmanager.com' ,
    to: email,
    subject: "Confirma tu cuenta",
    text: "Confirma tu cuenta en Proyect Task Manager",
    html: `<p>Hola ${nombre}, confirma tu cuenta en Proyuect Task Manager</p>
    <p>Tu cuenta no estará activa hasta que la confirmes en el siguiente enlace : <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Confirmar cuenta</a></p>
    <p>Si no has sido tu, ignora este correo</p>`,
  })
}

export const emailOlvidePassword = async (data) => {
  const { nombre, email, token } = data;
  const transport = nodemailer.createTransport({
    host:process.env.EMAIL_HOST, 
    port:process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    }
  });

  //Información del email
  const info = await transport.sendMail({
    from: '" Proyect Task Manager - Reestablece tu password" cuentas@proyecttaskmanager.com' ,
    to: email,
    subject: "Confirma tu cuenta",
    text: "Reestablece tu password en Proyect Task Manager",
    html: `<p>Hola ${nombre}, has solicitado restablecer tu password</p>
    <p>Sigue el siguiente enlace para generar un nuevo password : <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Restablecer password</a></p>
    <p>Si no has sido tu, ignora este correo</p>`,
  })
}
