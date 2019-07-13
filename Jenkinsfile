pipeline{
	agent{
		docker{
			image 'debian'
		}
	}
	stages{
		stage('Test'){
			steps{
				sh 'uname -a'
				// sh 'apt-get install -y ssh && echo "SSH installed successfully!"'
				sh 'echo "Hey, I did something nifty!"'
			}
		}
	}
}