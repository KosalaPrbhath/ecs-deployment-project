const express = require('express');
const app = express();
const port = 8080;
const STUDENT_NAME = "Kosala Prabhath";

app.get('/', (req, res) => {
    res.send(\
        <!DOCTYPE html>
        <html>
        <head><title>ECS Deployment</title>
        <style>
            body { font-family: Arial; padding: 40px; }
            .student { color: blue; font-size: 24px; margin: 20px 0; }
            .timestamp { color: gray; font-style: italic; }
            .info { background: #f5f5f5; padding: 15px; margin: 20px 0; }
        </style>
        </head>
        <body>
            <h1>Hello from ECS Deployment Project!</h1>
            <div class="student"><strong>Student:</strong> \</div>
            <div class="timestamp"><strong>Timestamp:</strong> \</div>
            <div class="info">
                <h3>Deployment Information:</h3>
                <ul>
                    <li>Terraform Infrastructure (VPC, ECS, ECR, ALB)</li>
                    <li>GitHub Actions CI/CD Pipeline</li>
                    <li>AWS ECS Fargate</li>
                    <li>Docker Container</li>
                </ul>
            </div>
            <p>Access URL: http://kosala-ecs-app-alb-2018357677.us-east-1.elb.amazonaws.com</p>
            <p><a href="/health">Health Check</a></p>
        </body>
        </html>
    \);
});

app.get('/health', (req, res) => {
    res.json({
        status: 'healthy',
        timestamp: new Date().toISOString(),
        student: STUDENT_NAME,
        service: 'ecs-deployment-app'
    });
});

app.listen(port, () => {
    console.log(\Server running on port \\);
});
