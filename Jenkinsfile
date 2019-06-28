pipeline {
    agent any
    stages {
        stage('Build'){
            steps{
                echo 'Running build automation'
                sh './gradlew --no-daemon'
                archiveArtifacts artifacts: 'dist/app.zip'
            }
           
        }
    }
}
