pipeline {
    agent any

    stages {
        stage ('Build Image') {
            steps {
                script {
                    dockerapp = docker.build("acambinza/api-produto", '-f ./api-produto/src/Dockerfile ./api-produto')
                }
            }
        }
    }
}