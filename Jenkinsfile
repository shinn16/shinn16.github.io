pipeline {
    agent{
        docker {image 'alpine'}
    }
    stages {
        stage('Test') {
            steps {
                sh 'cd /var/www/html; ls'
                sh 'pwd; ls'
            }
        }
    }
}