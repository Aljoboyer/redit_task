# GraphQL API Server

This is a **GraphQL API Server** built with **Node.js** and **Apollo Server**.  
It supports a custom GraphQL schema and uses local JSON files (`action.json`, `trigger.json`, `node.json`, `response.json`, `resourceTemplate.json`) as the data source. Authentication is implemented using a Bearer token.

---

## 🔗 GitHub Repository

**Repository Link:** [https://github.com/Aljoboyer/redit_task](https://github.com/Aljoboyer/redit_task)

---

## 🚀 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Aljoboyer/redit_task.git
   cd redit_task
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the server:**
   ```bash
   npm start
   ```

   Once the server starts, you should see:
   ```
   🚀 Server ready at http://localhost:4000/
   ```

4. **Access the GraphQL Playground:**
   Open `http://localhost:4000/` in your browser and click **"Query your server"**.

---

## 🔐 Authentication

You need to provide a Bearer token in the header to access the API.

- Click on the **"Headers"** tab in Apollo Playground and add:

  ```json
  {
    "Authorization": "Bearer your-secure-token"
  }
  ```

- # Token:
  ```
  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IlRlc3RpbmdhQGdtYWlsLmNvbSIsImlhdCI6MTc0NjAwNzM2NywiZXhwIjoxNzQ2NjEyMTY3fQ.yLAIGduLTi2wUU24Fhvhn68qq6WFdgxBrvJJAbzdK5Y
  ```

---

## 🧪 Sample Queries

**Fetch a single Node:**

```graphql
query {
  Node(input: "6296be3470a0c1052f89cccb") {
    name
  }
}
```

**Fetch all Nodes:**

```graphql
query {
  AllNode {
    name
  }
}
```

### Available Queries

| Query Name            | Description                      |
|-----------------------|----------------------------------|
| `Action`              | Get a specific Action            |
| `AllAction`           | Get all Actions                  |
| `Response`            | Get a specific Response          |
| `AllResponse`         | Get all Responses                |
| `Trigger`             | Get a specific Trigger           |
| `AllTrigger`          | Get all Triggers                 |
| `ResourceTemplate`    | Get a specific ResourceTemplate  |
| `AllResourceTemplate` | Get all ResourceTemplates        |

> Use the above query names and provide required fields/IDs to retrieve specific or all data.

---

## 📁 Project Structure

```
rediT_graphql_server/
├── data/                     # Static JSON files (mock DB)
│   ├── action.json
│   ├── trigger.json
│   ├── node.json
│   ├── response.json
│   └── resourceTemplate.json
├── resolvers/               # GraphQL resolver functions
│   └── index.js
├── schema/                  # GraphQL schema definition
│   └── typeDefs.js
├── utils/                   # Utility functions (e.g., auth)
│   └── auth.js
├── index.js                 # Entry point of the server
```

---

## 🛠 About the Codebase

- **Apollo Server:** Used for serving the GraphQL API.
- **Static JSON Files:** Mock database source located in the `/data` directory.
- **Resolvers:** Handle query logic, placed in `/resolvers/index.js`.
- **Schema:** Full GraphQL schema defined in `/schema/typeDefs.js`.
- **Authentication:** Handled via middleware in `/utils/auth.js`.

---
