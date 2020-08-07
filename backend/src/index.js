const express =  require('express');
const { uuid, isUuid } = require('uuidv4');
const { response } = require('express');

const app = express();
app.use(express.json());

function logMid (req, resp, next) {
    const { method, url } = req;
    console.log(`[${method.toUpperCase()}] ${url}`);
    next();
}


function validateId(req, resp, next) {
    const { id } = req.params;
    if (!isUuid(id)) {
        return resp.status(400).json({error: 'Invalid id'});
    }
    next()
}

app.use(logMid);

const projects = [
    {
        "id": "a5a5786e-b8cd-4d2a-b632-7a8f87bfec7a",
        "title": "Proj1",
        "owner": "VBarros"
    },
    {
        "id": "f17c6bbb-b737-4180-aa47-99a914b2b8eb",
        "title": "Proj2",
        "owner": "VBarros"
    }
];

app.get('/', (req, resp) => {
    return resp.json({msg: 'hello~vabarros'});
});

app.get('/projects', (req, resp) => {
    const { title } = req.query;
    const result = title
        ? projects.filter(proj => proj.title.includes(title))
        : projects;

    return resp.json(result);
});

app.post('/projects', (req, resp) => {
    const { title, owner } = req.body;
    const proj = { id: uuid(), title, owner };
    projects.push(proj);

    return resp.status(201).json(proj);
});

app.put('/projects/:id', validateId, (req, resp) => {
    const { title, owner } = req.body;
    const { id } = req.params;
    const projIdx = projects.findIndex(project => project.id == id);

    if (projIdx < 0) {
        return resp.status(400).json({error: "not found"});
    }

    proj = {id, title, owner};
    projects[projIdx] = proj

    return resp.json(proj);
});

app.delete('/projects/:id', validateId, (req, resp) => {
    const { id } = req.params;
    const projIdx = projects.findIndex(project => project.id == id);

    if (projIdx < 0) {
        return resp.status(400).json({error: "not found"});
    }

    projects.splice(projIdx, 1);

    return resp.status(204).send();
});

app.listen(8080, '0.0.0.0');
