// NOTE: the `push` directives only work because a `docker login` has been executed inside the build container
pipeline {
    agent none
    stages {
        stage('Add Private data to project for building from host') {
            agent any
            steps {
                sh 'cp -r /var/jenkins_build_data/.private ./Docker/.envs'
            }
        }
        stage('Build and Push new GeoDjango container') {
            agent any
            steps {
                sh 'cd ./Docker/bash_scripts/image-builder && chmod 777 ./* && ./build_base_images.sh'
            }
        }
        stage('Build and Push test images') {
            agent any
            steps {
                sh 'cd ./Docker/bash_scripts/image-builder && chmod 777 ./* && ./build_test.sh'
            }
        }

        stage('Run Tests') {
            agent any
            steps {
                sh 'cd ./Docker/bash_scripts/deployment && chmod 777 ./* && ./execute_tests.sh'
            }
        }

        stage('Build and Push local and production images') {
            agent any
            steps {
                sh 'cd ./Docker/bash_scripts/image-builder && chmod 777 ./* && ./build_containers.sh'
            }
        }

        stage('Deploy To Live') {
            agent any
            steps {
                 //sh 'cd ./Docker/bash_scripts/deployment && chmod 777 ./* && ./live.sh'
                 sh 'echo TODO: Deploy Live!'
            }
        }

        stage('Cleanup Environment') {
            agent any
            steps {
                sh 'cd ./Docker/bash_scripts/image-builder && chmod 777 ./* && ./cleanup_environment.sh'
            }
        }

    }
}


