const { PrismaClient } = require('@prisma/client');
const express = require('express');
const cors = require('cors');

const port = 5000;
const app = express();
const prisma = new PrismaClient({ rejectOnNotFound: true });

app.use(express.json(), cors());

/* ------------------
      MIDDLEWARE
------------------ */
async function basicAuth(req, res, next) {
  // make authenticate path public
  if (req.path === '/api/login') {
    return next();
  }

  if (!req.headers.authorization || req.headers.authorization.indexOf('Basic ') === -1) {
    return res.status(401).json({ message: 'Missing Authorization Header' });
  }

  const base64Credentials = req.headers.authorization.split(' ')[1];
  const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
  const [username, password] = credentials.split(':');
  const user = await prisma.user.findFirst({
    where: { email: username, password }
  });
  if (!user) {
    return res.status(401).json({ message: 'Invalid Authentication Credentials' });
  }

  req.user = user;

  return next();
}

// On ne vérifie pas si l'utilisateur est connecté,
// n'importe quelle utilisateur peut donc accéder à un autre compte

/* app.use(basicAuth); */

/* --------------
    CONNEXION
-------------- */
app.route('/api/login')
  .get((req, res) => {
    async function main() {
      // Prisma renvoie, par défault le premier utilisateur si aucun utilisateur ne correspond
      // aux identifiants on peut donc se connecter à l'utilisateur qui a l'id 1 avec
      // n'importe quel identifiant ou même sans aucun identifiant
      const user = await prisma.user.findFirst({
        where: {
          email: req.body.email,
          AND: [
            { password: req.body.password }
          ]
        }
      });
      res.send(user);
    }

    main()
      .catch((e) => {
        throw e;
      })
      .finally(async () => {
        await prisma.$disconnect();
      });
  })
  .post((req, res) => {
    async function main() {
      await prisma.todos.create({
        data: {
          uuid: req.body.uuid,
          titre: req.body.titre,
          description: req.body.description,
          priorite: req.body.priorite,
          date: new Date(req.body.date)
        }
      });

      const allTodos = await prisma.todos.findMany();
      res.send(allTodos);
    }

    main()
      .catch((e) => {
        throw e;
      })
      .finally(async () => {
        await prisma.$disconnect();
      });
  });

/* ---------
   TACHES
--------- */
app.route('/api/todos')
  .get((req, res) => {
    async function main() {
      const allTodos = await prisma.todos.findMany();
      res.send(allTodos);
    }

    main()
      .catch((e) => {
        throw e;
      })
      .finally(async () => {
        await prisma.$disconnect();
      });
  })
  .post((req, res) => {
    async function main() {
      await prisma.todos.create({
        data: {
          uuid: req.body.uuid,
          titre: req.body.titre,
          description: req.body.description,
          priorite: req.body.priorite,
          date: new Date(req.body.date)
        }
      });

      const allTodos = await prisma.todos.findMany();
      res.send(allTodos);
    }

    main()
      .catch((e) => {
        throw e;
      })
      .finally(async () => {
        await prisma.$disconnect();
      });
  });

app.route('/api/todos/:uuid')
  .get((req, res) => {
    async function main() {
      const todo = await prisma.todos.findUnique({
        where: {
          uuid: req.params.uuid
        }
      });
      res.send(todo);
    }

    main()
      .catch((e) => {
        throw e;
      })
      .finally(async () => {
        await prisma.$disconnect();
      });
  })
  .put((req, res) => {
    async function main() {
      const todo = await prisma.todos.update({
        where: { uuid: req.params.uuid },
        data: {
          titre: req.body.titre,
          description: req.body.description,
          priorite: req.body.priorite,
          date: req.body.date,
          isDone: req.body.isDone
        }
      });
      res.send(todo);
    }

    main()
      .catch((e) => {
        throw e;
      })
      .finally(async () => {
        await prisma.$disconnect();
      });
  })
  .delete((req, res) => {
    async function main() {
      const todo = await prisma.todos.delete({
        where: { uuid: req.params.uuid }
      });
      res.send(todo);
    }

    main()
      .catch((e) => {
        throw e;
      })
      .finally(async () => {
        await prisma.$disconnect();
      });
  });

/* ---------
    USERS
--------- */
app.route('/api/users')
  .get((req, res) => {
    async function main() {
      const allUsers = await prisma.user.findMany();
      res.send(allUsers);
    }

    main()
      .catch((e) => {
        throw e;
      })
      .finally(async () => {
        await prisma.$disconnect();
      });
  })
  .post((req, res) => {
    async function main() {
      await prisma.user.create({
        data: {
          id: req.body.id,
          lastname: req.body.lastname,
          firstname: req.body.firstname,
          email: req.body.email,
          password: req.body.password
        }
      });

      const allUsers = await prisma.user.findMany();
      res.send(allUsers);
    }

    main()
      .catch((e) => {
        throw e;
      })
      .finally(async () => {
        await prisma.$disconnect();
      });
  });

app.route('/api/users/:id')
  .get((req, res) => {
    async function main() {
      const user = await prisma.user.findUnique({
        where: {
          id: parseInt(req.params.id, 10)
        }
      });
      res.send(user);
    }

    main()
      .catch((e) => {
        throw e;
      })
      .finally(async () => {
        await prisma.$disconnect();
      });
  })
  .put((req, res) => {
    async function main() {
      const user = await prisma.user.update({
        where: { id: parseInt(req.params.id, 10) },
        data: {
          id: req.body.id,
          lastname: req.body.lastname,
          firstname: req.body.firstname,
          email: req.body.email,
          password: req.body.password
        }
      });
      res.send(user);
    }

    main()
      .catch((e) => {
        throw e;
      })
      .finally(async () => {
        await prisma.$disconnect();
      });
  })
  .delete((req, res) => {
    async function main() {
      const user = await prisma.user.delete({
        where: { id: parseInt(req.params.id, 10) }
      });
      res.send(user);
    }

    main()
      .catch((e) => {
        throw e;
      })
      .finally(async () => {
        await prisma.$disconnect();
      });
  });

app.listen(port, () => {
  console.log(`Back ToDoList listening on port ${port}`);
});
