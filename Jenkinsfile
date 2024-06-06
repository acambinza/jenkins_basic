pipeline {
    agent any

    stages {
        stage ('Build Image') {
            steps {
                script {
                    dockerapp = docker.build("acambinza/api-produto:${env.BUILD_ID}", '-f ./api-produto/src/Dockerfile ./')
                }
            }
        }

        stage ('Push image') {
            steps {
                script {
                    docker.withDockerRegistry('https://registry.hub.docker.com', 'dockerhub') {
                        dockerapp.push('latest')
                        dockerapp.push('${env.BUILD_ID}')
                    }
                }
            }
        }
    }
}