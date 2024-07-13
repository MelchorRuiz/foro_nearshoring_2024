const url = 'https://foro-nearshoring.igeco.mx';

export default function template( name, email) {
    return `
    <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" style="max-width: 680px;">
    <tbody>
        <tr>
          <td colspan="2" align="center">
            <img src="${url}/assets/email_es.webp" alt="logo" width="550">         
          </td>
        </tr>        
        <tr>
          <td colspan="2" >
            <h2 style="text-align: center;margin:0;font-weight:bold;text-transform: uppercase;margin-top: 20px;">
              BIENVENIDO, ${name}. TU REGISTRO SE HA REALIZADO CON ÉXITO.
            </h2>
            <h2 style='text-align: center;'>
              GRACIAS POR FORMAR PARTE DE <span style="color:#3F4E74;font-weight:bold;">FORO NEARSHORING 2024</span>
            </h2>
            <div style="text-align: justify;font-size:22px;">
              ¡No pierdas la oportunidad de estar con los especialistas actuales del <span style="color:#3F4E74;font-weight:bold;">Nearshoring</span> y conoce las últimas tendencias!                   
            </div>
            <div style="text-align:center;padding:20px;margin-top:25px;">
              <div style="background: #3F4E74;padding:20px;border-radius:20px;">
                <a style="text-decoration:none; color: white;font-weight:bold;" href="${url}/#program" target='_blank'>                 
                  CONSULTA EL PROGRAMA DE ACTIVIDADES
                </a>
              </div>
              <p style="margin-top:40px;margin-bottom: 40px;">
                Te esperamos en <strong>FORO NEARSHORING 2024 el (fecha por confirmar), Auditorio Mateo Herrera, León, Guanajuato.</strong>
              </p>
              <div style="background: #3F4E74;color:white;border-radius: 20px;padding:20px;">               
               <p><strong>HORARIO:</strong></p>
               <p>(hora por confirmar)</p>
              </div>
            </div>    
            <div>
              <table style="width: 100%;">
                <tr>
                  <td style="width: 80%">
                    <p><strong>Nombre: </strong>${name}</p>
                    <p><strong>Correo electrónico: </strong>${email}
                    </p>
                    <p><strong>
                      Fecha de registro: </strong>${getDate()}
                    </p>
                  </li>
                  <td>
                    <img src="cid:qr@cid" alt="qr code" width=200 height=200>
                  </td>
                </tr>
              </table>
            </div>
            <p style="font-weight:bold;font-size:20px;text-align: center;">AÑADIR AL CALENDARIO</p>
            <div style="text-align:center;padding:20px;margin: 20px;">
              <a style="background: #2F4858;color:white;padding:20px;border-radius:20px;margin:20px;text-decoration:none;"
              target="_blank">                        
                Google
              </a>
            </div>
            <div style="text-align:center;padding:20px;margin: 20px;">              
              <a style="background: #2F4858;color:white;padding:20px;border-radius:20px;text-decoration:none;"
              target="_blank">                       
                Outlook
              </a>
            </div>                   
            <div style="text-align:center;padding:20px;margin: 20px;">
              <a style="background: #2F4858;color:white;padding:20px;border-radius:20px;margin:20px;text-decoration:none;"
              target="_blank">
                
              <i>Y!</i> Yahoo!
              </a>
            </div>
            <div style="text-align:center;padding:20px;margin: 20px;">                            
              <a style="background: #2F4858;color:white;padding:20px;border-radius:20px;text-decoration:none;" donwload target="_blank">  
                iCalendar
              </a>
            </div>
            <p style="font-size:15px;line-height:21px;margin:16px 0px;font-weight:bold">
              INSTRUCCIONES PARA TU VISITA:
            </p>
            <ul>
              <li>
                Para agilizar tu acceso al evento, por favor muestra este comprobante impreso o desde tu dispositivo móvil  en el módulo de visitantes preregistrados.
              </li>
              <li>
                Ten en cuenta que tu gafete es personal e intransferible y debe estar visible durante toda tu visita.
              </li>                 
            </ul>                                                          
          </td>      
        </tr>               
        <tr>
          <td style="padding:20px;" align="center">
            <div style="background: #3F4E74;border-radius: 20px;padding:20px;margin:auto;">
              <a style="text-decoration:none;color:white;" href="https://igeco.mx/" target="_blank">
                ENTÉRATE DE TODOS NUESTROS EVENTOS
              </a>
            </div>          
          </td>
          <td style="padding:20px;" align="center">
            <div style="background: #3F4E74;width:fit-content;border-radius: 20px;padding:20px;margin:auto;">
              <a style="text-decoration:none;color:white;" href="${url}" target="_blank">
                INVITA A UN COLEGA
              </a>
            </div>        
          </td>
        </tr>      
        <tr>
          <td colspan="2">
          <hr style="width:100%;border-top:1px solid rgb(214,216,219);border-right:none rgb(214,216,219);border-bottom:none rgb(214,216,219);border-left:none rgb(214,216,219);margin:30px 0px">
            <p style="font-size:12px;line-height:15px;margin:4px 0px;color:rgb(145,153,161);text-align:center">
              <strong>IGECO</strong>, Blvrd Francisco Villa 102-piso 14, Oriental, 37510 León, Guanajuato México.
            </p>
          </td>   
        </tr>     
      </tbody>
    </table>
  `;
}

function getDate() {
  let date = new Date();
  let day = date.getDate();
  if (day < 10) {
      day = '0' + day;
  }
  let month = date.getMonth() + 1; 
  if (month < 10) {
      month = '0' + month;
  }
  let year = date.getFullYear();
  return day + '/' + month + '/' + year;
}
