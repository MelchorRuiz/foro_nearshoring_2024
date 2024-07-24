const url = 'https://foro-nearshoring.igeco.mx';

export default function template( name, email ) {
    return `
    <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" style="max-width: 680px;">
    <tbody>
        <tr>
          <td colspan="2" align="center">
            <img src="${url}/assets/email_en.webp" alt="logo" width="550">         
          </td>
        </tr>        
        <tr>
          <td colspan="2" >
            <h2 style="text-align: center;margin:0;font-weight:bold;text-transform: uppercase;margin-top: 20px;">
              WELCOME, ${name}. YOUR REGISTRATION WAS SUCCESSFUL.
            </h2>
            <h2 style='text-align: center;'>
              THANK YOU FOR JOINING <span style="color:#3F4E74;font-weight:bold;">NEARSHORING FORUM 2024</span>
            </h2>
            <div style="text-align: justify;font-size:22px;">
              Don't miss the opportunity to meet today's <span style="color:#3F4E74;font-weight:bold;">Nearshoring</span> specialists and learn about the latest trends!             
            </div>
            <div style="text-align:center;padding:20px;margin-top:25px;">
              <div style="background: #3F4E74;padding:20px;border-radius:20px;">
                <a style="text-decoration:none; color: white;font-weight:bold;" href="${url}/#program" target='_blank'>                 
                  SEE THE PROGRAM OF ACTIVITIES
                </a>
              </div>
              <p style="margin-top:40px;margin-bottom: 40px;">
                We look forward to seeing you at <strong>NEARSHORING FORUM 2024 on 09/05/2024, Mateo Herrera Auditorium, Leon, Guanajuato.
              </p>
              <div style="background: #3F4E74;color:white;border-radius: 20px;padding:20px;">               
               <p><strong>SCHEDULE:</strong></p>
               <p>September 05, 2024</p>
              </div>
            </div> 
            <div>
              <table style="width: 100%;">
                <tr>
                  <td style="width: 80%">
                    <p><strong>Name: </strong>${name}</p>
                    <p><strong>Email: </strong>${email}
                    </p>
                    <p><strong>
                      Registration Date: </strong>${getDate()}
                    </p>
                  </li>
                  <td>
                    <img src="cid:qr@cid" alt="qr code" width=200 height=200>
                  </td>
                </tr>
              </table>
            </div>              
            <p style="font-weight:bold;font-size:20px;text-align: center;">ADD TO CALENDAR</p>
            <div style="text-align:center;padding:20px;margin: 20px;">
              <a style="background: #2F4858;color:white;padding:20px;border-radius:20px;margin:20px;text-decoration:none;" href="https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20240905%2F20240906&details=%C2%A1Descubre%20las%20claves%20del%20Nearshoring%20y%20capitaliza%20sus%20ventajas%20con%20los%20l%C3%ADderes%20del%20sector%21&location=Auditorio%20Mateo%20Herrera&text=Foro%20Nearshoring"
              target="_blank">                        
                Google
              </a>
            </div>
            <div style="text-align:center;padding:20px;margin: 20px;">              
              <a style="background: #2F4858;color:white;padding:20px;border-radius:20px;text-decoration:none;" href="https://outlook.live.com/calendar/0/action/compose?allday=true&body=%C2%A1Descubre%20las%20claves%20del%20Nearshoring%20y%20capitaliza%20sus%20ventajas%20con%20los%20l%C3%ADderes%20del%20sector%21&enddt=2024-09-06T16%3A30%3A00&location=Auditorio%20Mateo%20Herrera&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=2024-09-05T16%3A30%3A00&subject=Foro%20Nearshoring"
              target="_blank">                       
                Outlook
              </a>
            </div>                   
            <div style="text-align:center;padding:20px;margin: 20px;">
              <a style="background: #2F4858;color:white;padding:20px;border-radius:20px;margin:20px;text-decoration:none;" href="https://calendar.yahoo.com/?desc=%25C2%25A1Descubre%2520las%2520claves%2520del%2520Nearshoring%2520y%2520capitaliza%2520sus%2520ventajas%2520con%2520los%2520l%25C3%25ADderes%2520del%2520sector%21&dur=allday&et=20240906&in_loc=Auditorio+Mateo+Herrera&st=20240905&title=Foro%2520Nearshoring&v=60"
              target="_blank">
                
              <i>Y!</i> Yahoo!
              </a>
            </div>
            <div style="text-align:center;padding:20px;margin: 20px;">                            
              <a style="background: #2F4858;color:white;padding:20px;border-radius:20px;text-decoration:none;" donwload target="_blank" href="https://foro-nearshoring.igeco.mx/calendar.ics">  
                iCalendar
              </a>
            </div>
            <p style="font-size:15px;line-height:21px;margin:16px 0px;font-weight:bold">
              INSTRUCTIONS FOR YOUR VISIT:
            </p>
            <ul>
              <li>
                To expedite your access to the event, please show this printed voucher or from your mobile device at the pre-registered visitors module.
              </li>
              <li>
                Please note that your badge is personal and non-transferable and must be visible throughout your visit.
              </li>                 
            </ul>                                                          
          </td>      
        </tr>               
        <tr>
          <td style="padding:20px;" align="center">
            <div style="background: #3F4E74;border-radius: 20px;padding:20px;margin:auto;">
              <a style="text-decoration:none;color:white;" href="https://igeco.mx/" target="_blank">
                LEARN ABOUT ALL OUR EVENTS
              </a>
            </div>          
          </td>
          <td style="padding:20px;" align="center">
            <div style="background: #3F4E74;width:fit-content;border-radius: 20px;padding:20px;margin:auto;">
              <a style="text-decoration:none;color:white;" href="${url}" target="_blank">
                INVITE A COLLEAGUE
              </a>
            </div>        
          </td>
        </tr>      
        <tr>
          <td colspan="2">
          <hr style="width:100%;border-top:1px solid rgb(214,216,219);border-right:none rgb(214,216,219);border-bottom:none rgb(214,216,219);border-left:none rgb(214,216,219);margin:30px 0px">
            <p style="font-size:12px;line-height:15px;margin:4px 0px;color:rgb(145,153,161);text-align:center">
              <strong>IGECO</strong>, Blvrd Francisco Villa 102-floor 14, Oriental, 37510 Leon, Guanajuato Mexico.
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
  return month + '/' + day + '/' + year;
}