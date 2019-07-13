pipeline {
    agent any
    stages {
        stage('Clean'){
            steps{
                sh 'echo "Cleaning up repository."'
                sh 'rm -r .git* Jenkinsfile *.md'
                sh 'echo "Removing previous installation."'
                script { // this allows me to use a try catch block, try catch must be in script tags.
                    try {
                        sh 'cd /var/www/html/personal-site/; rm -r *'
                    } catch (Exception e) {
                        sh 'echo "Nothing to remove, moving on to deployment."'
                    }
                }
            }
        }
        stage('Deploy') {
            steps {
                sh 'echo "Deploying files to webserver."'
                sh 'mv * /var/www/html/personal-site'
            }
        }
    }
}