# 🏠 ASANA Web Automation

This repo has a sample login web automation for Asana using Playwright.

#  ⚙️ Dependencies

Note: You may skip steps 1 - 5 if you already have node version 18 or above in your local.

1. Install Homebrew:
If you don’t have Homebrew installed, you can install it by opening Terminal and running the following command:

`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`

2. Install NVM using Homebrew:

Install NVM using Homebrew: Once Homebrew is installed, you can use it to install NVM. Run the following command in Terminal:

`brew install nvm`

3. Source NVM in your shell profile

Add the following lines to your shell profile file (e.g., ~/.bashrc, ~/.zshrc, or ~/.bash_profile):

export NVM_DIR=~/.nvm
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

Then, restart your terminal or run source ~/.your_shell_profile to apply the changes.

4. Verify Installation

You can verify that NVM is installed by running:

`nvm --version`

5. Install Node.js using NVM

You can now use NVM to install Node.js. For example, to install the latest LTS version, run:

`nvm install --lts`

# 👩‍💻 Test Suite Run Setup

1. Clone this repo

2. Goto folder "ASANA-WEB-AUTOMATION" and run the command

`npm install`

3. Run anyone of the below commands to run tests in your local.

Headless mode - `npm run test-dev`

Debug mode - `npm run test-dev-debug`

Headed mode - `npm run test-dev-headed`

4. Go to Test results and click on each individual test to go through steps passed, screenshots, video and trace for more details.

# 🎞 Playwright Documentation

For more information on Playwright features, go to https://playwright.dev/docs/intro
