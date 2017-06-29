# Normand Paratte - CV
> Ce site représentant un CV fictif a été réalisé dans le cadre du cours "Projet de technologies WEB"

## Outils utilisés
## Visual studio code
### Définition
Visual Studio Code est un IDE développé par Microsoft pour Windows, Linux et OS X.
### Utilisation
Visual studio code permet plusieurs choses utiles notamment l'utilisation de terminal directement intégré à l'IDE, des raccourcis clavier, etc.
#### Raccourcis claviers
Voici quelques raccourcis clavier utiles :
- Shift+Alt+F -> Format document
- Ctrl+K Ctrl+F -> Format selection
- Ctrl+F Find
- Ctrl+H Replace
- ...

Voir le [lien suivant](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf) pour connaître tous les raccourcis.

## WebPack
### Définition
Gestionnaire des dépendances des modules internes. Il permet d'intégrer divers module comme eslint qui permet de tester l'indendation du code, etc.

Webpack se définit lui même comme un "module bundler", c'est à dire qu'il récupère des dépendances et des modules pour générer des fichiers statics. 

## NPM
### Définition
NPM est le gestionnaire de paquets officiel de Node.js. Il fonctionne avec un terminal et gère les dépendances pour une application. Il permet également d'installer des applications Node.js disponibles sur le dépôt NPM.

### Commandes
Ci-dessous, les commandes utilisés dans le cadre de ce cours.

Cette commande permet de lancer le serveur et ainsi les modifications exécutés dans l'éditeur sont directement répécutés dans le navigateur.
La commande utilise silencieusement node.js (node build/dev-server.js)
``` bash
    npm run dev
```

Cette commande permet de gérer les fichiers minimifés, formater le code, etc. Cette étape permet de générer les fichiers prêts pour la production.
La commande utilise silencieusement node.js (node build/build.js) ainsi que WebPack.
``` bash
    npm run build
```

Cette commande permet d'envoyer les fichiers sur le serveur distant et directement sur la branche gh-pages.
La commande utilise silencieusement la commande "push-dir --dir=dist --branch=gh-pages --cleanup --verbose"
``` bash
    npm run deploy
```
Cette commande permet d'installer des applications Node.js disponibles sur le dépôt de NPM.
``` bash
    npm install
```
## Git
### Description
### Commandes


## Github