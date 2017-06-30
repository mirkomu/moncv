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
- Ctrl+F -> Rechercher
- Ctrl+H -> Remplacer
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

### Autres
Etant donné que les commandes utilisent Node.js, il faut aussi installer ce dernier. Comme Node.js comprends également NPM, le plus simple est d'installer directement Node.js comme dans le cadre de ce cours.

## Git
### Description
git est un logiciel de gestion de versions décentralisé. C'est un logiciel libre créé par Linus Torvalds, auteur du noyau Linux, et distribué selon les termes de la licence publique générale GNU version 2. Il s’agit du logiciel de gestion de versions le plus populaire qui est utilisé par plus de douze millions de personnes. Git ne repose pas sur un serveur centralisé. C'est un outil de bas niveau, qui se veut simple et performant.
### Commandes
Git dispose notamment des commandes suivantes :

Créé un nouveau dépôt. La branche par défaut s'appelle **master**.
``` bash
git init​
```

Cette commande permet de vérifier l'état des fichiers (untracked, unmodified, modified, staged)
``` bash
git status
```

Ajoute les fichiers souhaités pour le prochain commit. Les objets qui restent inchangés ne sont naturellement pas ajoutés.
``` bash
git add​ 
```

Intègre toutes les modifications apportées dans une version, un commit. Sont commités tous les fichiers qui ont été précedemment ajoutés via la commande *"add"*. A noter, qu'il est possible de modifier le dernier commit (bien que pas très recommandé sauf si des fichiers ont été oubliés ou que le commentaire n'était pas complet, etc) avec le paramètre *--amend*
``` bash
git commit​
```
Pour effacer des fichiers, il faut les supprimer du suivi de version en utilisant la commande *rm* et pour les déplacer, il faut utiliser la commande *mv*
``` bash
git rm
git mv
```

Permet de voir toutes les branches ou de créé une nouvelle branche de développement.
``` bash
git branch​
```

Fusionne plusieurs branches de développement. Il faut se placer dans la branche souhaitée et choisir la branche de laquelle reprendre les modifications.
``` bash
git merge​
```

Permet de récupérer une copie d'un dépôt Git distant 
``` bash
git clone
```

Pour visualiser les serveurs distants enregistrés, il faut utiliser la commande suivante.
``` bash
git remote
```
Pour ajouter un dépot distant, il faut utiliser la commande suivante. A noter que le nom est facultatif et le nom du dépôt distant par défaut est **origin**.
``` bash
git remote add <nomDepot> <AdresseDepot>
```
La commande suivante récupère et fusionne automatiquement une branche distante dans la branche locale
``` bash
git pull
```

Et à l'inverse la commande suivante permet de *pousser* la brancher locale sur le serveur distant.
``` bash
git push <DepotDistant> <Branche>
```

La commande *git checkout* permet de changer de branche ou d'annuler les modifications d'un fichier
``` bash
// Change de branche
git checkout <branch>

// Annule les modifications d''un fichier
git checkout -- <fichier>
```

Attention cette opération est irréversible ! Cette commande permet d'annuler les modifications actuelle et de revenir dans la version du dernier commit ! A noter que la commande *git reset* peut restaurer les fichiers d'un commit donné
``` bash
git reset --hard HEAD
```
 
Cette commande permet de voir les différentes modifications entre la version actuelle et la version du dernier commit
``` bash
git diff
```

Afin de visualiser l'historique des validations, il faut utiliser la commande suivante
``` bash
git log
```
Cependant afin de visualiser l'historique des validations via une interface graphique, il est possible d'utiliser la commande
``` bash
gitk
```

### Git Shell
Afin de pouvoir utiliser git depuis Visual Studio Code, il est possible d'ajouter git dans la variable d'environnement Path ou alors, comme dans le cadre de ce cours, de démarrer le terminal de git (Git Shell), de se positionner sur le répértoire de projet et de lancer l'éditeur avec la commande
``` bash
code .
```
## Github
### Description
GitHub est un service web d'hébergement et de gestion de développement de logiciels, utilisant le logiciel de gestion de versions Git. GitHub propose des comptes professionnels payants, ainsi que des comptes gratuits pour les projets de **logiciels libres**. Le site assure également un contrôle d'accès et des fonctionnalités destinées à la collaboration comme le suivi des bugs, les demandes de fonctionnalités, la gestion de tâches et un wiki pour chaque projet.

### Fonctionnalités
GitHub est centré vers l'aspect social du développement. En plus d'offrir l'hébergement de projets avec Git, le site offre de nombreuses fonctionnalités habituellement retrouvées sur les réseaux sociaux comme les flux, la possibilité de suivre des personnes ou des projets ainsi que des graphes de réseaux pour les dépôts (en anglais repository). GitHub offre aussi la possibilité de créer un wiki et une page web pour chaque dépôt. Le site offre aussi un logiciel de suivi de problèmes (de l'anglais issue tracking system). GitHub propose aussi l'intégration d'un grand nombre de services externes, tels que l'intégration continue, la gestion de versions, badges, chat basés sur les projets, etc.

#### Markdown (.md)
Les documentations des projets sont écrites en langage Markdown (fichiers .md). Ces fichiers ont l'avantage d'être facilement compréhensibles même sans intérpréteur. Ce document en question est réalisé en Markdown.