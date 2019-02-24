// NOTE: the `push` directives only work because a `docker login` has been executed inside the build container
pipeline {
    agent none
    stages {
        stage('Build and Push new GeoDjango container') {
            agent any
            steps {
                sh 'cd ./bash_scripts/image-builder && chmod 777 ./* && ./build_base_images.sh'
            }
        }
        stage('Build and Push test images') {
            agent any
            steps {
                sh 'cd ./bash_scripts/image-builder && ./build_test.sh'
            }
        }

        stage('Run Tests') {
            agent any
            steps {
                // sh 'docker-compose -f ./test.yml build --force-rm --pull'
                echo 'TODO: Run tests and output the results?'
            }
        }

        stage('Build and Push local images') {
            agent any
            steps {
                sh 'cd ./bash_scripts/image-builder && ./build_local.sh'
            }
        }

        stage('Build and Push production images') {
            agent any
            steps {
                sh 'cd ./bash_scripts/image-builder && ./build_production.sh'
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
                    '''
                        docker stop $(docker ps -a | grep -v "jenkins_master" | awk 'NR>1 {print $1}') ||
                        echo 'Stopped all containers. With Exception Thrown'
                    '''
                }
            }
        }

        stage('Remove Containers') {
            agent any
            steps {
                script {
                    '''
                        docker rm $(docker ps -a | grep -v "jenkins_master" | awk 'NR>1 {print $1}') ||
                       echo 'Removed all containers. With Exception Thrown'
                   '''
                }
            }
        }

        stage('Deleting Containers') {
            agent any
            steps {
                script {
                    '''
                        docker image rm $(docker image ls -qa) --force ||
                        echo 'Removed images. With Exception Thrown'
                    '''
                }
            }
        }

    }
}
