# PORFOLIO 

## VERSIONS


## CONFIGURATION

Chaque clonage du projet, il faut installer le composer via la commande suivante :
```
composer install
```

Configuration d'affichage et suggestions pour **HTML** et **Tailwind CSS** avec le fichier dans [Visuel Studio Code]().
- Installer l'extension "Twig Language ou Twig Language 2", 
- Ensuite -> %appdata%/Code/user/settings.json 

Dans ce fichier settings.json ajouter des paramètres suivants :
```
{
    "extensions.autoUpdate": false,
    "security.workspace.trust.untrustedFiles": "open",
    "files.associations": {
        "*.twig": "twig",
        "*.html": "twig"
    },
    "emmet.includeLanguages": {
        "twig": "html",
    },
    "tailwindCSS.includeLanguages": {
        "twig": "html"
    },
    "tailwindCSS.experimental.classRegex": [
        [
            "class\\s*=\\s*\"([^\"]*)\"",
            1
        ],
    ],
}
```
Recharger la fenêtre pour afficher correctement via la commande : ctrl + Alt + P
