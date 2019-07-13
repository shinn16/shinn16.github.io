pipeline {
    agent{
        docker {image 'alpine'}
    }
    stages {
        stage('Test') {
            steps {
                sh 'uname -a'
                sh 'pwd; ls'
            }
        }
    }
}