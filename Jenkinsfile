pipeline{
	agent{
		docker{
			image 'ubuntu'
		}
	}
	stages{
		stage('Test'){
			steps{
				echo "Hey, I did something nifty!"
			}
		}
		stage('Deploy'){
			steps{
				sh'ssh cerberex@localhost "echo hello > test.text"'
			}
		}
	}
}