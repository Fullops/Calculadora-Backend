pipeline {
  agent any

  stages {
    stage('Instalar dependencias') {
      steps {
        sh 'npm install'
      }
    }
    stage('Ejecutar pruebas') {
      steps {
        sh 'npm test'
      }
    }
  }
}
