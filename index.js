import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 4000;

app.use(cors()); // Enable CORS for potential cross-origin requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Sample data for users
let users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Alice Johnson', email: 'alice@gmail.com' },
    { id: 4, name: 'Bob Brown', email: 'bob@gmail.com' },
    { id: 5, name: 'Charlie Black', email: 'charlie@gmail.com' }
];

// Sample data for fruits
let fruits = [
    { id: 1, name: 'Apple', price: 0.5 },
    { id: 2, name: 'Banana', price: 0.3 },
    { id: 3, name: 'Orange', price: 0.6 },
    { id: 4, name: 'Mango', price: 1.2 },
    { id: 5, name: 'Pineapple', price: 1.5 }
];

// Sample data for gadgets
let gadgets = [
    { id: 1, name: 'Smartphone', price: 699.99 },
    { id: 2, name: 'Laptop', price: 1299.99 },
    { id: 3, name: 'Headphones', price: 99.99 },
    { id: 4, name: 'Smartwatch', price: 199.99 },
    { id: 5, name: 'Tablet', price: 499.99 }
];

// GET all users
app.get('/api/users', (req, res) => {
    res.json(users);
});

// GET user by ID
app.get('/api/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
});


// GET all fruits
app.get('/api/fruits', (req, res) => {
    res.json(fruits);
});

// GET fruit by ID
app.get('/api/fruits/:id', (req, res) => {
    const fruit = fruits.find(f => f.id === parseInt(req.params.id));
    if (!fruit) return res.status(404).json({ message: 'Fruit not found' });
    res.json(fruit);
});

// GET all gadgets
app.get('/api/gadgets', (req, res) => {
    res.json(gadgets);
});

// GET gadget by ID
app.get('/api/gadgets/:id', (req, res) => {
    const gadget = gadgets.find(g => g.id === parseInt(req.params.id));
    if (!gadget) return res.status(404).json({ message: 'Gadget not found' });
    res.json(gadget);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});