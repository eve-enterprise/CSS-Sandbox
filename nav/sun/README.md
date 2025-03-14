# Mon Projet Web - HTML, CSS, et JavaScript

## Description

Ce projet est une sandbox dédiée à l'apprentissage et à l'expérimentation avec **HTML**, **CSS** et **JavaScript**. L'objectif est de créer des prototypes, des designs interactifs, et de tester des concepts sans avoir à configurer un environnement complexe.

## Structure du projet

Voici la structure de base de ce projet :

```
/mon-projet
  ├── index.html     # Page d'accueil principale (HTML) 
  ├── /css           # Dossier contenant les fichiers CSS 
  │ └── style.css    # Feuille de style principale (CSS) 
  ├── /js            # Dossier contenant les fichiers JavaScript 
  │ └── script.js    # Script JavaScript principal 
  ├── /assets        # Dossier pour les images, icônes, etc. 
  │ └── logo.png     # Exemple d'image 
  └── README.md      # Documentation du projet (ce fichier)
```

## Technologies utilisées

- **HTML5** pour la structure de la page.
- **CSS3** pour le design et les animations.
- **JavaScript** pour l'interactivité et la logique.
  
## Installation

### 1. Cloner le dépôt sans l'historique Git (pour une "sandbox")

Si tu veux récupérer la configuration de base sans l'historique Git et travailler dans une sorte de "sandbox", voici les étapes :

1. Clonez le dépôt sans le dossier `.git` en utilisant les commandes suivantes :

   ```bash
   git clone https://github.com/EvenZeppa/web-config-base.git ton-repository
   cd ton-repository
   git checkout -- .
   rm -rf .git

