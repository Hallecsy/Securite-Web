# 📝 ToDoList
Cette ToDoList permet de créer des tâches avec un nom, une description, une priorité ainsi qu'une date.  Il est possible de les trier selon leur titre, leur priorité ou leur date. Nous pouvons, également, modifier ou supprimer chaque tâche.

L'application utilise une interface Front en React et elle est reliée à un Back en NodeJs.

# 📝 Requirements
Node.js : 7.16.0
MySQL: 5.7

# 🎉 Lancer le projet
Tout d'abord, il faut connecter une base de données, la connexion se fait dans le fichier **.env**

Vous trouverez les détails de connexion, selon la base de données utilisée, à [cette adresse](https://www.prisma.io/docs/reference/database-reference/connection-urls)

Pour lancer le projet, il faut ouvrir un terminal et lancer la commande, pour le Front :
```
 yarn
```
puis
```
 yarn run dev
```
Pour le Back, il faut ouvrir un autre terminal avec la commande :
```
 node server/App.js
```
Et l'application est lancée !