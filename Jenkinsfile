pipeline {
    agent {
        docker { image 'ubuntu:18.04' }
    }
    stages {
        stage('Test') {
            steps {
                sh 'apt-get install -y ssh && echo "SSH installed succesfully!"'
            }
        }
    }
}