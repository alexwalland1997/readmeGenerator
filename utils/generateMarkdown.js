// function to generate markdown for README
function generateMarkdown(data, license) {
  //variable for body of readme
  let body =
   `
    ## Description
  
    *The what, who, and why*
  
    ${data.description}
    
    `;
  //create variable for read me and add license badge
  let gMarkdown = `${license} \ng`;
  
    gMarkdown +=`# ${data.name} \n`;
  
    gMarkdown +=`## Table of Contents \n`;
  
    gMarkdown += `* [Description](#description) \n`

  //check if user has entered something if they have add it to table of contents and body
  if (data.installation !== "") {
    gMarkdown += `* [Installation](#installation) \n`;
    body += `## Installation
    *Instructions on how to install the project and run it*
  
      ${data.installation}`;
  }

  if (data.credit !== "") {
    gMarkdown += `* [Credit](#credit) \n`;
    body +=`## Credit
    *All sources used to help with this project*
  
      ${data.credit}
      `;
  }

  if (data.tests !== "") {
    gMarkdown += `* [Tests](#tests) \n`;
    body +=`## Tests
    *The following are tests that I have run on this project*
  
      ${data.test}
      `;
  }

  gMarkdown += `* [License](#license) \n`;
  body +=`## License
    *The project is protected by the following license*
  
    ${data.license}
    `;

  gMarkdown += `* [Contact](#contact) \n`;
  body +=`## Contact
  *You can contact me through the following*
  
    Github: ${data.github} \n
    Email: ${data.email}
    `;
  console.log(body);
  gMarkdown += body;

  return gMarkdown;
}

module.exports = generateMarkdown;
