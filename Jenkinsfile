node {

    docker.withRegistry(‘https://cloud.docker.com/repository/registry-1.docker.io/srwagsta/crits_and_coffee_2.0', ‘svc-acct’) {
        checkout scm
        stage(‘Build’) {
          sh ‘docker-compose –f local.yml build’
        }
    }
}
