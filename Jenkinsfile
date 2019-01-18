pipeline {
    agent any
    stages {
        stage('Build') {
            sh "docker-compose -f local.yml build"
        }
    }
}
