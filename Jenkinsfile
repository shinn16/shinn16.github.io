pipeline {
    agent{
        docker {image 'alpine'}
    }
    stages {
        stage('Test') {
            steps {
                sh 'pwd; ls'
            }
        }
    }
}