# Code Q Login Theme

For internal use. Just matches Neos with our company branding.

## Layout options

To use the Code Q logo instead of the Studio Q & Code Q, add your `Settings.yaml`:

    Neos:
      Neos:
        userInterface:
          backendLoginForm:
            stylesheets:
              'CodeQ.LoginTheme:Styles': 'resource://CodeQ.LoginTheme/Public/css/neos-login-codeq-q.css'

## Build the CSS

To create a new version on the styles, run:

    npm install
    gulp build --env production

