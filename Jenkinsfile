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
                        dockerImage.push('latest')
                        dockerImage.push("${env.BUILD_ID}")
                        echo "Docker image ${DOCKER_IMAGE_NAME}:${env.BUILD_ID} pushed successfully"
                    }
                    
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Pare o contêiner em execução, se houver
                    sh 'docker stop api-produto || true'
                    sh 'docker rm api-produto || true'
                    
                    // Execute o novo contêiner
                    sh "docker run -d --name api-produto -p 3001:3001 ${DOCKER_IMAGE_NAME}:${env.BUILD_ID}"
                    echo "Application deployed successfully"
                    echo "Application runnin at port 3001"
                }
            }
        }
    }
}