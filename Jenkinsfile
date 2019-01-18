pipeline {
    agent Docker
    stages {
        stage('Build') {
            steps {
                sh 'docker-compose -f local.yml build'
            }
        }
    }
}
