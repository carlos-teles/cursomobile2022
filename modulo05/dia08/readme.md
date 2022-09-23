https://dev.to/chinmaymhatre/how-to-generate-apk-using-react-native-expo-kae

https://github.com/expo/fyi/blob/main/android-package.md

    npm install --global eas-cli

    added 343 packages, and audited 344 packages in 39s

    33 packages are looking for funding
    run `npm fund` for details

    2 high severity vulnerabilities

    Some issues need review, and may require choosing
    a different dependency.

    Run `npm audit` for details.


Acessar a URL: https://expo.dev/signup

Após criar o cadasto via linha de comando

        expo login
        √ Username/Email Address: ... carlos_********_*******@hotmail.com
        √ Password: ... *************

    Success. You are now logged in as carlosalbertoteles.

Para garantir que está logado em sua conta expo execute:

    expo whoami

A resposta deverá ser:

    Logged in as carlosalbertoteles

Para o build, entre na pasta do projeto

    cd <seu-projeto>

Criar o arquivo eas.json pasta do projeto. Segue o conteúdo do eas.json abaixo

    {
      "build": {
        "preview": {
          "android": {
            "buildType": "apk"
          }
        },
        "preview2": {
          "android": {
            "gradleCommand": ":app:assembleRelease"
          }
        },
        "preview3": {
          "developmentClient": true
        },
        "production": {}
      }
    }

Para fazer o build da plataforma android

    eas build -p android --profile preview
    
    ✔ Created @carlosalbertoteles/103-projeto (https://expo.dev/accounts/carlosalbertoteles/projects/103-projeto) on Expo

    https://github.com/expo/fyi/blob/main/android-package.md

    ✔ Created keystore
                                                           
Compressing project files and uploading to EAS Build. Learn more: https://expo.fyi/eas-build-archive
✔ Uploaded to EAS 5s

Build details: https://expo.dev/accounts/carlosalbertoteles more: https://expo.fyi/eas-build-archive/projects/103-projeto/builds/1c5b24ba-b84f-41a4-80a0-7ad34d95abfb
                                                           /projects/103-projeto/builds/1c5b24ba-b84f-41a4-80a0-7ad34d95abfb
Waiting for build to complete. You can press Ctrl+C to exit

✔ Created keystore                                         roid-package
                                                           . com.pausa.testebutton
Compressing project files and uploading to EAS Build. Learn more: https://expo.fyi/eas-build-archive
✔ Uploaded to EAS 5s

Build details: https://expo.dev/accounts/carlosalbertoteles more: https://expo.fyi/eas-build-archive/projects/103-projeto/builds/1c5b24ba-b84f-41a4-80a0-7ad34d95abfb
                                                           /projects/103-projeto/builds/1c5b24ba-b84f-41a4-80a0-7ad34d95abfb
Waiting for build to complete. You can press Ctrl+C to exit.                                                          .
✔ Build finished

🤖 Android app:
https://expo.dev/artifacts/eas/4v68efpc2KVCrrxkpHVrFH.apk  

C:\portable\projects\103-projeto>


