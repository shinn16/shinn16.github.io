pipeline {
    agent any
    stages {
        stage('Clean'){
            steps{
                sh 'echo "Cleaning up repository."'
                sh 'rm -r .git* Jenkinsfile *.md'
                sh 'echo "Removing previous installation."'
                sh 'cd /var/www/html/personal-site/; rm -r *'
            }
        }
        stage('Deploy') {
            steps {
                sh 'echo "Deploying files to webserver."'
                sh 'mv * /var/www/html/personal-site'
            }
        }
    }
}