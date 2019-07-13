pipeline {
    agent{
        docker {image 'alpine'}
    }
    stages {
        stage('Test') {
            steps {
                sh 'cd /; ls; pwd'
            }
        }
    }
}