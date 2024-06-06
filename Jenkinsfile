pipeline {
    agent any

    environment {
        DOCKER_REGISTRY_URL = 'https://registry.hub.docker.com'
        DOCKER_CREDENTIALS_ID = 'dockerhub' // The ID of the Docker Hub credentials stored in Jenkins
    }

    stages {
        stage ('Build Image') {
            steps {
                script {
                    def dockerapp = docker.build("acambinza/api-produto:${env.BUILD_ID}", '-f ./api-produto/src/Dockerfile ./')
                }
            }
        }

        stage ('Push image') {
            steps {
                script {
                       docker.withRegistry(DOCKER_REGISTRY_URL, DOCKER_CREDENTIALS_ID) {
                        dockerapp.push('latest')
                        dockerapp.push("${env.BUILD_ID}")
                    }
                }
            }
        }
    }
}