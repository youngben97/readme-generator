//Iterate over badges object and return matching key/value
function renderLicenseBadge(license) {
  const badges = {
    gnuGPLv3: '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)',
    gnuAGPLv3: '![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)',
    gnuLGPLv3: '![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)',
    mozilla: '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)',
    apache: '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)',
    mit: '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
    boost: '![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)',
    unlicense: '![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)',
    none: ''
  }

  for (const badgeKey in badges) {
    if (badgeKey.toLowerCase() === license.toLowerCase()) {
      return badges[badgeKey]
    };
  };
};

// Iterate over licenseLink object and return matching key/value
function renderLicenseLink(license) {
  const licenseLink = {
    gnuGPLv3: 'https://www.gnu.org/licenses/gpl-3.0',
    gnuAGPLv3: 'https://www.gnu.org/licenses/agpl-3.0',
    gnuLGPLv3: 'https://www.gnu.org/licenses/lgpl-3.0',
    mozilla:'https://opensource.org/licenses/MPL-2.0',
    apache: 'https://opensource.org/licenses/Apache-2.0',
    mit: 'https://opensource.org/licenses/MIT',
    boost: 'https://www.boost.org/LICENSE_1_0.txt',
    unlicense: 'http://unlicense.org/',
    none: ''
  }
  for (const linkKey in licenseLink) {
    if (linkKey.toLowerCase() === license.toLowerCase()) {
      return licenseLink[linkKey]
    };
  };
}

// Return license section based on user input
function renderLicenseSection(license) {
  if (license === '') {
    return `This repo has no license.`
  } else {
    return `Licensed under ${license}`
  }
}

// Generate markdown based on user input
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  
  ${data.description}

  ## Badges

  ${renderLicenseBadge(data.license)}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribution](#contribution)
  - [Test](#test)
  - [Questions](#questions)

  <a id="installation"></a>
  ## Installation

  ${data.installation}

  <a id="usage"></a>
  ## Usage
  
  ${data.usage}

  <a id="license"></a>
  ## License

  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}

  <a id="badges"></a>
  ## Badges

  ${renderLicenseBadge(data.license)}

  <a id="contribution"></a>
  ## How to Contribute

  ${data.contribution}

  <a id="test"></a>
  ## Test

  ${data.test}

  <a id="questions"></a>
  ## Questions

  If you have any questions, feel free to contact me at:
  - Github: https://github.com/${data.gitname}
  - Email: ${data.email}
`;
}

//export generateMarkdown function
module.exports = generateMarkdown;
