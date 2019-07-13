pipeline {
    agent any
    stages {
        stage('Deploy') {
            steps {
                sh 'rm -r .*; mv * /var/www/html/personal-site'
            }
        }
    }
}