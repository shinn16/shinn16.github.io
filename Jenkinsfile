pipeline {
    agent any
    stages {
        stage('Deploy') {
            steps {
                sh 'rm -r .git* Jenkinsfile; mv * /var/www/html/personal-site'
            }
        }
    }
}