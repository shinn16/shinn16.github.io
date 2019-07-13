pipeline {
    agent {
        docker { image 'kroniak/ssh-client' }
    }
    stages {
        stage('Test') {
            steps {
                sh 'ssh -v'
            }
        }
    }
}