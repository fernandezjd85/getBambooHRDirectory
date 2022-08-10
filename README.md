# getBambooHRDirectory
## Google Sheets Script to request Company Open Directory to bamboohr

gSheet script to get BambooHR open directory (macro).
It's a simple script to pull all the company directories and flush them into a spreadsheet.

### Instructions
1. Request the authorization token in the following link https://documentation.bamboohr.com/reference/get-employees-directory-1
2. In the section PATH PARAMS fill the input "companyDomain" with your company domain name (assigned by bamboohr)
3. Generate your API Token inside be bamboohr application. Settings page.
4. Fill the Basic field under the AUTHENTICATION panel and press "Try it!"
5. From the code generated copy the Authorization string. 
```
const options = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    Authorization: 'Basic XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
  }
};
``` 

6. Inside de the fill the "companyDomain" variable with your company domain name (assigned by bamboohr)

### Final result
All the company directory public information with be displayed in a spreadsheet.
Including the image of each person inside a cell. 

The parameter for the image size is fully customizable:

```
  var img_size = 60;
```
  
The fields displayed are:

1. Display name	
2. First name	
3. Last name	
4. Preferred name	
5. Job title	
6. Work Phone	
7. Work Email	
8. Department	
9. Location	
10. Division	
11. LinkedIn URL	
12. Pronouns	
13. Manager	
14. Employee photo exists	
15. Employee photo URL
