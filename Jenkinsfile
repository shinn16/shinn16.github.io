pipeline {
    agent any
    stages {
        stage('Clean'){
            steps{
                sh 'echo "Cleaning up repository."'
                sh 'rm -r .git* Jenkinsfile *.md'
            }
        }
        stage('Deploy') {
            steps {
                sh 'Deploying files to webserver.'
                sh 'ls'
                sh 'mv * /var/www/html/personal-site'
            }
        }
    }
}