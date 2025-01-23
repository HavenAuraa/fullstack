import express from 'express';

const app = express();

const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('<form action="/submit" method="POST"><label for="name">Name: </label><input type="text" id="name" name="name" required /><br><label for="email">Email: </label><input type="email" id="email" name="email" required /><br><button type="submit">Submit</button></form>');
});

app.post('/submit', (req, res) => {
    const { name, email } = req.body;
    res.send(`<h1>Thank you, ${name}!</h1><p>Your email is ${email}</p>`);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});