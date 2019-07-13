pipeline {
    agent any
    stages {
        stage('Deploy') {
            steps {
                sh 'echo $USER'
                sh 'rm -r .git* Jenkinsfile; mv * /var/www/html/personal-site'
            }
        }
    }
}