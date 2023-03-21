# ChatGPT SDK

A simple Node.js SDK for interacting with the ChatGPT API by OpenAI.

---

## 🚀 Features

- 🤖 Easily query the ChatGPT API.
- 🛡️ Built-in error handling and rate-limit retries.
- 🐳 Dockerized for consistent environment and deployment.

---

## 🛠️ Setup

### Local Environment

1. **Clone the Repository**
   ```bash
   git clone [Your Repository URL]
   cd [Your Repository Name]
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Environment Variables**

   Create a `.env` file in the root directory and add:
   ```plaintext
   OPENAI_API_KEY=YOUR_OPENAI_API_KEY
   ```

### Docker

Ensure you have [Docker](https://docs.docker.com/get-docker/) and [Docker Compose](https://docs.docker.com/compose/install/) installed.

🔥 **Build & Run the SDK within a Docker Container**
```bash
docker-compose up --build
```

---

## 🎮 Usage

> [Provide usage examples or link to documentation.]

---

## 🧪 Testing

Run tests using the following:

```bash
npm test
```

---

## ⚙️ GitHub Actions

This repository utilizes GitHub Actions to automate building a Docker image upon each push to the `main` branch and then pushes it to DockerHub.

💡 **Note**: Ensure `DOCKERHUB_USERNAME` and `DOCKERHUB_TOKEN` secrets are set in the GitHub repository for automated Docker image pushes.

---

## 📜 License

This project is licensed under the MIT License.

