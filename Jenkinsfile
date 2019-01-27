pipeline {
    agent none
    stages {
        stage('Compose Build') {
            agent any
            steps {
                sh 'docker-compose -f ./local.yml build --force-rm --pull'
            }
        }
    }
}
