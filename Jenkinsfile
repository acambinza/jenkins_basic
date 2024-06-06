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
    }
}