pipeline {
    agent any

    environment {
        DOCKER_REGISTRY_URL = 'https://registry.hub.docker.com'
        DOCKER_CREDENTIALS_ID = 'dockerhub' // The ID of the Docker Hub credentials stored in Jenkins
        DOCKER_IMAGE_NAME = 'acambinza/api-produto'
    }

    stages {
        stage ('Build Image') {
            steps {
                script {
                    def dockerImage = docker.build("${DOCKER_IMAGE_NAME}:${env.BUILD_ID}", '-f ./api-produto/src/Dockerfile ./')
                    echo "Docker image ${DOCKER_IMAGE_NAME}:${env.BUILD_ID} built successfully"
                }
                
            }
        }

        stage ('Push image') {
            steps {
                script {
                        docker.withRegistry(DOCKER_REGISTRY_URL, DOCKER_CREDENTIALS_ID) {
                        def dockerImage = docker.image("${DOCKER_IMAGE_NAME}:${env.BUILD_ID}")
                        dockerImage.push()
                        echo "Docker image ${DOCKER_IMAGE_NAME}:${env.BUILD_ID} pushed successfully"
                    }
                    
                }
            }
        }
    }
}