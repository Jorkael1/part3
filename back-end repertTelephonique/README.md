# Phonebook Backend - Full Stack Open (Exercises 3.1 - 3.8)

Ce dépôt contient la partie backend d'une application de répertoire téléphonique, développée avec **Node.js** et **Express**. Le projet a été réalisé dans le cadre des exercices du cours Full Stack Open.

## 🚀 Fonctionnalités implémentées

L'API permet de gérer une liste de contacts via les routes suivantes :

- **GET `/api/persons`** : Récupère la liste complète des contacts.
- **GET `/info`** : Affiche le nombre d'entrées et l'heure de la requête.
- **GET `/api/persons/:id`** : Récupère les détails d'un contact spécifique par son ID.
- **DELETE `/api/persons/:id`** : Supprime un contact du répertoire.
- **POST `/api/persons`** : Ajoute un nouveau contact (vérifie que le nom est unique et que les champs sont remplis).

## 🛠️ Technologies utilisées

- **Node.js** : Environnement d'exécution JavaScript.
- **Express** : Framework web pour Node.js.
- **Morgan** : Middleware de journalisation (logging) des requêtes HTTP.
- **Nodemon** : Outil de développement pour redémarrer automatiquement le serveur.

## 📊 Configuration de Morgan (Logging)

Dans l'exercice 3.8, Morgan a été configuré de manière personnalisée pour inclure les données envoyées lors des requêtes **POST**. Un token personnalisé a été créé pour extraire le contenu du corps de la requête (`req.body`) à l'aide de `JSON.stringify`.

Exemple de sortie dans la console :
`POST /api/persons 201 54 - 10.234 ms {"name": "Arto Hellas", "number": "040-123456"}`

## 📦 Installation et Lancement

1.  Clonez ce dépôt :
    ```bash
    git clone <votre-url-github>
    ```
2.  Installez les dépendances :
    ```bash
    npm install
    ```
3.  Lancez le serveur en mode production :
    ```bash
    npm start
    ```
4.  Lancez le serveur en mode développement (avec auto-reload) :
    ```bash
    npm run dev
    ```

Le serveur sera accessible sur `http://localhost:3001`.

## 🧪 Tests

Les routes ont été testées à l'aide de :

- Le navigateur (pour les requêtes GET).
- **Postman** (pour les requêtes POST et DELETE).
- Ou le client REST de VS Code (`requests.http`).

---

_Projet réalisé par [Votre Nom/Pseudo]_
