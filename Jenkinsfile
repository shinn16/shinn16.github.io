pipeline {
    agent any
    stages {
        stage('Test') {
            steps {
                sh 'echo "am I working or crying?"'
                sh 'ssh cerberex@localhost exit'
                sh 'echo "success!"'
            }
        }
    }
}