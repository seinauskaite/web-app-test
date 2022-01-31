const express = require('express');
const app = express();

app.get('/app/:id', (req, res) => {
  let id = req.params.id;
  const a = 2.54;
  let html = '';

  html += '<table>' +
             '<thead>' +
                  '<th>cm.</th>' +
                  '<th>col.</th>' +
                  '<th>|</th>' +
                  '<th>col.</th>' +
                  '<th>cm.</th>' +
              '</thead>' +
  '</tbody>';

  for (let i = 1; i <= req.params.id; i++) {
     html += '<tr>' +
                 '<td>' + i + '</td>' +
                 '<td>' + (i*a).toFixed(2) + '</td>' +
                 '<td>|</td>' +
                 '<td>' + i + '</td>' +
                 '<td>' + (i/a).toFixed(2) + '</td>' +
             '</tr>';
  }
  html += '<tbody></table>';
  res.send(html);
})

app.listen(3000);


