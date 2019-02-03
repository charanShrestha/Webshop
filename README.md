# &lt;/salt&gt;

## Salt Shopping v2.0

Let's rewrite the Salt Shopping app!
Let's make it a SPA using React with a fresh backend!

### Client
The client should be a fast, modern SPA and you will use React to achieve that.
You should write all the client side code in the subproject `client`.

### Backend
You should write all you backend code in the subproject `server`.
You will start out with a fake backend and eventually implement the real thing.

### Exercise 1
#### Client
Build the basic page using React. You should implement the `home`, `products` and `about` pages.
To do this, you should use `react-router`, which is already installed as a dependency.

#### Server
On the backend side, you should use `json-server` to fake the products API like so `npx json-server --watch db.json --port 8080`.

#### Proxy
You should set up a proxy between the client and the server and only use relative paths for the communication between them.

### Exercise 2
#### Client
Now it is time to implement the rest of the client.
Since part of the logic of our application is based on cookies, you will have to handle cookies in the client.
The projects is already prepared with `react-cookie` as a dependency. 
You should use that to read the cookies.

#### Server
At this stage you have to make the backend set the `salt-session` cookie. 
To do that, you will have to make the server somewhat smarter by using middleware.
Create a new `json-server` instance in a file called `server.js`.
Now you can create your own custom middleware to set the session cookie when a new cart is created.
