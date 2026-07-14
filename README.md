# CI/CD Pipeline for Flask and Express Applications using Jenkins

## Overview

This project demonstrates a complete Continuous Integration and Continuous Deployment (CI/CD) pipeline using **Jenkins** to automate the deployment of two applications:

- **Flask Backend (Python)**
- **Express Frontend (Node.js)**

The pipeline automatically pulls the latest code from GitHub, installs dependencies, and restarts the applications using **PM2** whenever new code is pushed to the repositories.

---

## Objective

The objective of this project is to automate application deployment using Jenkins and GitHub Webhooks, eliminating the need for manual deployment after every code change.

---

## Tech Stack

- Jenkins
- Git & GitHub
- Python 3
- Flask
- Node.js
- Express.js
- PM2
- Ubuntu EC2 (AWS)
- GitHub Webhooks

---

## Project Architecture

```
                 GitHub Repository
                       │
                 Push New Changes
                       │
                GitHub Webhook
                       │
                  Jenkins Server
                       │
         ------------------------------
         │                            │
   Flask Pipeline              Express Pipeline
         │                            │
 Install Dependencies      Install Dependencies
         │                            │
 Restart Flask App         Restart Express App
         │                            │
          ------------ EC2 Server ------------
```

---

## Features

- Automated deployment using Jenkins
- Separate pipelines for Flask and Express
- Automatic dependency installation
- Process management using PM2
- GitHub Webhook integration
- Easy rollback by redeploying previous commits
- Modular Jenkins pipelines

---

## Repository Structure

```
.
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   ├── Jenkinsfile
│   └── ...
│
├── frontend/
│   ├── server.js
│   ├── package.json
│   ├── Jenkinsfile
│   └── ...
│
└── README.md
```

---

## Jenkins Pipeline Workflow

### Backend Pipeline

1. Pull latest code from GitHub
2. Create Python virtual environment
3. Install Python dependencies
4. Restart Flask application using PM2

### Frontend Pipeline

1. Pull latest code from GitHub
2. Install Node.js dependencies
3. Restart Express application using PM2

---

## Jenkins Pipeline Stages

### Backend

```
Checkout Source Code
        ↓
Install Python Dependencies
        ↓
Restart Flask Application
```

### Frontend

```
Checkout Source Code
        ↓
Install Node Modules
        ↓
Restart Express Application
```

---

## Prerequisites

Before running this project, ensure the following software is installed:

- Ubuntu Server
- Jenkins
- Java 21
- Git
- Python 3
- pip
- Node.js
- npm
- PM2

---

## Jenkins Plugins Used

- Git Plugin
- GitHub Plugin
- Pipeline Plugin
- NodeJS Plugin
- Workspace Cleanup Plugin

---

## GitHub Webhook Configuration

Payload URL

```
http://<EC2-PUBLIC-IP>:8080/github-webhook/
```

Content Type

```
application/json
```

Trigger

```
Just the push event
```

---

## How the Pipeline Works

Whenever code is pushed to GitHub:

1. GitHub sends a webhook request to Jenkins.
2. Jenkins detects the change.
3. Jenkins checks out the latest source code.
4. Dependencies are installed automatically.
5. PM2 restarts the running application.
6. The latest version is deployed successfully.

---

## Running the Applications

### Backend

```
pm2 start app.py --interpreter python3 --name flask-app
```

### Frontend

```
pm2 start server.js --name express-app
```

---

## Verify Deployment

Check PM2 status

```bash
pm2 list
```

View Jenkins status

```
http://<EC2-PUBLIC-IP>:8080
```

Test applications

```
http://<EC2-PUBLIC-IP>:5000
```

```
http://<EC2-PUBLIC-IP>:3000
```

---

## Future Enhancements

- Add automated testing stage
- Dockerize both applications
- Deploy using Kubernetes
- Integrate SonarQube for code quality
- Add Slack or Email notifications
- Add Docker image build and push to AWS ECR
- Deploy using AWS ECS or Kubernetes

---

## Screenshots

Add screenshots of:

- Jenkins Dashboard
- Successful Backend Build
- Successful Frontend Build
- PM2 Process List
- GitHub Webhook Delivery
- Flask Application
- Express Application

---

## Learning Outcomes

By completing this project, you will gain experience with:

- Continuous Integration (CI)
- Continuous Deployment (CD)
- Jenkins Pipelines
- GitHub Webhooks
- Process Management using PM2
- Automated Application Deployment
- AWS EC2 Deployment
- Git-based Development Workflow

---

## Author

**Your Name**

GitHub: https://github.com/your-username

LinkedIn: https://linkedin.com/in/your-profile

---

## License

This project is intended for educational and learning purposes.
