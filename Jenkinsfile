pipeline {
    agent {
        docker { image 'kroniak/ssh-client' }
    }
    stages {
        stage('Test') {
            steps {
                sh 'echo "am I working or crying?"'
                sh 'ssh --help'
            }
        }
    }
}