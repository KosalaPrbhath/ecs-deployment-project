const express = require('express');
const app = express();
const port = 8080;
const STUDENT_NAME = "Kosala Prabhath";

app.get('/', (req, res) => {
    res.send(\
        <!DOCTYPE html>
        <html>
        <head>
            <title>ECS Deployment Assignment</title>
            <style>
                body { font-family: Arial, sans-serif; max-width: 800px; margin: 40px auto; padding: 20px; background: #f5f5f5; }
                .container { background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
                h1 { color: #333; } h2 { color: #0066cc; }
                .info { background: #e8f4fd; padding: 15px; border-left: 4px solid #0066cc; margin: 20px 0; }
                .timestamp { color: #666; font-style: italic; }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>🚀 ECS Deployment Project</h1>
                <div class="info"><h2>Student: \</h2></div>
                <h3>Deployment Information:</h3>
                <ul>
                    <li><strong>Infrastructure:</strong> Terraform (VPC, ECS, ECR, ALB)</li>
                    <li><strong>CI/CD:</strong> GitHub Actions</li>
                    <li><strong>Container:</strong> Docker + Node.js</li>
                    <li><strong>Platform:</strong> AWS ECS Fargate</li>
                </ul>
                <div class="timestamp"><p><strong>Timestamp:</strong> \</p></div>
                <hr>
                <p><a href="/health">Health Check</a></p>
            </div>
        </body>
        </html>
    \);
});

app.get('/health', (req, res) => {
    res.json({ 
        status: 'healthy',
        timestamp: new Date().toISOString(),
        student: STUDENT_NAME,
        deployment: 'AWS ECS Fargate'
    });
});

app.listen(port, () => {
    console.log(\Server running on port \\);
});
