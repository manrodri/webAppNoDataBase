pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'Running build automation'
                sh './gradlew build'
                archiveArtifacts artifacts: 'dist/app.zip'
            }
        }
        stage('Build Docker Image') {
            steps {
                    sh 'echo running: DOCKER BUILD...'
                    sh "docker build -t manrodri/yelp_camp:latest ."
                    sh 'echo DOCKER BUILD SUCCESSFUL'
                }
            }
        }
        
        
    }




// stage('Push Docker Image') {

//             steps {
//                 script {
//                     sh 'echo PUSHING TO REPO...'
//                     docker.withRegistry('https://registry.hub.docker.com', 'docker_hub_login') {
//                         sh "docker push manrodri/yelp_camp:latest"
//                     }
//                 }
//             }
//         }

// stage('DeployToProduction') {

//             steps {
//                 input 'Deploy to Production?'
//                 milestone(1)
//                 withCredentials([usernamePassword(credentialsId: 'webserver_login', usernameVariable: 'USERNAME', passwordVariable: 'USERPASS')]) {
//                     script {
//                         sh "sshpass -p '$USERPASS' -v ssh -o StrictHostKeyChecking=no $USERNAME@$prod_ip \"docker pull manrodri/yelp_camp:${env.BUILD_NUMBER}\""
//                         try {
//                             sh "sshpass -p '$USERPASS' -v ssh -o StrictHostKeyChecking=no $USERNAME@$prod_ip \"docker stop yelp_camp\""
//                             sh "sshpass -p '$USERPASS' -v ssh -o StrictHostKeyChecking=no $USERNAME@$prod_ip \"docker rm yelp_camp\""
//                         } catch (err) {
//                             echo: 'caught error: $err'
//                         }
//                         sh "sshpass -p '$USERPASS' -v ssh -o StrictHostKeyChecking=no $USERNAME@$prod_ip \"docker run --restart always --name train-schedule -p 8081:80 -d manrodri/yelp_camp:${env.BUILD_NUMBER}\""
//                     }
//                 }
//             }
//         }