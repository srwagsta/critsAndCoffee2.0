pipeline {
    agent none
    stages {
        stage('Local Build') {
            agent any
            steps {
                sh 'docker-compose -f ./local.yml build --force-rm --pull'
            }
        }
        stage('Test Local') {
            agent any
            steps {
                echo 'TODO: Run test on local containers / Should I Build and run the test containers first?'
            }
        }
        stage('Push Local Containers') {
            agent docker
            steps {
                sh 'docker-compose -f ./local.yml push'
            }
        }
        stage('Production Build') {
            agent any
            steps {
                sh 'docker-compose -f ./production.yml build --force-rm --pull'
            }
        }
        stage('Test Production') {
            agent any
            steps {
                echo 'TODO: Run test on production containers'
            }
        }
        stage('Push Production Containers') {
            agent any
            steps {
                sh 'docker-compose -f ./production.yml build --force-rm --pull'
            }
        }
        stage('Deploy To Live') {
            agent any
            steps {
                echo 'TODO: Setup Live Environment and Deployment Pipe'
            }
        }
        stage('Clean Up') {
            agent any
            steps {
                 sh 'docker-image rm $(docker-image ls srwagsta/* -qa) --force'
            }
        }
    }
}
