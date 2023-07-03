const jsonServer = require('json-server');
const auth = require('json-server-auth');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.db = router.db;

const validateUser = (email, password) => {
  const users = server.db.get('users').value();
  const user = users.find((user) => user.email === email && user.password === password);
  return user !== undefined ? user : null;
};

server.use(
  auth.rewriter({
    validateUser: validateUser,
  })
);

server.use(middlewares);
server.use(auth);

server.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = validateUser(email, password);

  if (user) {
    res.status(200).json({ success: true });
  } else {
    res.status(401).json({ success: false, message: 'Email or password is incorrect' });
  }
});

server.use(router);

server.listen(3000, () => {
  console.log('JSON Server is running');
});
