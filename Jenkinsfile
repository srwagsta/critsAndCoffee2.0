// NOTE: the `push` directives only work because a `docker login` has been executed inside the build container
pipeline {
    agent none
    stages {
        stage('Test Build') {
            agent any
            steps {
                sh 'docker-compose -f ./test.yml build --force-rm --pull'
            }
        }
        stage('Run Tests') {
            agent any
            steps {
                // sh 'docker-compose -f ./test.yml build --force-rm --pull'
                echo 'TODO: Run tests and output the results?'
            }
        }
        stage('Push Testing Containers') {
            agent any
            steps {
                sh 'docker-compose -f ./test.yml push'
            }
        }
        stage('Local Build') {
            agent any
            steps {
                sh 'docker-compose -f ./local.yml build --force-rm --pull'
            }
        }
        stage('Push Local Containers') {
            agent any
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
            
                // TODO: The removal of images in this step could cause bash error,
                // but these are expected because we don't want to stop or remove the builder

                 sh 'docker stop $(docker ps -a | grep -v "jenkins_master" | awk 'NR>1 {print $1}')'
                 sh 'docker rm $(docker ps -a | grep -v "jenkins_master" | awk 'NR>1 {print $1}')'
                 sh 'docker image rm $(docker image ls -qa) --force'

            }
        }
    }
}
