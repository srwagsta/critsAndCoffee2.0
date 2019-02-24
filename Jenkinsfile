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
                sh 'cd ./bash_scripts/image-builder && chmod 777 ./* && ./build_test.sh'
            }
        }

        stage('Run Tests') {
            agent any
            steps {
                sh 'cd ./bash_scripts/deployment && chmod 777 ./* && ./execute_tests.sh'
            }
        }

        stage('Build and Push local and production images') {
            agent any
            steps {
                sh 'cd ./bash_scripts/image-builder && chmod 777 ./* && ./build_containers.sh'
            }
        }

        stage('Deploy To Live') {
            agent any
            steps {
                 sh 'cd ./bash_scripts/deployment && chmod 777 ./* && ./live.sh'
            }
        }

        stage('Cleanup Environment') {
            agent any
            steps {
                sh 'cd ./bash_scripts/image-builder && chmod 777 ./* && ./cleanup_environment.sh'
            }
        }

    }
}


