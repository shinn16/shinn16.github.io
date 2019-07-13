pipeline{
	stages{
		stage('Test'){
			steps{
				sh'echo "Hey, I did something nifty!"'
			}
		}
		stage('Deploy'){
			steps{
				sh'ssh cerberex@localhost "echo hello > test.text"'
			}
		}
	}
}