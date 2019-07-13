pipeline {
    agent {
        docker { image 'alpine-ssh' }
    }
    stages {
        stage('Test') {
            steps {
                sh 'ssh -v'
            }
        }
    }
}