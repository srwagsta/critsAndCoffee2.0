node {
    checkout scm
    def testImage = docker.build("test-image", "./compose/local/angular")
    testImage.inside {
        sh 'make test'
    }
}
