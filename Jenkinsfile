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



        stage('Stop Containers') {
            agent any
            steps {
                script {
                    sh 'docker stop $(docker ps -a | grep -v "jenkins_master" | awk \\\'NR>1 {print $1}\\\') ||
                    echo \\\'Stopped all containers. With Exception Thrown\\\' '
                }
            }
        }

        stage('Remove Containers') {
            agent any
            steps {
                script {
                    try{
                        sh 'docker rm $(docker ps -a | grep -v "jenkins_master" | awk \\\'NR>1 {print $1}\\\')'
                    } catch (Exception e) {
                        sh 'Removed all containers. With Exception Thrown'
                    }
                }
            }
        }

        stage('Deleting Containers') {
            agent any
            steps {
                script {
                    try {
                        sh 'docker image rm $(docker image ls -qa) --force'
                    } catch (Exception e) {
                        sh 'Removed images. With Exception Thrown'
                    }
                }
            }
        }

    }
}
