pipeline {
    agent any
    stages {
        stage('Build') {
            def testImage = docker.build("test-image", "./compose/local/angular/Dockerfile")
            testImage.inside {
                sh 'make test'
            }
        }
    }
}
