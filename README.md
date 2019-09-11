# Code Q Login Theme

For internal use. Just matches Neos with our company branding.

## Layout options

To use the Studio Q theme instead of Code Q, add your `Settings.yaml`:

    Neos:
      Neos:
        userInterface:
          backendLoginForm:
            stylesheets:
              'CodeQ.LoginTheme:Styles': 'resource://CodeQ.LoginTheme/Public/css/neos-login-studio-q.css'

## Build the CSS

To create a new version on the styles, run:

    nvm use 10
    npm install
    gulp build --env production

## Credits

The Code Q theme [background photo](https://unsplash.com/photos/EUsVwEOsblE) is by [Adi Goldstein](https://unsplash.com/@adigold1?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)