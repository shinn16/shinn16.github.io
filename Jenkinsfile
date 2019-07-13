pipeline {
    agent{
        docker {image 'alpine'}
    }
    stages {
        stage('Test') {
            steps {
                sh 'cd /var/; ls; pwd'
            }
        }
    }
}