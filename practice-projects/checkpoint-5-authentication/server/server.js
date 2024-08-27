import express from 'express';
import { MongoClient } from 'mongodb';


const app = express();
app.use(express.json());

const dbclient = new MongoClient('mongodb://localhost:27017')
//app.set('trust proxy', 1)

// Middleware to set CORS headers
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://192.168.0.6:5173'); // Allow all origins
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Allow specific HTTP methods
    res.header('Access-Control-Allow-Credentials', 'true'); // Allow credentials
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization'); // Allow specific headers
    next();
  });

app.get('/home', home)
app.post('/logout', logout)
app.post('/login', login)
app.post('/register', register)



async function home(req, res) {
    console.log(req.headers.cookie)

    const user = await resolveUserFromCookie(req.headers.cookie)
    console.log(user)

    if (!user) {
        returnGeneric(res)
    } else {
        returnUserPage(res, user)
    }
}

async function logout(req, res) {
    console.log("Logout called")

    const user = await resolveUserFromCookie(req.headers.cookie)
    console.log(user)
    res.setHeader("Clear-Site-Data", '"cookies"')

    if (!user) {
        res.json({
            message: "You were not logged in, so no logout happened",
            buttons: [{text: "login", link: "/login"}, {text: "home", link: "/"}, {text: "register", link: "/register"}]
        })
    } else {
        res.json({
            message: "You were logged out",
            buttons: [{text: "login", link: "/login"}, {text: "home", link: "/"},  {text: "register", link: "/register"}]
        })
    }
}


async function login(req, res) {

    console.log("login called");
    console.log(req.body);

    const user = await resolveUserNameAndSecret(req.body.username, req.body.usersecret);

    console.log(user)
    if (!user) {
        res.json(false)
    } else {
        res.setHeader("Set-Cookie", [`username=${user.name};`,`usersecret=${user.secret};`])
        res.json(true)
    }
}


async function register(req, res) {
    console.log(req.body)
    console.log("register called");
    const resultBool = await createUser(req.body.username, req.body.usersecret)

    res.json(resultBool);
}


async function createUser(username, usersecret) {
    await dbclient.connect()

    // Access the database and collection
    const db = dbclient.db('nikita');
    const collection = db.collection('users');

    // Query for the user by username
    const user = await collection.findOne({ name: username });
    if (user){
        console.log("User exists, cant add new one ", username)
        return false
    }
    const insertResult = await collection.insertOne({
        name: username, secret: usersecret
    })
    return insertResult.acknowledged
}
 

async function resolveUserFromCookie(rawcookie) {
    if (!rawcookie) {
        return false;
    }
    const cookies = {}
    rawcookie.split(';').forEach(cookie => {
        const [name, value] = cookie.split('=').map(c => c.trim());
        cookies[name] = value;
      });
    
    if (!cookies.username || !cookies.usersecret) {
        console.log('no user creds saved ')
        return false
    } else {
        return await resolveUserNameAndSecret(cookies.username, cookies.usersecret)
    }
}


async function resolveUserNameAndSecret(username, usersecret) {
   
    await dbclient.connect()

    // Access the database and collection
    const db = dbclient.db('nikita');
    const collection = db.collection('users');

    // Query for the user by username
    const user = await collection.findOne({ name: username });
    if (!user){
        console.log("user not in db ", username)
        return false
    }

    if (user.secret && user.secret == usersecret){
        return { name: username, secret: usersecret }
    } else {
        console.log('user in db but credential does not match');
        return false
    }
    
}

function returnGeneric(res) {
    res.json({
        message: "Welcome! You are not logged in.",
        buttons: [{text: "login", link: "/login"}, {text: "register", link: "/register"}]
    })
}

function returnUserPage(res, user) {
    res.json({
        message: `Welcome, ${user.name}! You are in the system and can see our secrets.`,
        buttons: [{text: "logout", link: "/logout"}]
    })
}


app.listen(3000, () => {
    console.log('listen hello')
})

function handleError(error) {
    console.log(error)
}