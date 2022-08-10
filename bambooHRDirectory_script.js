var companyDomain = "XXXXX";

var endpoint = "https://api.bamboohr.com/api/gateway.php/" + companyDomain + "/v1/employees/directory";
var authString = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";

function getBambooHRDirectory() 
{
  var sheet = SpreadsheetApp.getActiveSheet();
  var img_size = 60; // Parameter image size in pixels, examples : 120, 80, 60

  var options = {
    'method' : 'get',
    'headers': { Accept: 'application/json', Authorization: 'Basic ' + authString}
  };

  var response = UrlFetchApp.fetch(endpoint, options);
  const Directory_data = JSON.parse(response);

  var fields = Directory_data.fields;
  var employees = Directory_data.employees;
  Logger.log(fields);

  for(i = 0; i < fields.length; i++){
    sheet.getRange(1,i+1).setValue(fields[i].name);
  }

  for(i = 0; i < employees.length; i++){
    for(j = 0; j < fields.length; j++){
      
      var ActualField = fields[j].id;

      if(ActualField == "photoUrl")
        sheet.getRange(i+2,j+1).setFormula("=image(\"" + employees[i][ActualField] + "\",4, "+ img_size +","+ img_size +")" );
      else
        sheet.getRange(i+2,j+1).setValue(employees[i][ActualField]);
    }
  }

}
