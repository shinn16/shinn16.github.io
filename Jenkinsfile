pipeline{
	agent{
		docker{
			image 'ubuntu'
		}
	}
	stages{
		stage('Test'){
			steps{
				sh 'apt-get install -y ssh && echo "SSH installed successfully!"'
				sh 'echo "Hey, I did something nifty!"'
			}
		}
	}
}